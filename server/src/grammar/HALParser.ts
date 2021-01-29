// Generated from server/src/grammar/HAL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { HALListener } from "./HALListener";

export class HALParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly LOADRT = 2;
	public static readonly SETP = 3;
	public static readonly LITERAL = 4;
	public static readonly BIT_LITERAL = 5;
	public static readonly FLOAT_LITERAL = 6;
	public static readonly S32_LITERAL = 7;
	public static readonly U32_LITERAL = 8;
	public static readonly DECIMAL = 9;
	public static readonly STRING_LITERAL = 10;
	public static readonly LBRACK = 11;
	public static readonly RBRACK = 12;
	public static readonly COMMA = 13;
	public static readonly IDENTIFIER = 14;
	public static readonly LINE_COMMENT = 15;
	public static readonly WHITESPACE = 16;
	public static readonly RULE_hal = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_loadrtStatement = 2;
	public static readonly RULE_loadrt = 3;
	public static readonly RULE_componentIdentifier = 4;
	public static readonly RULE_componentName = 5;
	public static readonly RULE_loadrtOptions = 6;
	public static readonly RULE_componentOptionValue = 7;
	public static readonly RULE_setp = 8;
	public static readonly RULE_pinOrParameterName = 9;
	public static readonly RULE_value = 10;
	public static readonly RULE_iniReference = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"hal", "statement", "loadrtStatement", "loadrt", "componentIdentifier", 
		"componentName", "loadrtOptions", "componentOptionValue", "setp", "pinOrParameterName", 
		"value", "iniReference",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'loadrt'", "'setp'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'['", "']'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "LOADRT", "SETP", "LITERAL", "BIT_LITERAL", "FLOAT_LITERAL", 
		"S32_LITERAL", "U32_LITERAL", "DECIMAL", "STRING_LITERAL", "LBRACK", "RBRACK", 
		"COMMA", "IDENTIFIER", "LINE_COMMENT", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HALParser._LITERAL_NAMES, HALParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HALParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "HAL.g4"; }

	// @Override
	public get ruleNames(): string[] { return HALParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HALParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(HALParser._ATN, this);
	}
	// @RuleVersion(0)
	public hal(): HalContext {
		let _localctx: HalContext = new HalContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HALParser.RULE_hal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HALParser.LOADRT || _la === HALParser.SETP) {
				{
				{
				this.state = 24;
				this.statement();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 30;
			this.match(HALParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HALParser.RULE_statement);
		try {
			this.state = 34;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HALParser.LOADRT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				this.loadrtStatement();
				}
				break;
			case HALParser.SETP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				this.setp();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadrtStatement(): LoadrtStatementContext {
		let _localctx: LoadrtStatementContext = new LoadrtStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, HALParser.RULE_loadrtStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.loadrt();
			this.state = 37;
			this.componentIdentifier();
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HALParser.IDENTIFIER) {
				{
				this.state = 38;
				this.loadrtOptions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadrt(): LoadrtContext {
		let _localctx: LoadrtContext = new LoadrtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HALParser.RULE_loadrt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(HALParser.LOADRT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentIdentifier(): ComponentIdentifierContext {
		let _localctx: ComponentIdentifierContext = new ComponentIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HALParser.RULE_componentIdentifier);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HALParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.componentName();
				}
				break;
			case HALParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.iniReference();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentName(): ComponentNameContext {
		let _localctx: ComponentNameContext = new ComponentNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HALParser.RULE_componentName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(HALParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadrtOptions(): LoadrtOptionsContext {
		let _localctx: LoadrtOptionsContext = new LoadrtOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HALParser.RULE_loadrtOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 60;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 49;
					_localctx._option = this.match(HALParser.IDENTIFIER);
					}
					break;

				case 2:
					{
					{
					this.state = 50;
					_localctx._key = this.match(HALParser.IDENTIFIER);
					this.state = 51;
					this.match(HALParser.T__0);
					this.state = 52;
					this.componentOptionValue();
					this.state = 57;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === HALParser.COMMA) {
						{
						{
						this.state = 53;
						this.match(HALParser.COMMA);
						this.state = 54;
						this.componentOptionValue();
						}
						}
						this.state = 59;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === HALParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentOptionValue(): ComponentOptionValueContext {
		let _localctx: ComponentOptionValueContext = new ComponentOptionValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HALParser.RULE_componentOptionValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HALParser.IDENTIFIER:
				{
				this.state = 64;
				this.match(HALParser.IDENTIFIER);
				}
				break;
			case HALParser.LBRACK:
				{
				this.state = 65;
				this.iniReference();
				}
				break;
			case HALParser.LITERAL:
				{
				this.state = 66;
				this.match(HALParser.LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setp(): SetpContext {
		let _localctx: SetpContext = new SetpContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HALParser.RULE_setp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(HALParser.SETP);
			this.state = 70;
			this.pinOrParameterName();
			this.state = 71;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pinOrParameterName(): PinOrParameterNameContext {
		let _localctx: PinOrParameterNameContext = new PinOrParameterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HALParser.RULE_pinOrParameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(HALParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HALParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HALParser.IDENTIFIER:
				{
				this.state = 75;
				this.match(HALParser.IDENTIFIER);
				}
				break;
			case HALParser.LBRACK:
				{
				this.state = 76;
				this.iniReference();
				}
				break;
			case HALParser.LITERAL:
				{
				this.state = 77;
				this.match(HALParser.LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iniReference(): IniReferenceContext {
		let _localctx: IniReferenceContext = new IniReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HALParser.RULE_iniReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(HALParser.LBRACK);
			this.state = 81;
			_localctx._section = this.match(HALParser.IDENTIFIER);
			this.state = 82;
			this.match(HALParser.RBRACK);
			this.state = 83;
			_localctx._variable = this.match(HALParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12X\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x07\x02\x1C\n\x02\f\x02\x0E\x02\x1F\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x05\x03%\n\x03\x03\x04\x03\x04\x03\x04\x05\x04*\n\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x05\x060\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x07\b:\n\b\f\b\x0E\b=\v\b\x06\b?\n\b\r\b\x0E\b@\x03" +
		"\t\x03\t\x03\t\x05\tF\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x05\fQ\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x02\x02\x02\x0E" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x02\x02\x02V\x02\x1D\x03\x02\x02\x02\x04$\x03\x02" +
		"\x02\x02\x06&\x03\x02\x02\x02\b+\x03\x02\x02\x02\n/\x03\x02\x02\x02\f" +
		"1\x03\x02\x02\x02\x0E>\x03\x02\x02\x02\x10E\x03\x02\x02\x02\x12G\x03\x02" +
		"\x02\x02\x14K\x03\x02\x02\x02\x16P\x03\x02\x02\x02\x18R\x03\x02\x02\x02" +
		"\x1A\x1C\x05\x04\x03\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02" +
		"\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02" +
		"\x1F\x1D\x03\x02\x02\x02 !\x07\x02\x02\x03!\x03\x03\x02\x02\x02\"%\x05" +
		"\x06\x04\x02#%\x05\x12\n\x02$\"\x03\x02\x02\x02$#\x03\x02\x02\x02%\x05" +
		"\x03\x02\x02\x02&\'\x05\b\x05\x02\')\x05\n\x06\x02(*\x05\x0E\b\x02)(\x03" +
		"\x02\x02\x02)*\x03\x02\x02\x02*\x07\x03\x02\x02\x02+,\x07\x04\x02\x02" +
		",\t\x03\x02\x02\x02-0\x05\f\x07\x02.0\x05\x18\r\x02/-\x03\x02\x02\x02" +
		"/.\x03\x02\x02\x020\v\x03\x02\x02\x0212\x07\x10\x02\x022\r\x03\x02\x02" +
		"\x023?\x07\x10\x02\x0245\x07\x10\x02\x0256\x07\x03\x02\x026;\x05\x10\t" +
		"\x0278\x07\x0F\x02\x028:\x05\x10\t\x0297\x03\x02\x02\x02:=\x03\x02\x02" +
		"\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02>3\x03\x02\x02\x02>4\x03\x02\x02\x02?@\x03\x02\x02\x02@>\x03\x02\x02" +
		"\x02@A\x03\x02\x02\x02A\x0F\x03\x02\x02\x02BF\x07\x10\x02\x02CF\x05\x18" +
		"\r\x02DF\x07\x06\x02\x02EB\x03\x02\x02\x02EC\x03\x02\x02\x02ED\x03\x02" +
		"\x02\x02F\x11\x03\x02\x02\x02GH\x07\x05\x02\x02HI\x05\x14\v\x02IJ\x05" +
		"\x16\f\x02J\x13\x03\x02\x02\x02KL\x07\x10\x02\x02L\x15\x03\x02\x02\x02" +
		"MQ\x07\x10\x02\x02NQ\x05\x18\r\x02OQ\x07\x06\x02\x02PM\x03\x02\x02\x02" +
		"PN\x03\x02\x02\x02PO\x03\x02\x02\x02Q\x17\x03\x02\x02\x02RS\x07\r\x02" +
		"\x02ST\x07\x10\x02\x02TU\x07\x0E\x02\x02UV\x07\x10\x02\x02V\x19\x03\x02" +
		"\x02\x02\v\x1D$)/;>@EP";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HALParser.__ATN) {
			HALParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HALParser._serializedATN));
		}

		return HALParser.__ATN;
	}

}

export class HalContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(HALParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_hal; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterHal) {
			listener.enterHal(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitHal) {
			listener.exitHal(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public loadrtStatement(): LoadrtStatementContext | undefined {
		return this.tryGetRuleContext(0, LoadrtStatementContext);
	}
	public setp(): SetpContext | undefined {
		return this.tryGetRuleContext(0, SetpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_statement; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class LoadrtStatementContext extends ParserRuleContext {
	public loadrt(): LoadrtContext {
		return this.getRuleContext(0, LoadrtContext);
	}
	public componentIdentifier(): ComponentIdentifierContext {
		return this.getRuleContext(0, ComponentIdentifierContext);
	}
	public loadrtOptions(): LoadrtOptionsContext | undefined {
		return this.tryGetRuleContext(0, LoadrtOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_loadrtStatement; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterLoadrtStatement) {
			listener.enterLoadrtStatement(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitLoadrtStatement) {
			listener.exitLoadrtStatement(this);
		}
	}
}


export class LoadrtContext extends ParserRuleContext {
	public LOADRT(): TerminalNode { return this.getToken(HALParser.LOADRT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_loadrt; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterLoadrt) {
			listener.enterLoadrt(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitLoadrt) {
			listener.exitLoadrt(this);
		}
	}
}


export class ComponentIdentifierContext extends ParserRuleContext {
	public componentName(): ComponentNameContext | undefined {
		return this.tryGetRuleContext(0, ComponentNameContext);
	}
	public iniReference(): IniReferenceContext | undefined {
		return this.tryGetRuleContext(0, IniReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_componentIdentifier; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterComponentIdentifier) {
			listener.enterComponentIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitComponentIdentifier) {
			listener.exitComponentIdentifier(this);
		}
	}
}


export class ComponentNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HALParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_componentName; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterComponentName) {
			listener.enterComponentName(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitComponentName) {
			listener.exitComponentName(this);
		}
	}
}


export class LoadrtOptionsContext extends ParserRuleContext {
	public _option!: Token;
	public _key!: Token;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HALParser.IDENTIFIER);
		} else {
			return this.getToken(HALParser.IDENTIFIER, i);
		}
	}
	public componentOptionValue(): ComponentOptionValueContext[];
	public componentOptionValue(i: number): ComponentOptionValueContext;
	public componentOptionValue(i?: number): ComponentOptionValueContext | ComponentOptionValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentOptionValueContext);
		} else {
			return this.getRuleContext(i, ComponentOptionValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HALParser.COMMA);
		} else {
			return this.getToken(HALParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_loadrtOptions; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterLoadrtOptions) {
			listener.enterLoadrtOptions(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitLoadrtOptions) {
			listener.exitLoadrtOptions(this);
		}
	}
}


export class ComponentOptionValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HALParser.IDENTIFIER, 0); }
	public iniReference(): IniReferenceContext | undefined {
		return this.tryGetRuleContext(0, IniReferenceContext);
	}
	public LITERAL(): TerminalNode | undefined { return this.tryGetToken(HALParser.LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_componentOptionValue; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterComponentOptionValue) {
			listener.enterComponentOptionValue(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitComponentOptionValue) {
			listener.exitComponentOptionValue(this);
		}
	}
}


export class SetpContext extends ParserRuleContext {
	public SETP(): TerminalNode { return this.getToken(HALParser.SETP, 0); }
	public pinOrParameterName(): PinOrParameterNameContext {
		return this.getRuleContext(0, PinOrParameterNameContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_setp; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterSetp) {
			listener.enterSetp(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitSetp) {
			listener.exitSetp(this);
		}
	}
}


export class PinOrParameterNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HALParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_pinOrParameterName; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterPinOrParameterName) {
			listener.enterPinOrParameterName(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitPinOrParameterName) {
			listener.exitPinOrParameterName(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HALParser.IDENTIFIER, 0); }
	public iniReference(): IniReferenceContext | undefined {
		return this.tryGetRuleContext(0, IniReferenceContext);
	}
	public LITERAL(): TerminalNode | undefined { return this.tryGetToken(HALParser.LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_value; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class IniReferenceContext extends ParserRuleContext {
	public _section!: Token;
	public _variable!: Token;
	public LBRACK(): TerminalNode { return this.getToken(HALParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(HALParser.RBRACK, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HALParser.IDENTIFIER);
		} else {
			return this.getToken(HALParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HALParser.RULE_iniReference; }
	// @Override
	public enterRule(listener: HALListener): void {
		if (listener.enterIniReference) {
			listener.enterIniReference(this);
		}
	}
	// @Override
	public exitRule(listener: HALListener): void {
		if (listener.exitIniReference) {
			listener.exitIniReference(this);
		}
	}
}


