// Generated from server/src/grammar/HAL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class HALLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "LOADRT", "SETP", "LITERAL", "TRUE", "FALSE", "BIT_LITERAL", "FLOAT_LITERAL", 
		"S32_LITERAL", "U32_LITERAL", "DECIMAL", "STRING_LITERAL", "Nondigit", 
		"Digit", "Digits", "Dash", "Dot", "LBRACK", "RBRACK", "COMMA", "IDENTIFIER", 
		"LINE_COMMENT", "WHITESPACE",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HALLexer._LITERAL_NAMES, HALLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HALLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(HALLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "HAL.g4"; }

	// @Override
	public get ruleNames(): string[] { return HALLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return HALLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return HALLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return HALLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12\xB9\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05F\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06T\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07e\n\x07\x03\b\x03\b\x03\b\x03\b\x05\bk\n\b\x03\t\x03\t\x03\t\x05\t" +
		"p\n\t\x03\t\x03\t\x05\tt\n\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x07\f}\n\f\f\f\x0E\f\x80\v\f\x05\f\x82\n\f\x03\r\x03\r\x07\r\x86\n\r" +
		"\f\r\x0E\r\x89\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x06\x10\x92\n\x10\r\x10\x0E\x10\x93\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x07\x16\xA5\n\x16\f\x16\x0E\x16\xA8\v\x16\x03\x17\x03\x17" +
		"\x07\x17\xAC\n\x17\f\x17\x0E\x17\xAF\v\x17\x03\x17\x03\x17\x03\x18\x06" +
		"\x18\xB4\n\x18\r\x18\x0E\x18\xB5\x03\x18\x03\x18\x02\x02\x02\x19\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x02\r\x02\x02\x0F\x02\x07" +
		"\x11\x02\b\x13\x02\t\x15\x02\n\x17\x02\v\x19\x02\f\x1B\x02\x02\x1D\x02" +
		"\x02\x1F\x02\x02!\x02\x02#\x02\x02%\x02\r\'\x02\x0E)\x02\x0F+\x02\x10" +
		"-\x02\x11/\x02\x12\x03\x02\b\x03\x023;\x06\x02\f\f\x0F\x0F$$^^\x05\x02" +
		"C\\aac|\x03\x022;\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0E\x0F\"\"\x02\xC9" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x031\x03\x02\x02\x02\x053\x03\x02\x02\x02\x07:\x03\x02\x02\x02" +
		"\tE\x03\x02\x02\x02\vS\x03\x02\x02\x02\rd\x03\x02\x02\x02\x0Fj\x03\x02" +
		"\x02\x02\x11s\x03\x02\x02\x02\x13u\x03\x02\x02\x02\x15w\x03\x02\x02\x02" +
		"\x17\x81\x03\x02\x02\x02\x19\x83\x03\x02\x02\x02\x1B\x8C\x03\x02\x02\x02" +
		"\x1D\x8E\x03\x02\x02\x02\x1F\x91\x03\x02\x02\x02!\x95\x03\x02\x02\x02" +
		"#\x97\x03\x02\x02\x02%\x99\x03\x02\x02\x02\'\x9B\x03\x02\x02\x02)\x9D" +
		"\x03\x02\x02\x02+\x9F\x03\x02\x02\x02-\xA9\x03\x02\x02\x02/\xB3\x03\x02" +
		"\x02\x0212\x07?\x02\x022\x04\x03\x02\x02\x0234\x07n\x02\x0245\x07q\x02" +
		"\x0256\x07c\x02\x0267\x07f\x02\x0278\x07t\x02\x0289\x07v\x02\x029\x06" +
		"\x03\x02\x02\x02:;\x07u\x02\x02;<\x07g\x02\x02<=\x07v\x02\x02=>\x07r\x02" +
		"\x02>\b\x03\x02\x02\x02?F\x05\x0F\b\x02@F\x05\x11\t\x02AF\x05\x13\n\x02" +
		"BF\x05\x15\v\x02CF\x05\x17\f\x02DF\x05\x19\r\x02E?\x03\x02\x02\x02E@\x03" +
		"\x02\x02\x02EA\x03\x02\x02\x02EB\x03\x02\x02\x02EC\x03\x02\x02\x02ED\x03" +
		"\x02\x02\x02F\n\x03\x02\x02\x02GH\x07V\x02\x02HI\x07T\x02\x02IJ\x07W\x02" +
		"\x02JT\x07G\x02\x02KL\x07V\x02\x02LM\x07t\x02\x02MN\x07w\x02\x02NT\x07" +
		"g\x02\x02OP\x07v\x02\x02PQ\x07t\x02\x02QR\x07w\x02\x02RT\x07g\x02\x02" +
		"SG\x03\x02\x02\x02SK\x03\x02\x02\x02SO\x03\x02\x02\x02T\f\x03\x02\x02" +
		"\x02UV\x07H\x02\x02VW\x07C\x02\x02WX\x07N\x02\x02XY\x07U\x02\x02Ye\x07" +
		"G\x02\x02Z[\x07H\x02\x02[\\\x07c\x02\x02\\]\x07n\x02\x02]^\x07u\x02\x02" +
		"^e\x07g\x02\x02_`\x07h\x02\x02`a\x07c\x02\x02ab\x07n\x02\x02bc\x07u\x02" +
		"\x02ce\x07g\x02\x02dU\x03\x02\x02\x02dZ\x03\x02\x02\x02d_\x03\x02\x02" +
		"\x02e\x0E\x03\x02\x02\x02fk\x05\v\x06\x02gk\x073\x02\x02hk\x05\r\x07\x02" +
		"ik\x072\x02\x02jf\x03\x02\x02\x02jg\x03\x02\x02\x02jh\x03\x02\x02\x02" +
		"ji\x03\x02\x02\x02k\x10\x03\x02\x02\x02lm\x05\x1F\x10\x02mo\x070\x02\x02" +
		"np\x05\x1F\x10\x02on\x03\x02\x02\x02op\x03\x02\x02\x02pt\x03\x02\x02\x02" +
		"qr\x070\x02\x02rt\x05\x1F\x10\x02sl\x03\x02\x02\x02sq\x03\x02\x02\x02" +
		"t\x12\x03\x02\x02\x02uv\x05\x17\f\x02v\x14\x03\x02\x02\x02wx\x05\x17\f" +
		"\x02x\x16\x03\x02\x02\x02y\x82\x072\x02\x02z~\t\x02\x02\x02{}\x05\x1F" +
		"\x10\x02|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F" +
		"\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81y\x03" +
		"\x02\x02\x02\x81z\x03\x02\x02\x02\x82\x18\x03\x02\x02\x02\x83\x87\x07" +
		"$\x02\x02\x84\x86\n\x03\x02\x02\x85\x84\x03\x02\x02\x02\x86\x89\x03\x02" +
		"\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x03\x02" +
		"\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8B\x07$\x02\x02\x8B\x1A\x03\x02" +
		"\x02\x02\x8C\x8D\t\x04\x02\x02\x8D\x1C\x03\x02\x02\x02\x8E\x8F\t\x05\x02" +
		"\x02\x8F\x1E\x03\x02\x02\x02\x90\x92\x05\x1D\x0F\x02\x91\x90\x03\x02\x02" +
		"\x02\x92\x93\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02" +
		"\x02\x94 \x03\x02\x02\x02\x95\x96\x07/\x02\x02\x96\"\x03\x02\x02\x02\x97" +
		"\x98\x070\x02\x02\x98$\x03\x02\x02\x02\x99\x9A\x07]\x02\x02\x9A&\x03\x02" +
		"\x02\x02\x9B\x9C\x07_\x02\x02\x9C(\x03\x02\x02\x02\x9D\x9E\x07.\x02\x02" +
		"\x9E*\x03\x02\x02\x02\x9F\xA6\x05\x1B\x0E\x02\xA0\xA5\x05\x1B\x0E\x02" +
		"\xA1\xA5\x05\x1D\x0F\x02\xA2\xA5\x05!\x11\x02\xA3\xA5\x05#\x12\x02\xA4" +
		"\xA0\x03\x02\x02\x02\xA4\xA1\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4" +
		"\xA3\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6" +
		"\xA7\x03\x02\x02\x02\xA7,\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9" +
		"\xAD\x07%\x02\x02\xAA\xAC\n\x06\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAF" +
		"\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0" +
		"\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB1\b\x17\x02\x02\xB1.\x03" +
		"\x02\x02\x02\xB2\xB4\t\x07\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB5\x03" +
		"\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03" +
		"\x02\x02\x02\xB7\xB8\b\x18\x02\x02\xB80\x03\x02\x02\x02\x11\x02ESdjos" +
		"~\x81\x87\x93\xA4\xA6\xAD\xB5\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HALLexer.__ATN) {
			HALLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HALLexer._serializedATN));
		}

		return HALLexer.__ATN;
	}

}
