import {
    CharStreams,
    CommonTokenStream,
    Parser,
    ParserErrorListener,
    RecognitionException,
    Recognizer,
    Token
} from "antlr4ts";
import { ATNConfigSet } from "antlr4ts/atn/ATNConfigSet";
import { SimulatorState } from "antlr4ts/atn/SimulatorState";
import { DFA } from "antlr4ts/dfa/DFA";
import { BitSet } from "antlr4ts/misc/BitSet";
import { LANGUAGE_SERVER_ID } from "../../common/out/constants";
import { TextDocument } from "vscode-languageserver-textdocument";
import {
    CompletionItem,
    CompletionItemTag,
    createConnection,
    Diagnostic,
    DiagnosticSeverity,
    DidChangeConfigurationNotification,
    DidChangeConfigurationParams,
    InitializeParams,
    InitializeResult,
    ProposedFeatures,
    TextDocumentPositionParams,
    TextDocuments,
    TextDocumentSyncKind
} from "vscode-languageserver/node";
import { HALLexer } from "./grammar/HALLexer";
import { HALParser } from "./grammar/HALParser";
import { HalcmdManpage } from "./halcmd-manpage";


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
 * 
 * @param textDocument 
 */
documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});

/**
 * 
 */
documents.onDidChangeContent(change => {
    validateDocument(change.document);
});

class DiagnosticErrorCollector implements ParserErrorListener {

    findings: Diagnostic[];
    private _doc: TextDocument;

    constructor(document: TextDocument) {
        this._doc = document;
        this.findings = [];
    }

    syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, column: number, msg: string, e: RecognitionException | undefined) {
        let finding: Diagnostic = {
            severity: DiagnosticSeverity.Error,
            range: {
                start: this._doc.positionAt(offendingSymbol ? offendingSymbol.startIndex : 0),
                end: this._doc.positionAt(offendingSymbol ? offendingSymbol.stopIndex + 1 : 0)
            },
            message: msg,
            source: "linuxcnc-hal" //huh?
        }
        this.findings.push(finding);
    }

    reportAmbiguity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet) {
        console.log("reportAmbiguity");
    }

    reportAttemptingFullContext(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, conflictState: SimulatorState) {
        console.log("reportAttemptingFullContext");
    }

    reportContextSensitivity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, acceptState: SimulatorState) {
        console.log("reportContextSensitivity");
    }

}

/**
 * 
 * @param document 
 */
async function validateDocument(document: TextDocument): Promise<void> {
    let settings = await getDocumentSettings(document.uri);


    let problems = 0;

    // TODO: Do real validation

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
    return HalcmdManpage.map(e => {
        return {
            label: e.label,
            kind: e.kind,
            data: e.label,
        }
    });
});

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