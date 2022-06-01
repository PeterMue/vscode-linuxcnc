import { ParserErrorListener, Recognizer, Token, RecognitionException, Parser } from "antlr4ts";
import { ATNConfigSet } from "antlr4ts/atn/ATNConfigSet";
import { SimulatorState } from "antlr4ts/atn/SimulatorState";
import { DFA } from "antlr4ts/dfa/DFA";
import { BitSet } from "antlr4ts/misc/BitSet";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument";

export default class DiagnosticErrorCollector implements ParserErrorListener {

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