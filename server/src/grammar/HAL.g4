grammar HAL;

/* Parser Rules */
hal : statement* EOF;

statement
    : loadrtStatement
    | setp
    ;

/*
 * <http://linuxcnc.org/docs/html/hal/basic-hal.html#_loadrt>
 * loadrt <component> <options>
 * loadrt mux4 count=1
 */
loadrtStatement
    : loadrt componentIdentifier loadrtOptions?;

loadrt : LOADRT;

componentIdentifier
    : componentName | iniReference;

componentName : IDENTIFIER;

loadrtOptions
    : (option=IDENTIFIER | (key=IDENTIFIER '=' componentOptionValue (COMMA componentOptionValue)* ))+;


componentOptionValue
    : (IDENTIFIER | iniReference | LITERAL);

/*
 * <http://www.linuxcnc.org/docs/2.5/html/hal/basic_hal.html#_setp_a_id_sub_setp_a>
 * setp <pin/parameter-name> <value>
 * setp parport.0.pin-08-out TRUE
 */
setp
    : SETP pinOrParameterName value;

pinOrParameterName
    : IDENTIFIER;

value
    : (IDENTIFIER | iniReference | LITERAL);

/*
 * common stuff
 */
iniReference
    : LBRACK section=IDENTIFIER RBRACK variable=IDENTIFIER;

/* Lexer Rules */

// Keywords
LOADRT  : 'loadrt';
SETP    : 'setp';

// Literals
LITERAL
    : BIT_LITERAL
    | FLOAT_LITERAL
    | S32_LITERAL
    | U32_LITERAL
    | DECIMAL
    | STRING_LITERAL;

fragment TRUE   : ('TRUE'|'True'|'true');
fragment FALSE  : ('FALSE'|'False'|'false');

BIT_LITERAL     : TRUE | '1' | FALSE | '0';
FLOAT_LITERAL   : (Digits '.' Digits? | '.' Digits);
S32_LITERAL     : DECIMAL;
U32_LITERAL     : DECIMAL;
DECIMAL         : ('0' | [1-9] Digits*);
STRING_LITERAL  : '"' (~["\\\r\n])* '"';

fragment Nondigit   : [a-zA-Z_];
fragment Digit      : [0-9];
fragment Digits     : Digit+;
fragment Dash       : '-';
fragment Dot        : '.';

LBRACK  : '[';
RBRACK  : ']';
COMMA   : ',';

IDENTIFIER
    : Nondigit ( Nondigit | Digit | Dash | Dot )* ;

LINE_COMMENT    : '#' ~[\r\n]*      -> channel(HIDDEN);
WHITESPACE      : [ \t\r\n\u000C]+  -> channel(HIDDEN);