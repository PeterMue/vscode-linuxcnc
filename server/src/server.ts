import {
    CharStreams,
    CommonTokenStream,
    ParserRuleContext,
    Token,
    TokenStream
} from "antlr4ts";
import DiagnosticErrorCollector from "./diagnosticErrorCollector";
import { TextDocument } from "vscode-languageserver-textdocument";
import {
    CompletionItem,
    CompletionItemKind,
    CompletionItemTag,
    createConnection,
    DidChangeConfigurationNotification,
    DidChangeConfigurationParams,
    InitializeParams,
    InitializeResult,
    ProposedFeatures,
    TextDocumentPositionParams,
    TextDocuments,
    TextDocumentSyncKind
} from "vscode-languageserver/node";
import { LANGUAGE_SERVER_ID } from "../../common/out/constants";
import { HALLexer } from "./grammar/HALLexer";
import { HALParser } from "./grammar/HALParser";
import { HalcmdManpage } from "./halcmdManpage";
import { CodeCompletionCore } from "antlr4-c3";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";


let connection = createConnection(ProposedFeatures.all);

let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInfoCapability: boolean = false;

/**
 * Connection onInitialize
 */
connection.onInitialize((initParams: InitializeParams) => {
    let capabilities = initParams.capabilities;

    hasConfigurationCapability = !!(
        capabilities.workspace && capabilities.workspace.configuration
    );
    hasWorkspaceFolderCapability = !!(
        capabilities.workspace && capabilities.workspace.workspaceFolders
    );
    hasDiagnosticRelatedInfoCapability = !!(
        capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation
    );

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            completionProvider: {
                resolveProvider: true
            }
        }
    }

    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }

    return result;
});

/**
 * Connection onInitialized
 */
connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        connection.client.register(DidChangeConfigurationNotification.type);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(event => {
            connection.console.log("Workspace folder changed (" + event.added?.length + " added, " + event.removed?.length + " removed).");
        });
    }
});

interface LinuxcncLanguageServerSettings {
    maxNumberOfProblems: number;
}

const defaultSettings: LinuxcncLanguageServerSettings = {
    maxNumberOfProblems: 100
};
let globalSettings: LinuxcncLanguageServerSettings = defaultSettings;

let documentSettings: Map<string, Thenable<LinuxcncLanguageServerSettings>> = new Map();

/**
 * Connection onDidChangeConfiguration
 */
connection.onDidChangeConfiguration((change: DidChangeConfigurationParams) => {
    // update settings
    if (hasConfigurationCapability) {
        documentSettings.clear();
    } else {
        globalSettings = <LinuxcncLanguageServerSettings>(
            (change.settings[LANGUAGE_SERVER_ID] || defaultSettings)
        )
    }
    // re-validate
    documents.all().forEach(validateDocument);
});

/**
 * 
 * @param resource 
 */
function getDocumentSettings(resource: string): Thenable<LinuxcncLanguageServerSettings> {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: LANGUAGE_SERVER_ID
        });
        documentSettings.set(resource, result);
    }
    return result;
}

/**
 * Document was closed, so remove saved settings.
 * @param textDocument 
 */
documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});

/**
 * Content changed, so revalidate.
 */
documents.onDidChangeContent(change => {
    validateDocument(change.document);
});

/**
 * Validate a TextDocument against a grammar utilizing antlr4.
 * @param document 
 */
async function validateDocument(document: TextDocument): Promise<void> {
    let settings = await getDocumentSettings(document.uri);

    let problems = 0;

    let input = CharStreams.fromString(document.getText());
    let lexer = new HALLexer(input);
    let errorCollector = new DiagnosticErrorCollector(document);
    let parser = new HALParser(new CommonTokenStream(lexer));
    parser.removeErrorListeners();
    parser.addErrorListener(errorCollector);
    parser.hal();


    // reply findings
    connection.sendDiagnostics({
        uri: document.uri,
        diagnostics: errorCollector.findings
    });

    /*
    let m: RegExpExecArray | null
    while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
        problems++;
        let finding: Diagnostic = {
            severity: DiagnosticSeverity.Information,
            range: {
                start: document.positionAt(m.index),
                end: document.positionAt(m.index + m[0].length)
            },
            message: "Loadrt loads a realtime component.",
            source: "ex" //huh?
        };
        if (hasDiagnosticRelatedInfoCapability) {
            finding.relatedInformation = [{
                location: {
                    uri: document.uri,
                    range: Object.assign({}, finding.range)
                },
                message: "Brought to you by Cpt. Obvious!"
            }, {
                location: {
                    uri: document.uri,
                    range: Object.assign({}, finding.range)
                },
                message: "Really interresting stuff ;-)"
            }]
        }
        findings.push(finding);
    }
    */
}

/**
 * 
 */
connection.onDidChangeWatchedFiles((event) => {
    connection.console.log("Received file change event with " + event.changes?.length + " changes.");
});

/**
 * 
 */
connection.onCompletion((params: TextDocumentPositionParams): CompletionItem[] => {
    let doc = documents.get(params.textDocument.uri)!;
    let pos = params.position;

    let input = CharStreams.fromString(doc.getText());
    let lexer = new HALLexer(input);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new HALParser(tokenStream);
    let tree = parser.hal();

    let index = computeTokenIndex(tree, { line: pos.line, column : pos.character + 1 })!;
    let ccc = new CodeCompletionCore(parser);
    let candidates = ccc.collectCandidates(index);

    let completions : string[] = [];
    candidates.tokens.forEach((_, k) => {
        completions.push(parser.vocabulary.getSymbolicName(k)!.toLowerCase());
    });

    if(completions.length !== 0) {
        return completions.map(e => {
            return {
            label : e,
            kind: CompletionItemKind.Function,
            data: e
            };
        });
    }

    return HalcmdManpage.map(e => {
        return {
            label: e.label,
            kind: e.kind,
            data: e.label,
        }
    });
});

export type CaretPosition = {
    line: number,
    column: number
}

export function computeTokenIndex(parseTree : ParseTree, caretPosition : CaretPosition) : number | undefined {
    if(parseTree instanceof TerminalNode) {
        return computeTokenIndexOfTerminalNode(parseTree, caretPosition);
    } else {
        return computeTokenIndexOfChildNode(parseTree, caretPosition);
    }
}

function computeTokenIndexOfTerminalNode(tree : TerminalNode, caretPosition : CaretPosition) : number | undefined {
    let start = tree.symbol.charPositionInLine;
    let stop = start + tree.text.length;

    // check if symbol is in the same line and caret within the symbol (text)
    if(tree.symbol.line == caretPosition.line && start <= caretPosition.column && caretPosition.column <= stop) {
        return tree.symbol.tokenIndex;
    }
    return undefined;
}

function computeTokenIndexOfChildNode(tree : ParseTree, caretPosition : CaretPosition) : number | undefined {
    for(let i = 0, max = tree.childCount; i<max; i++) {
        let index = computeTokenIndex(tree.getChild(i), caretPosition);
        if(undefined !== index) {
            return index;
        }
    }
    return undefined;
}

/**
 * The request is sent from the client to the server to resolve additional information for a given completion item.
 */
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    let found = HalcmdManpage.find(e => e.label === item.data);
    if (found) {
        item.detail = found.detail;
        item.documentation = found.documentation;
        if (found.deprecated) {
            item.tags = [CompletionItemTag.Deprecated];
        }
    }
    return item;
});

// kick everything up
documents.listen(connection);
connection.listen();