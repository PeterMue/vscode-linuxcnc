// Generated from server/src/grammar/HAL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { HalContext } from "./HALParser";
import { StatementContext } from "./HALParser";
import { LoadrtStatementContext } from "./HALParser";
import { LoadrtContext } from "./HALParser";
import { ComponentIdentifierContext } from "./HALParser";
import { ComponentNameContext } from "./HALParser";
import { LoadrtOptionsContext } from "./HALParser";
import { ComponentOptionValueContext } from "./HALParser";
import { SetpContext } from "./HALParser";
import { PinOrParameterNameContext } from "./HALParser";
import { ValueContext } from "./HALParser";
import { IniReferenceContext } from "./HALParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HALParser`.
 */
export interface HALListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HALParser.hal`.
	 * @param ctx the parse tree
	 */
	enterHal?: (ctx: HalContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.hal`.
	 * @param ctx the parse tree
	 */
	exitHal?: (ctx: HalContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.loadrtStatement`.
	 * @param ctx the parse tree
	 */
	enterLoadrtStatement?: (ctx: LoadrtStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.loadrtStatement`.
	 * @param ctx the parse tree
	 */
	exitLoadrtStatement?: (ctx: LoadrtStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.loadrt`.
	 * @param ctx the parse tree
	 */
	enterLoadrt?: (ctx: LoadrtContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.loadrt`.
	 * @param ctx the parse tree
	 */
	exitLoadrt?: (ctx: LoadrtContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.componentIdentifier`.
	 * @param ctx the parse tree
	 */
	enterComponentIdentifier?: (ctx: ComponentIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.componentIdentifier`.
	 * @param ctx the parse tree
	 */
	exitComponentIdentifier?: (ctx: ComponentIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.componentName`.
	 * @param ctx the parse tree
	 */
	enterComponentName?: (ctx: ComponentNameContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.componentName`.
	 * @param ctx the parse tree
	 */
	exitComponentName?: (ctx: ComponentNameContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.loadrtOptions`.
	 * @param ctx the parse tree
	 */
	enterLoadrtOptions?: (ctx: LoadrtOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.loadrtOptions`.
	 * @param ctx the parse tree
	 */
	exitLoadrtOptions?: (ctx: LoadrtOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.componentOptionValue`.
	 * @param ctx the parse tree
	 */
	enterComponentOptionValue?: (ctx: ComponentOptionValueContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.componentOptionValue`.
	 * @param ctx the parse tree
	 */
	exitComponentOptionValue?: (ctx: ComponentOptionValueContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.setp`.
	 * @param ctx the parse tree
	 */
	enterSetp?: (ctx: SetpContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.setp`.
	 * @param ctx the parse tree
	 */
	exitSetp?: (ctx: SetpContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.pinOrParameterName`.
	 * @param ctx the parse tree
	 */
	enterPinOrParameterName?: (ctx: PinOrParameterNameContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.pinOrParameterName`.
	 * @param ctx the parse tree
	 */
	exitPinOrParameterName?: (ctx: PinOrParameterNameContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `HALParser.iniReference`.
	 * @param ctx the parse tree
	 */
	enterIniReference?: (ctx: IniReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `HALParser.iniReference`.
	 * @param ctx the parse tree
	 */
	exitIniReference?: (ctx: IniReferenceContext) => void;
}

