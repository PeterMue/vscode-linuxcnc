import { LANGUAGE_SERVER_ID, LANGUAGE_SERVER_NAME } from "../../common/out/constants";
import * as path from "path";
import { ExtensionContext, workspace } from "vscode";
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from "vscode-languageclient/node";

let client: LanguageClient;

/**
 * Called by vscode on activation
 * @param context ExtensionContext
 * @see package.json#activationEvents
 */
export function activate(context: ExtensionContext) {
    let serverModule = context.asAbsolutePath(path.join("server", "out", "server.js"));

    let serverOptions: ServerOptions = {
        // Normal run
        run: {
            module: serverModule,
            transport: TransportKind.ipc
        },
        // Debugging
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: {
                execArgv: ["--nolazy", "--inspect=6009"]
            }
        }
    }

    let clientOptions: LanguageClientOptions = {
        documentSelector: [{
            scheme: "file",
            language: "linuxcnc-hal"
        }],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher("**/.clientrc")
        }
    };

    client = new LanguageClient(
        LANGUAGE_SERVER_ID,
        LANGUAGE_SERVER_NAME,
        serverOptions,
        clientOptions
    );

    client.start();
}

/**
 * Shutdown client and server
 */
export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}