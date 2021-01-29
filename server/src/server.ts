import {
    createConnection,
    TextDocuments,
    Diagnostic,
    DiagnosticSeverity,
    ProposedFeatures,
    InitializeParams,
    DidChangeConfigurationNotification,
    CompletionItem,
    CompletionItemKind,
    TextDocumentPositionParams,
    TextDocumentSyncKind,
    InitializeResult,
    NotificationHandler,
    InitializedParams,
    DidChangeConfigurationParams,
    MarkupContent,
    MarkupKind,
    CompletionItemTag
} from "vscode-languageserver/node";

import { TextDocument } from "vscode-languageserver-textdocument";
import { TreeItemCollapsibleState } from "vscode";
import { HalcmdManpage } from "./halcmd-manpage";

const LANGUAGE_SERVER_ID = "linuxcncLanguageServer";

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

/**
 * 
 * @param document 
 */
async function validateDocument(document: TextDocument): Promise<void> {
    let settings = await getDocumentSettings(document.uri);

    let text = document.getText();
    let pattern = /\bloadrt\b/g;

    let problems = 0;
    let findings: Diagnostic[] = [];

    // TODO: Do real validation
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

    // reply findings
    connection.sendDiagnostics({
        uri: document.uri,
        diagnostics: findings
    });
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
            label : e.label,
            kind : e.kind,
            data: e.label,
        }
    });
});

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    let found = HalcmdManpage.find(e => e.label === item.data);
    if(found) {
        item.detail = found.detail;
        item.documentation = found.documentation;
        if(found.deprecated) {
            item.tags = [CompletionItemTag.Deprecated]; 
        }
    }
    return item;
});

// kick everything up
documents.listen(connection);
connection.listen();