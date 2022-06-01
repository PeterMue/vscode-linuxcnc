grammar HAL;

/* Parser Rules */
hal : statement* EOF;

statement
    : addf
    | loadrtStatement
    | setp
    ;

/* addf functname threadname
 * (add function)
 * Adds function functname to realtime thread threadname.
 * functname will run after any functions that were previously added to the thread. Fails if either functname or threadname does not exist, or if they are incompatible.
 */
addf :
    ADDF functionName threadName;

functionName : dotNotation;

threadName : BASE_THREAD | SERVO_THREAD | IDENTIFIER;


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

pinOrParameterName : dotNotation;

value
    : (IDENTIFIER | iniReference | LITERAL);

/*
 * addf
 */

/*
 * common stuff
 */
iniReference
    : LBRACK section=IDENTIFIER RBRACK variable=IDENTIFIER;

dotNotation : IDENTIFIER (DOT (INDEX | IDENTIFIER))*;

/* Lexer Rules */

// Keywords
ADDF    : 'addf';
DELF    : 'delf';
DELSIG  : 'delsig';
ECHO    : 'echo';
EXIT    : 'exit';
GETP    : 'getp';
GETS    : 'gets';
LINKPS  : 'linkps';
LINKSP  : 'linksp';
LIST    : 'list';
LOADRT  : 'loadrt';
LOADUSR : 'loadusr';
LOCK    : 'lock';
NET     : 'net';
NEWSIG  : 'newsig';
PTYPE   : 'ptype';
QUIT    : 'quit';
SAVE    : 'save';
SETP    : 'setp';
SETS    : 'sets';
SHOW    : 'show';
SOURCE  : 'source';
START   : 'start';
STATUS  : 'status';
STOP    : 'stop';
STYPE   : 'stype';
UNECHO  : 'unecho';
UNLINKP : 'unlinkp';
UNLOAD  : 'unload';
UNLOCK  : 'unlock';
WAITUSR : 'waitusr';

// Threads (see: hal_create_thread in https://github.com/LinuxCNC/linuxcnc/blob/master/src/emc/motion/motion.c#L938)
SERVO_THREAD : 'servo-thread';
BASE_THREAD : 'base-thread';



fragment TRUE   : ('TRUE'|'True'|'true');
fragment FALSE  : ('FALSE'|'False'|'false');



fragment Nondigit   : [a-zA-Z_];
fragment Digit      : [0-9];
fragment Digits     : Digit+;
fragment Dash       : '-';
fragment LoDash     : '_';
fragment Dot        : '.';

LBRACK  : '[';
RBRACK  : ']';
COMMA   : ',';
DOT     : '.';

INDEX   : Digits;

IDENTIFIER
    : Nondigit ( Nondigit | Digit | Dash | LoDash )* ;

// Literals
LITERAL
    : BIT_LITERAL
 //   | FLOAT_LITERAL
    | S32_LITERAL
    | U32_LITERAL
    | DECIMAL
    | STRING_LITERAL;
    gr
BIT_LITERAL     : TRUE | '1' | FALSE | '0';
//FLOAT_LITERAL   : (Digits '.' Digits? | '.' Digits);
S32_LITERAL     : DECIMAL;
U32_LITERAL     : DECIMAL;
DECIMAL         : ('0' | [1-9] Digits*);
STRING_LITERAL  : '"' (~["\\\r\n])* '"';

LINE_COMMENT    : '#' ~[\r\n]*      -> channel(HIDDEN);
WHITESPACE      : [ \t\r\n\u000C]+  -> channel(HIDDEN);