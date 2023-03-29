// @ts-nocheck
// Generated from stellaParser.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import stellaParserListener from "./stellaParserListener.js";
import stellaParserVisitor from "./stellaParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class stellaParser extends Parser {
	public static readonly COMMA = 1;
	public static readonly SEMICOLON = 2;
	public static readonly LPAREN = 3;
	public static readonly RPAREN = 4;
	public static readonly LBRACE = 5;
	public static readonly RBRACE = 6;
	public static readonly EQUALS = 7;
	public static readonly COLON = 8;
	public static readonly ARROW = 9;
	public static readonly DOUBLEARROW = 10;
	public static readonly LANGLEBAR = 11;
	public static readonly RANGLEBAR = 12;
	public static readonly LBRACKET = 13;
	public static readonly RBRACKET = 14;
	public static readonly LE = 15;
	public static readonly LEQ = 16;
	public static readonly GE = 17;
	public static readonly GEQ = 18;
	public static readonly EQ = 19;
	public static readonly NEQ = 20;
	public static readonly PLUS = 21;
	public static readonly TIMES = 22;
	public static readonly LIST_HEAD = 23;
	public static readonly LIST_ISEMPTY = 24;
	public static readonly LIST_TAIL = 25;
	public static readonly NAT_PRED = 26;
	public static readonly NAT_ISZERO = 27;
	public static readonly NAT_REC = 28;
	public static readonly DOT = 29;
	public static readonly TYPE_BOOL = 30;
	public static readonly TYPE_NAT = 31;
	public static readonly TYPE_UNIT = 32;
	public static readonly AND = 33;
	public static readonly AS = 34;
	public static readonly CONS = 35;
	public static readonly CORE = 36;
	public static readonly ELSE = 37;
	public static readonly EXTEND = 38;
	public static readonly FALSE = 39;
	public static readonly FIX = 40;
	public static readonly FN = 41;
	public static readonly FOLD = 42;
	public static readonly IF = 43;
	public static readonly IN = 44;
	public static readonly INLINE = 45;
	public static readonly LANGUAGE = 46;
	public static readonly LET = 47;
	public static readonly MATCH = 48;
	public static readonly NOT = 49;
	public static readonly OR = 50;
	public static readonly RECORD = 51;
	public static readonly RETURN = 52;
	public static readonly SUCC = 53;
	public static readonly THEN = 54;
	public static readonly THROWS = 55;
	public static readonly TRUE = 56;
	public static readonly TYPE = 57;
	public static readonly UNFOLD = 58;
	public static readonly VARIANT = 59;
	public static readonly WITH = 60;
	public static readonly MU = 61;
	public static readonly COMMENT_antlr_builtin = 62;
	public static readonly StellaIdent = 63;
	public static readonly ExtensionName = 64;
	public static readonly INTEGER = 65;
	public static readonly WS = 66;
	public static readonly ErrorToken = 67;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start_Program = 0;
	public static readonly RULE_start_Expr = 1;
	public static readonly RULE_start_Type = 2;
	public static readonly RULE_program = 3;
	public static readonly RULE_languageDecl = 4;
	public static readonly RULE_extension = 5;
	public static readonly RULE_decl = 6;
	public static readonly RULE_annotation = 7;
	public static readonly RULE_paramDecl = 8;
	public static readonly RULE_expr = 9;
	public static readonly RULE_binding = 10;
	public static readonly RULE_match_case = 11;
	public static readonly RULE_pattern = 12;
	public static readonly RULE_labelledPattern = 13;
	public static readonly RULE_stellatype = 14;
	public static readonly RULE_recordFieldType = 15;
	public static readonly RULE_variantFieldType = 16;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "';'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'='", 
                                                            "':'", "'->'", 
                                                            "'=>'", "'<|'", 
                                                            "'|>'", "'['", 
                                                            "']'", "'<'", 
                                                            "'<='", "'>'", 
                                                            "'>='", "'=='", 
                                                            "'!='", "'+'", 
                                                            "'*'", "'List::head'", 
                                                            "'List::isempty'", 
                                                            "'List::tail'", 
                                                            "'Nat::pred'", 
                                                            "'Nat::iszero'", 
                                                            "'Nat::rec'", 
                                                            "'.'", "'Bool'", 
                                                            "'Nat'", "'Unit'", 
                                                            "'and'", "'as'", 
                                                            "'cons'", "'core'", 
                                                            "'else'", "'extend'", 
                                                            "'false'", "'fix'", 
                                                            "'fn'", "'fold'", 
                                                            "'if'", "'in'", 
                                                            "'inline'", 
                                                            "'language'", 
                                                            "'let'", "'match'", 
                                                            "'not'", "'or'", 
                                                            "'record'", 
                                                            "'return'", 
                                                            "'succ'", "'then'", 
                                                            "'throws'", 
                                                            "'true'", "'type'", 
                                                            "'unfold'", 
                                                            "'variant'", 
                                                            "'with'", "'\\u00C2\\u00B5'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "COMMA", 
                                                             "SEMICOLON", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "EQUALS", "COLON", 
                                                             "ARROW", "DOUBLEARROW", 
                                                             "LANGLEBAR", 
                                                             "RANGLEBAR", 
                                                             "LBRACKET", 
                                                             "RBRACKET", 
                                                             "LE", "LEQ", 
                                                             "GE", "GEQ", 
                                                             "EQ", "NEQ", 
                                                             "PLUS", "TIMES", 
                                                             "LIST_HEAD", 
                                                             "LIST_ISEMPTY", 
                                                             "LIST_TAIL", 
                                                             "NAT_PRED", 
                                                             "NAT_ISZERO", 
                                                             "NAT_REC", 
                                                             "DOT", "TYPE_BOOL", 
                                                             "TYPE_NAT", 
                                                             "TYPE_UNIT", 
                                                             "AND", "AS", 
                                                             "CONS", "CORE", 
                                                             "ELSE", "EXTEND", 
                                                             "FALSE", "FIX", 
                                                             "FN", "FOLD", 
                                                             "IF", "IN", 
                                                             "INLINE", "LANGUAGE", 
                                                             "LET", "MATCH", 
                                                             "NOT", "OR", 
                                                             "RECORD", "RETURN", 
                                                             "SUCC", "THEN", 
                                                             "THROWS", "TRUE", 
                                                             "TYPE", "UNFOLD", 
                                                             "VARIANT", 
                                                             "WITH", "MU", 
                                                             "COMMENT_antlr_builtin", 
                                                             "StellaIdent", 
                                                             "ExtensionName", 
                                                             "INTEGER", 
                                                             "WS", "ErrorToken" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start_Program", "start_Expr", "start_Type", "program", "languageDecl", 
		"extension", "decl", "annotation", "paramDecl", "expr", "binding", "match_case", 
		"pattern", "labelledPattern", "stellatype", "recordFieldType", "variantFieldType",
	];
	public get grammarFileName(): string { return "stellaParser.g4"; }
	public get literalNames(): (string | null)[] { return stellaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return stellaParser.symbolicNames; }
	public get ruleNames(): string[] { return stellaParser.ruleNames; }
	public get serializedATN(): number[] { return stellaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, stellaParser._ATN, stellaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start_Program(): Start_ProgramContext {
		let localctx: Start_ProgramContext = new Start_ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, stellaParser.RULE_start_Program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 34;
			localctx._x = this.program();
			this.state = 35;
			this.match(stellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr(): Start_ExprContext {
		let localctx: Start_ExprContext = new Start_ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, stellaParser.RULE_start_Expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			localctx._x = this.expr(0);
			this.state = 38;
			this.match(stellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Type(): Start_TypeContext {
		let localctx: Start_TypeContext = new Start_TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, stellaParser.RULE_start_Type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			localctx._x = this.stellatype(0);
			this.state = 41;
			this.match(stellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, stellaParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.languageDecl();
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 44;
				localctx._extension = this.extension();
				localctx._extensions.push(localctx._extension);
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 65553) !== 0)) {
				{
				{
				this.state = 50;
				localctx._decl = this.decl();
				localctx._decls.push(localctx._decl);
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public languageDecl(): LanguageDeclContext {
		let localctx: LanguageDeclContext = new LanguageDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, stellaParser.RULE_languageDecl);
		try {
			localctx = new LanguageCoreContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(stellaParser.LANGUAGE);
			this.state = 57;
			this.match(stellaParser.CORE);
			this.state = 58;
			this.match(stellaParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extension(): ExtensionContext {
		let localctx: ExtensionContext = new ExtensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, stellaParser.RULE_extension);
		let _la: number;
		try {
			localctx = new AnExtensionContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(stellaParser.EXTEND);
			this.state = 61;
			this.match(stellaParser.WITH);
			this.state = 62;
			(localctx as AnExtensionContext)._ExtensionName = this.match(stellaParser.ExtensionName);
			(localctx as AnExtensionContext)._extensionNames.push((localctx as AnExtensionContext)._ExtensionName);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 63;
				this.match(stellaParser.COMMA);
				this.state = 64;
				(localctx as AnExtensionContext)._ExtensionName = this.match(stellaParser.ExtensionName);
				(localctx as AnExtensionContext)._extensionNames.push((localctx as AnExtensionContext)._ExtensionName);
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 70;
			this.match(stellaParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decl(): DeclContext {
		let localctx: DeclContext = new DeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, stellaParser.RULE_decl);
		let _la: number;
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 41:
			case 45:
				localctx = new DeclFunContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===45) {
					{
					{
					this.state = 72;
					(localctx as DeclFunContext)._annotation = this.annotation();
					(localctx as DeclFunContext)._annotations.push((localctx as DeclFunContext)._annotation);
					}
					}
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 78;
				this.match(stellaParser.FN);
				this.state = 79;
				(localctx as DeclFunContext)._name = this.match(stellaParser.StellaIdent);
				this.state = 80;
				this.match(stellaParser.LPAREN);
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===63) {
					{
					this.state = 81;
					(localctx as DeclFunContext)._paramDecl = this.paramDecl();
					(localctx as DeclFunContext)._paramDecls.push((localctx as DeclFunContext)._paramDecl);
					this.state = 86;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 82;
						this.match(stellaParser.COMMA);
						this.state = 83;
						(localctx as DeclFunContext)._paramDecl = this.paramDecl();
						(localctx as DeclFunContext)._paramDecls.push((localctx as DeclFunContext)._paramDecl);
						}
						}
						this.state = 88;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 91;
				this.match(stellaParser.RPAREN);
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 92;
					this.match(stellaParser.ARROW);
					this.state = 93;
					(localctx as DeclFunContext)._returnType = this.stellatype(0);
					}
				}

				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===55) {
					{
					this.state = 96;
					this.match(stellaParser.THROWS);
					this.state = 97;
					(localctx as DeclFunContext)._throwType = this.stellatype(0);
					}
				}

				this.state = 100;
				this.match(stellaParser.LBRACE);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 65553) !== 0)) {
					{
					{
					this.state = 101;
					(localctx as DeclFunContext)._decl = this.decl();
					(localctx as DeclFunContext)._localDecls.push((localctx as DeclFunContext)._decl);
					}
					}
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 107;
				this.match(stellaParser.RETURN);
				this.state = 108;
				(localctx as DeclFunContext)._returnExpr = this.expr(0);
				this.state = 109;
				this.match(stellaParser.SEMICOLON);
				this.state = 110;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 57:
				localctx = new DeclTypeAliasContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 112;
				this.match(stellaParser.TYPE);
				this.state = 113;
				(localctx as DeclTypeAliasContext)._name = this.match(stellaParser.StellaIdent);
				this.state = 114;
				this.match(stellaParser.EQUALS);
				this.state = 115;
				(localctx as DeclTypeAliasContext)._atype = this.stellatype(0);
				this.state = 116;
				this.match(stellaParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, stellaParser.RULE_annotation);
		try {
			localctx = new InlineAnnotationContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this.match(stellaParser.INLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public paramDecl(): ParamDeclContext {
		let localctx: ParamDeclContext = new ParamDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, stellaParser.RULE_paramDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			localctx._name = this.match(stellaParser.StellaIdent);
			this.state = 123;
			this.match(stellaParser.COLON);
			this.state = 124;
			localctx._paramType = this.stellatype(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, stellaParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				{
				localctx = new ConstTrueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 127;
				this.match(stellaParser.TRUE);
				}
				break;
			case 39:
				{
				localctx = new ConstFalseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 128;
				this.match(stellaParser.FALSE);
				}
				break;
			case 65:
				{
				localctx = new ConstIntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 129;
				(localctx as ConstIntContext)._n = this.match(stellaParser.INTEGER);
				}
				break;
			case 63:
				{
				localctx = new VarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 130;
				(localctx as VarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 35:
				{
				localctx = new ConsListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 131;
				this.match(stellaParser.CONS);
				this.state = 132;
				this.match(stellaParser.LPAREN);
				this.state = 133;
				(localctx as ConsListContext)._head = this.expr(0);
				this.state = 134;
				this.match(stellaParser.COMMA);
				this.state = 135;
				(localctx as ConsListContext)._tail = this.expr(0);
				this.state = 136;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 23:
				{
				localctx = new HeadContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 138;
				this.match(stellaParser.LIST_HEAD);
				this.state = 139;
				this.match(stellaParser.LPAREN);
				this.state = 140;
				(localctx as HeadContext)._list = this.expr(0);
				this.state = 141;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 24:
				{
				localctx = new IsEmptyContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 143;
				this.match(stellaParser.LIST_ISEMPTY);
				this.state = 144;
				this.match(stellaParser.LPAREN);
				this.state = 145;
				(localctx as IsEmptyContext)._list = this.expr(0);
				this.state = 146;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 25:
				{
				localctx = new TailContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 148;
				this.match(stellaParser.LIST_TAIL);
				this.state = 149;
				this.match(stellaParser.LPAREN);
				this.state = 150;
				(localctx as TailContext)._list = this.expr(0);
				this.state = 151;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 53:
				{
				localctx = new SuccContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 153;
				this.match(stellaParser.SUCC);
				this.state = 154;
				this.match(stellaParser.LPAREN);
				this.state = 155;
				(localctx as SuccContext)._n = this.expr(0);
				this.state = 156;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 49:
				{
				localctx = new LogicNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 158;
				this.match(stellaParser.NOT);
				this.state = 159;
				this.match(stellaParser.LPAREN);
				this.state = 160;
				(localctx as LogicNotContext)._expr_ = this.expr(0);
				this.state = 161;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 26:
				{
				localctx = new PredContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 163;
				this.match(stellaParser.NAT_PRED);
				this.state = 164;
				this.match(stellaParser.LPAREN);
				this.state = 165;
				(localctx as PredContext)._n = this.expr(0);
				this.state = 166;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 27:
				{
				localctx = new IsZeroContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 168;
				this.match(stellaParser.NAT_ISZERO);
				this.state = 169;
				this.match(stellaParser.LPAREN);
				this.state = 170;
				(localctx as IsZeroContext)._n = this.expr(0);
				this.state = 171;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 40:
				{
				localctx = new FixContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 173;
				this.match(stellaParser.FIX);
				this.state = 174;
				this.match(stellaParser.LPAREN);
				this.state = 175;
				(localctx as FixContext)._expr_ = this.expr(0);
				this.state = 176;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 28:
				{
				localctx = new NatRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 178;
				this.match(stellaParser.NAT_REC);
				this.state = 179;
				this.match(stellaParser.LPAREN);
				this.state = 180;
				(localctx as NatRecContext)._n = this.expr(0);
				this.state = 181;
				this.match(stellaParser.COMMA);
				this.state = 182;
				(localctx as NatRecContext)._initial = this.expr(0);
				this.state = 183;
				this.match(stellaParser.COMMA);
				this.state = 184;
				(localctx as NatRecContext)._step = this.expr(0);
				this.state = 185;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 42:
				{
				localctx = new FoldContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 187;
				this.match(stellaParser.FOLD);
				this.state = 188;
				this.match(stellaParser.LBRACKET);
				this.state = 189;
				(localctx as FoldContext)._type_ = this.stellatype(0);
				this.state = 190;
				this.match(stellaParser.RBRACKET);
				this.state = 191;
				(localctx as FoldContext)._expr_ = this.expr(23);
				}
				break;
			case 58:
				{
				localctx = new UnfoldContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 193;
				this.match(stellaParser.UNFOLD);
				this.state = 194;
				this.match(stellaParser.LBRACKET);
				this.state = 195;
				(localctx as UnfoldContext)._type_ = this.stellatype(0);
				this.state = 196;
				this.match(stellaParser.RBRACKET);
				this.state = 197;
				(localctx as UnfoldContext)._expr_ = this.expr(22);
				}
				break;
			case 41:
				{
				localctx = new AbstractionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 199;
				this.match(stellaParser.FN);
				this.state = 200;
				this.match(stellaParser.LPAREN);
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===63) {
					{
					this.state = 201;
					(localctx as AbstractionContext)._paramDecl = this.paramDecl();
					(localctx as AbstractionContext)._paramDecls.push((localctx as AbstractionContext)._paramDecl);
					this.state = 206;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 202;
						this.match(stellaParser.COMMA);
						this.state = 203;
						(localctx as AbstractionContext)._paramDecl = this.paramDecl();
						(localctx as AbstractionContext)._paramDecls.push((localctx as AbstractionContext)._paramDecl);
						}
						}
						this.state = 208;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 211;
				this.match(stellaParser.RPAREN);
				this.state = 212;
				this.match(stellaParser.LBRACE);
				this.state = 213;
				this.match(stellaParser.RETURN);
				this.state = 214;
				(localctx as AbstractionContext)._returnExpr = this.expr(0);
				this.state = 215;
				this.match(stellaParser.SEMICOLON);
				this.state = 216;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 5:
				{
				localctx = new TupleContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 218;
				this.match(stellaParser.LBRACE);
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 528492584) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1353019889) !== 0)) {
					{
					this.state = 219;
					(localctx as TupleContext)._expr = this.expr(0);
					(localctx as TupleContext)._exprs.push((localctx as TupleContext)._expr);
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 220;
						this.match(stellaParser.COMMA);
						this.state = 221;
						(localctx as TupleContext)._expr = this.expr(0);
						(localctx as TupleContext)._exprs.push((localctx as TupleContext)._expr);
						}
						}
						this.state = 226;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 229;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 51:
				{
				localctx = new RecordContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 230;
				this.match(stellaParser.RECORD);
				this.state = 231;
				this.match(stellaParser.LBRACE);
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===63) {
					{
					this.state = 232;
					(localctx as RecordContext)._binding = this.binding();
					(localctx as RecordContext)._bindings.push((localctx as RecordContext)._binding);
					this.state = 237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 233;
						this.match(stellaParser.COMMA);
						this.state = 234;
						(localctx as RecordContext)._binding = this.binding();
						(localctx as RecordContext)._bindings.push((localctx as RecordContext)._binding);
						}
						}
						this.state = 239;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 242;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 11:
				{
				localctx = new VariantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 243;
				this.match(stellaParser.LANGLEBAR);
				this.state = 244;
				(localctx as VariantContext)._label = this.match(stellaParser.StellaIdent);
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 245;
					this.match(stellaParser.EQUALS);
					this.state = 246;
					(localctx as VariantContext)._rhs = this.expr(0);
					}
				}

				this.state = 249;
				this.match(stellaParser.RANGLEBAR);
				}
				break;
			case 48:
				{
				localctx = new MatchContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 250;
				this.match(stellaParser.MATCH);
				this.state = 251;
				this.expr(0);
				this.state = 252;
				this.match(stellaParser.LBRACE);
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 10280) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1344602129) !== 0)) {
					{
					this.state = 253;
					(localctx as MatchContext)._match_case = this.match_case();
					(localctx as MatchContext)._cases.push((localctx as MatchContext)._match_case);
					this.state = 258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===2) {
						{
						{
						this.state = 254;
						this.match(stellaParser.SEMICOLON);
						this.state = 255;
						(localctx as MatchContext)._match_case = this.match_case();
						(localctx as MatchContext)._cases.push((localctx as MatchContext)._match_case);
						}
						}
						this.state = 260;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 263;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 13:
				{
				localctx = new ListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 265;
				this.match(stellaParser.LBRACKET);
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 528492584) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1353019889) !== 0)) {
					{
					this.state = 266;
					(localctx as ListContext)._expr = this.expr(0);
					(localctx as ListContext)._exprs.push((localctx as ListContext)._expr);
					{
					this.state = 267;
					this.match(stellaParser.COMMA);
					this.state = 268;
					(localctx as ListContext)._expr = this.expr(0);
					(localctx as ListContext)._exprs.push((localctx as ListContext)._expr);
					}
					}
				}

				this.state = 272;
				this.match(stellaParser.RBRACKET);
				}
				break;
			case 43:
				{
				localctx = new IfContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 273;
				this.match(stellaParser.IF);
				this.state = 274;
				(localctx as IfContext)._condition = this.expr(0);
				this.state = 275;
				this.match(stellaParser.THEN);
				this.state = 276;
				(localctx as IfContext)._thenExpr = this.expr(0);
				this.state = 277;
				this.match(stellaParser.ELSE);
				this.state = 278;
				(localctx as IfContext)._elseExpr = this.expr(3);
				}
				break;
			case 47:
				{
				localctx = new LetContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 280;
				this.match(stellaParser.LET);
				this.state = 281;
				(localctx as LetContext)._var_ = this.match(stellaParser.StellaIdent);
				this.state = 282;
				this.match(stellaParser.EQUALS);
				this.state = 283;
				(localctx as LetContext)._value = this.expr(0);
				this.state = 284;
				this.match(stellaParser.IN);
				this.state = 285;
				(localctx as LetContext)._body = this.expr(2);
				}
				break;
			case 3:
				{
				localctx = new ParenthesisedExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 287;
				this.match(stellaParser.LPAREN);
				this.state = 288;
				this.expr(0);
				this.state = 289;
				this.match(stellaParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 347;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 345;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 293;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 294;
						this.match(stellaParser.TIMES);
						this.state = 295;
						this.expr(21);
						}
						break;
					case 2:
						{
						localctx = new LogicAndContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 296;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 297;
						this.match(stellaParser.AND);
						this.state = 298;
						this.expr(20);
						}
						break;
					case 3:
						{
						localctx = new AddContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 299;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 300;
						this.match(stellaParser.PLUS);
						this.state = 301;
						this.expr(19);
						}
						break;
					case 4:
						{
						localctx = new LogicOrContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 302;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 303;
						this.match(stellaParser.OR);
						this.state = 304;
						this.expr(18);
						}
						break;
					case 5:
						{
						localctx = new LessThanContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LessThanContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 305;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 306;
						this.match(stellaParser.LE);
						this.state = 307;
						(localctx as LessThanContext)._right = this.expr(10);
						}
						break;
					case 6:
						{
						localctx = new LessThanOrEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LessThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 308;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 309;
						this.match(stellaParser.LEQ);
						this.state = 310;
						(localctx as LessThanOrEqualContext)._right = this.expr(9);
						}
						break;
					case 7:
						{
						localctx = new GreaterThanContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as GreaterThanContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 311;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 312;
						this.match(stellaParser.GE);
						this.state = 313;
						(localctx as GreaterThanContext)._right = this.expr(8);
						}
						break;
					case 8:
						{
						localctx = new GreaterThanOrEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as GreaterThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 314;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 315;
						this.match(stellaParser.GEQ);
						this.state = 316;
						(localctx as GreaterThanOrEqualContext)._right = this.expr(7);
						}
						break;
					case 9:
						{
						localctx = new EqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as EqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 317;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 318;
						this.match(stellaParser.EQ);
						this.state = 319;
						(localctx as EqualContext)._right = this.expr(6);
						}
						break;
					case 10:
						{
						localctx = new NotEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as NotEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 320;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 321;
						this.match(stellaParser.NEQ);
						this.state = 322;
						(localctx as NotEqualContext)._right = this.expr(5);
						}
						break;
					case 11:
						{
						localctx = new DotRecordContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as DotRecordContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 323;
						if (!(this.precpred(this._ctx, 39))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 39)");
						}
						this.state = 324;
						this.match(stellaParser.DOT);
						this.state = 325;
						(localctx as DotRecordContext)._label = this.match(stellaParser.StellaIdent);
						}
						break;
					case 12:
						{
						localctx = new DotTupleContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as DotTupleContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 326;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 327;
						this.match(stellaParser.DOT);
						this.state = 328;
						(localctx as DotTupleContext)._index = this.match(stellaParser.INTEGER);
						}
						break;
					case 13:
						{
						localctx = new ApplicationContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as ApplicationContext)._fun = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 329;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 330;
						this.match(stellaParser.LPAREN);
						this.state = 339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 528492584) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1353019889) !== 0)) {
							{
							this.state = 331;
							(localctx as ApplicationContext)._expr = this.expr(0);
							(localctx as ApplicationContext)._args.push((localctx as ApplicationContext)._expr);
							this.state = 336;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la===1) {
								{
								{
								this.state = 332;
								this.match(stellaParser.COMMA);
								this.state = 333;
								(localctx as ApplicationContext)._expr = this.expr(0);
								(localctx as ApplicationContext)._args.push((localctx as ApplicationContext)._expr);
								}
								}
								this.state = 338;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 341;
						this.match(stellaParser.RPAREN);
						}
						break;
					case 14:
						{
						localctx = new TypeAscContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as TypeAscContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 342;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 343;
						this.match(stellaParser.AS);
						this.state = 344;
						(localctx as TypeAscContext)._type_ = this.stellatype(0);
						}
						break;
					}
					}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public binding(): BindingContext {
		let localctx: BindingContext = new BindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, stellaParser.RULE_binding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			localctx._name = this.match(stellaParser.StellaIdent);
			this.state = 351;
			this.match(stellaParser.EQUALS);
			this.state = 352;
			localctx._rhs = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public match_case(): Match_caseContext {
		let localctx: Match_caseContext = new Match_caseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, stellaParser.RULE_match_case);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 354;
			this.pattern();
			this.state = 355;
			this.match(stellaParser.DOUBLEARROW);
			this.state = 356;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let localctx: PatternContext = new PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, stellaParser.RULE_pattern);
		let _la: number;
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				localctx = new PatternVariantContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 358;
				this.match(stellaParser.LANGLEBAR);
				this.state = 359;
				(localctx as PatternVariantContext)._label = this.match(stellaParser.StellaIdent);
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 360;
					this.match(stellaParser.EQUALS);
					this.state = 361;
					this.pattern();
					}
				}

				this.state = 364;
				this.match(stellaParser.RANGLEBAR);
				}
				break;
			case 5:
				localctx = new PatternTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 365;
				this.match(stellaParser.LBRACE);
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 10280) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1344602129) !== 0)) {
					{
					this.state = 366;
					(localctx as PatternTupleContext)._pattern = this.pattern();
					(localctx as PatternTupleContext)._patterns.push((localctx as PatternTupleContext)._pattern);
					this.state = 371;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 367;
						this.match(stellaParser.COMMA);
						this.state = 368;
						(localctx as PatternTupleContext)._pattern = this.pattern();
						(localctx as PatternTupleContext)._patterns.push((localctx as PatternTupleContext)._pattern);
						}
						}
						this.state = 373;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 376;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 51:
				localctx = new PatternRecordContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 377;
				this.match(stellaParser.RECORD);
				this.state = 378;
				this.match(stellaParser.LBRACE);
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===63) {
					{
					this.state = 379;
					(localctx as PatternRecordContext)._labelledPattern = this.labelledPattern();
					(localctx as PatternRecordContext)._patterns.push((localctx as PatternRecordContext)._labelledPattern);
					this.state = 384;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 380;
						this.match(stellaParser.COMMA);
						this.state = 381;
						(localctx as PatternRecordContext)._labelledPattern = this.labelledPattern();
						(localctx as PatternRecordContext)._patterns.push((localctx as PatternRecordContext)._labelledPattern);
						}
						}
						this.state = 386;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 389;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 13:
				localctx = new PatternListContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 390;
				this.match(stellaParser.LBRACKET);
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 10280) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1344602129) !== 0)) {
					{
					this.state = 391;
					(localctx as PatternListContext)._pattern = this.pattern();
					(localctx as PatternListContext)._patterns.push((localctx as PatternListContext)._pattern);
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 392;
						this.match(stellaParser.COMMA);
						this.state = 393;
						(localctx as PatternListContext)._pattern = this.pattern();
						(localctx as PatternListContext)._patterns.push((localctx as PatternListContext)._pattern);
						}
						}
						this.state = 398;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 401;
				this.match(stellaParser.RBRACKET);
				}
				break;
			case 35:
				localctx = new PatternConsContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 402;
				this.match(stellaParser.CONS);
				this.state = 403;
				this.match(stellaParser.LPAREN);
				this.state = 404;
				(localctx as PatternConsContext)._head = this.pattern();
				this.state = 405;
				this.match(stellaParser.COMMA);
				this.state = 406;
				(localctx as PatternConsContext)._tail = this.pattern();
				this.state = 407;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 39:
				localctx = new PatternFalseContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 409;
				this.match(stellaParser.FALSE);
				}
				break;
			case 56:
				localctx = new PatternTrueContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 410;
				this.match(stellaParser.TRUE);
				}
				break;
			case 65:
				localctx = new PatternIntContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 411;
				(localctx as PatternIntContext)._n = this.match(stellaParser.INTEGER);
				}
				break;
			case 53:
				localctx = new PatternSuccContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 412;
				this.match(stellaParser.SUCC);
				this.state = 413;
				this.match(stellaParser.LPAREN);
				this.state = 414;
				(localctx as PatternSuccContext)._n = this.pattern();
				this.state = 415;
				this.match(stellaParser.RPAREN);
				}
				break;
			case 63:
				localctx = new PatternVarContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 417;
				(localctx as PatternVarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 3:
				localctx = new ParenthesisedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 418;
				this.match(stellaParser.LPAREN);
				this.state = 419;
				this.pattern();
				this.state = 420;
				this.match(stellaParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelledPattern(): LabelledPatternContext {
		let localctx: LabelledPatternContext = new LabelledPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, stellaParser.RULE_labelledPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 424;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 425;
			this.match(stellaParser.EQUALS);
			this.state = 426;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public stellatype(): StellatypeContext;
	public stellatype(_p: number): StellatypeContext;
	// @RuleVersion(0)
	public stellatype(_p?: number): StellatypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: StellatypeContext = new StellatypeContext(this, this._ctx, _parentState);
		let _prevctx: StellatypeContext = localctx;
		let _startState: number = 28;
		this.enterRecursionRule(localctx, 28, stellaParser.RULE_stellatype, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
				{
				localctx = new TypeBoolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 429;
				this.match(stellaParser.TYPE_BOOL);
				}
				break;
			case 31:
				{
				localctx = new TypeNatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 430;
				this.match(stellaParser.TYPE_NAT);
				}
				break;
			case 41:
				{
				localctx = new TypeFunContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 431;
				this.match(stellaParser.FN);
				this.state = 432;
				this.match(stellaParser.LPAREN);
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221233704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2819097089) !== 0)) {
					{
					this.state = 433;
					(localctx as TypeFunContext)._stellatype = this.stellatype(0);
					(localctx as TypeFunContext)._paramTypes.push((localctx as TypeFunContext)._stellatype);
					this.state = 438;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 434;
						this.match(stellaParser.COMMA);
						this.state = 435;
						(localctx as TypeFunContext)._stellatype = this.stellatype(0);
						(localctx as TypeFunContext)._paramTypes.push((localctx as TypeFunContext)._stellatype);
						}
						}
						this.state = 440;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 443;
				this.match(stellaParser.RPAREN);
				this.state = 444;
				this.match(stellaParser.ARROW);
				this.state = 445;
				(localctx as TypeFunContext)._returnType = this.stellatype(10);
				}
				break;
			case 61:
				{
				localctx = new TypeRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 446;
				this.match(stellaParser.MU);
				this.state = 447;
				(localctx as TypeRecContext)._var_ = this.match(stellaParser.StellaIdent);
				this.state = 448;
				this.match(stellaParser.DOT);
				this.state = 449;
				(localctx as TypeRecContext)._type_ = this.stellatype(9);
				}
				break;
			case 5:
				{
				localctx = new TypeTupleContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 450;
				this.match(stellaParser.LBRACE);
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221233704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2819097089) !== 0)) {
					{
					this.state = 451;
					(localctx as TypeTupleContext)._stellatype = this.stellatype(0);
					(localctx as TypeTupleContext)._types.push((localctx as TypeTupleContext)._stellatype);
					{
					this.state = 452;
					this.match(stellaParser.COMMA);
					this.state = 453;
					(localctx as TypeTupleContext)._stellatype = this.stellatype(0);
					(localctx as TypeTupleContext)._types.push((localctx as TypeTupleContext)._stellatype);
					}
					}
				}

				this.state = 457;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 51:
				{
				localctx = new TypeRecordContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 458;
				this.match(stellaParser.RECORD);
				this.state = 459;
				this.match(stellaParser.LBRACE);
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===63) {
					{
					this.state = 460;
					(localctx as TypeRecordContext)._recordFieldType = this.recordFieldType();
					(localctx as TypeRecordContext)._fieldTypes.push((localctx as TypeRecordContext)._recordFieldType);
					this.state = 465;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 461;
						this.match(stellaParser.COMMA);
						this.state = 462;
						(localctx as TypeRecordContext)._recordFieldType = this.recordFieldType();
						(localctx as TypeRecordContext)._fieldTypes.push((localctx as TypeRecordContext)._recordFieldType);
						}
						}
						this.state = 467;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 470;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 59:
				{
				localctx = new TypeVariantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 471;
				this.match(stellaParser.VARIANT);
				this.state = 472;
				this.match(stellaParser.LBRACE);
				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===63) {
					{
					this.state = 473;
					(localctx as TypeVariantContext)._variantFieldType = this.variantFieldType();
					(localctx as TypeVariantContext)._fieldTypes.push((localctx as TypeVariantContext)._variantFieldType);
					this.state = 478;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 474;
						this.match(stellaParser.COMMA);
						this.state = 475;
						(localctx as TypeVariantContext)._variantFieldType = this.variantFieldType();
						(localctx as TypeVariantContext)._fieldTypes.push((localctx as TypeVariantContext)._variantFieldType);
						}
						}
						this.state = 480;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 483;
				this.match(stellaParser.RBRACE);
				}
				break;
			case 13:
				{
				localctx = new TypeListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 484;
				this.match(stellaParser.LBRACKET);
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221233704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2819097089) !== 0)) {
					{
					this.state = 485;
					(localctx as TypeListContext)._stellatype = this.stellatype(0);
					(localctx as TypeListContext)._types.push((localctx as TypeListContext)._stellatype);
					this.state = 490;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 486;
						this.match(stellaParser.COMMA);
						this.state = 487;
						(localctx as TypeListContext)._stellatype = this.stellatype(0);
						(localctx as TypeListContext)._types.push((localctx as TypeListContext)._stellatype);
						}
						}
						this.state = 492;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 495;
				this.match(stellaParser.RBRACKET);
				}
				break;
			case 32:
				{
				localctx = new TypeUnitContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 496;
				this.match(stellaParser.TYPE_UNIT);
				}
				break;
			case 63:
				{
				localctx = new TypeVarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 497;
				(localctx as TypeVarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 3:
				{
				localctx = new TypeParensContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 498;
				this.match(stellaParser.LPAREN);
				this.state = 499;
				this.stellatype(0);
				this.state = 500;
				this.match(stellaParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 509;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new TypeSumContext(this, new StellatypeContext(this, _parentctx, _parentState));
					(localctx as TypeSumContext)._left = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_stellatype);
					this.state = 504;
					if (!(this.precpred(this._ctx, 8))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
					}
					this.state = 505;
					this.match(stellaParser.PLUS);
					this.state = 506;
					(localctx as TypeSumContext)._right = this.stellatype(9);
					}
					}
				}
				this.state = 511;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordFieldType(): RecordFieldTypeContext {
		let localctx: RecordFieldTypeContext = new RecordFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, stellaParser.RULE_recordFieldType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 512;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 513;
			this.match(stellaParser.COLON);
			this.state = 514;
			localctx._type_ = this.stellatype(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variantFieldType(): VariantFieldTypeContext {
		let localctx: VariantFieldTypeContext = new VariantFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, stellaParser.RULE_variantFieldType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 516;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 517;
				this.match(stellaParser.COLON);
				this.state = 518;
				localctx._type_ = this.stellatype(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		case 14:
			return this.stellatype_sempred(localctx as StellatypeContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 20);
		case 1:
			return this.precpred(this._ctx, 19);
		case 2:
			return this.precpred(this._ctx, 18);
		case 3:
			return this.precpred(this._ctx, 17);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		case 6:
			return this.precpred(this._ctx, 7);
		case 7:
			return this.precpred(this._ctx, 6);
		case 8:
			return this.precpred(this._ctx, 5);
		case 9:
			return this.precpred(this._ctx, 4);
		case 10:
			return this.precpred(this._ctx, 39);
		case 11:
			return this.precpred(this._ctx, 38);
		case 12:
			return this.precpred(this._ctx, 21);
		case 13:
			return this.precpred(this._ctx, 16);
		}
		return true;
	}
	private stellatype_sempred(localctx: StellatypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,67,522,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,3,
	5,3,52,8,3,10,3,12,3,55,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,5,5,66,
	8,5,10,5,12,5,69,9,5,1,5,1,5,1,6,5,6,74,8,6,10,6,12,6,77,9,6,1,6,1,6,1,
	6,1,6,1,6,1,6,5,6,85,8,6,10,6,12,6,88,9,6,3,6,90,8,6,1,6,1,6,1,6,3,6,95,
	8,6,1,6,1,6,3,6,99,8,6,1,6,1,6,5,6,103,8,6,10,6,12,6,106,9,6,1,6,1,6,1,
	6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,119,8,6,1,7,1,7,1,8,1,8,1,8,1,8,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,5,9,205,8,9,10,9,12,9,208,9,9,3,9,210,8,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,223,8,9,10,9,12,9,226,9,9,3,9,228,
	8,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,236,8,9,10,9,12,9,239,9,9,3,9,241,8,9,1,
	9,1,9,1,9,1,9,1,9,3,9,248,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,257,8,9,10,
	9,12,9,260,9,9,3,9,262,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,271,8,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	3,9,292,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,335,8,9,10,9,12,9,338,9,9,3,9,340,8,
	9,1,9,1,9,1,9,1,9,5,9,346,8,9,10,9,12,9,349,9,9,1,10,1,10,1,10,1,10,1,11,
	1,11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,363,8,12,1,12,1,12,1,12,1,12,1,
	12,5,12,370,8,12,10,12,12,12,373,9,12,3,12,375,8,12,1,12,1,12,1,12,1,12,
	1,12,1,12,5,12,383,8,12,10,12,12,12,386,9,12,3,12,388,8,12,1,12,1,12,1,
	12,1,12,1,12,5,12,395,8,12,10,12,12,12,398,9,12,3,12,400,8,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
	12,1,12,1,12,1,12,1,12,3,12,423,8,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,
	1,14,1,14,1,14,1,14,1,14,5,14,437,8,14,10,14,12,14,440,9,14,3,14,442,8,
	14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,456,
	8,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,464,8,14,10,14,12,14,467,9,14,3,
	14,469,8,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,477,8,14,10,14,12,14,480,
	9,14,3,14,482,8,14,1,14,1,14,1,14,1,14,1,14,5,14,489,8,14,10,14,12,14,492,
	9,14,3,14,494,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,503,8,14,1,14,
	1,14,1,14,5,14,508,8,14,10,14,12,14,511,9,14,1,15,1,15,1,15,1,15,1,16,1,
	16,1,16,3,16,520,8,16,1,16,0,2,18,28,17,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,0,0,602,0,34,1,0,0,0,2,37,1,0,0,0,4,40,1,0,0,0,6,43,1,0,
	0,0,8,56,1,0,0,0,10,60,1,0,0,0,12,118,1,0,0,0,14,120,1,0,0,0,16,122,1,0,
	0,0,18,291,1,0,0,0,20,350,1,0,0,0,22,354,1,0,0,0,24,422,1,0,0,0,26,424,
	1,0,0,0,28,502,1,0,0,0,30,512,1,0,0,0,32,516,1,0,0,0,34,35,3,6,3,0,35,36,
	5,0,0,1,36,1,1,0,0,0,37,38,3,18,9,0,38,39,5,0,0,1,39,3,1,0,0,0,40,41,3,
	28,14,0,41,42,5,0,0,1,42,5,1,0,0,0,43,47,3,8,4,0,44,46,3,10,5,0,45,44,1,
	0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,53,1,0,0,0,49,47,1,0,
	0,0,50,52,3,12,6,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,
	0,0,54,7,1,0,0,0,55,53,1,0,0,0,56,57,5,46,0,0,57,58,5,36,0,0,58,59,5,2,
	0,0,59,9,1,0,0,0,60,61,5,38,0,0,61,62,5,60,0,0,62,67,5,64,0,0,63,64,5,1,
	0,0,64,66,5,64,0,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,
	0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,71,5,2,0,0,71,11,1,0,0,0,72,74,3,14,
	7,0,73,72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,
	0,77,75,1,0,0,0,78,79,5,41,0,0,79,80,5,63,0,0,80,89,5,3,0,0,81,86,3,16,
	8,0,82,83,5,1,0,0,83,85,3,16,8,0,84,82,1,0,0,0,85,88,1,0,0,0,86,84,1,0,
	0,0,86,87,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,89,81,1,0,0,0,89,90,1,0,0,
	0,90,91,1,0,0,0,91,94,5,4,0,0,92,93,5,9,0,0,93,95,3,28,14,0,94,92,1,0,0,
	0,94,95,1,0,0,0,95,98,1,0,0,0,96,97,5,55,0,0,97,99,3,28,14,0,98,96,1,0,
	0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,104,5,5,0,0,101,103,3,12,6,0,102,101,
	1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,
	106,104,1,0,0,0,107,108,5,52,0,0,108,109,3,18,9,0,109,110,5,2,0,0,110,111,
	5,6,0,0,111,119,1,0,0,0,112,113,5,57,0,0,113,114,5,63,0,0,114,115,5,7,0,
	0,115,116,3,28,14,0,116,117,5,2,0,0,117,119,1,0,0,0,118,75,1,0,0,0,118,
	112,1,0,0,0,119,13,1,0,0,0,120,121,5,45,0,0,121,15,1,0,0,0,122,123,5,63,
	0,0,123,124,5,8,0,0,124,125,3,28,14,0,125,17,1,0,0,0,126,127,6,9,-1,0,127,
	292,5,56,0,0,128,292,5,39,0,0,129,292,5,65,0,0,130,292,5,63,0,0,131,132,
	5,35,0,0,132,133,5,3,0,0,133,134,3,18,9,0,134,135,5,1,0,0,135,136,3,18,
	9,0,136,137,5,4,0,0,137,292,1,0,0,0,138,139,5,23,0,0,139,140,5,3,0,0,140,
	141,3,18,9,0,141,142,5,4,0,0,142,292,1,0,0,0,143,144,5,24,0,0,144,145,5,
	3,0,0,145,146,3,18,9,0,146,147,5,4,0,0,147,292,1,0,0,0,148,149,5,25,0,0,
	149,150,5,3,0,0,150,151,3,18,9,0,151,152,5,4,0,0,152,292,1,0,0,0,153,154,
	5,53,0,0,154,155,5,3,0,0,155,156,3,18,9,0,156,157,5,4,0,0,157,292,1,0,0,
	0,158,159,5,49,0,0,159,160,5,3,0,0,160,161,3,18,9,0,161,162,5,4,0,0,162,
	292,1,0,0,0,163,164,5,26,0,0,164,165,5,3,0,0,165,166,3,18,9,0,166,167,5,
	4,0,0,167,292,1,0,0,0,168,169,5,27,0,0,169,170,5,3,0,0,170,171,3,18,9,0,
	171,172,5,4,0,0,172,292,1,0,0,0,173,174,5,40,0,0,174,175,5,3,0,0,175,176,
	3,18,9,0,176,177,5,4,0,0,177,292,1,0,0,0,178,179,5,28,0,0,179,180,5,3,0,
	0,180,181,3,18,9,0,181,182,5,1,0,0,182,183,3,18,9,0,183,184,5,1,0,0,184,
	185,3,18,9,0,185,186,5,4,0,0,186,292,1,0,0,0,187,188,5,42,0,0,188,189,5,
	13,0,0,189,190,3,28,14,0,190,191,5,14,0,0,191,192,3,18,9,23,192,292,1,0,
	0,0,193,194,5,58,0,0,194,195,5,13,0,0,195,196,3,28,14,0,196,197,5,14,0,
	0,197,198,3,18,9,22,198,292,1,0,0,0,199,200,5,41,0,0,200,209,5,3,0,0,201,
	206,3,16,8,0,202,203,5,1,0,0,203,205,3,16,8,0,204,202,1,0,0,0,205,208,1,
	0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,209,
	201,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,212,5,4,0,0,212,213,5,5,
	0,0,213,214,5,52,0,0,214,215,3,18,9,0,215,216,5,2,0,0,216,217,5,6,0,0,217,
	292,1,0,0,0,218,227,5,5,0,0,219,224,3,18,9,0,220,221,5,1,0,0,221,223,3,
	18,9,0,222,220,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,
	225,228,1,0,0,0,226,224,1,0,0,0,227,219,1,0,0,0,227,228,1,0,0,0,228,229,
	1,0,0,0,229,292,5,6,0,0,230,231,5,51,0,0,231,240,5,5,0,0,232,237,3,20,10,
	0,233,234,5,1,0,0,234,236,3,20,10,0,235,233,1,0,0,0,236,239,1,0,0,0,237,
	235,1,0,0,0,237,238,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,240,232,1,0,
	0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,292,5,6,0,0,243,244,5,11,0,0,244,
	247,5,63,0,0,245,246,5,7,0,0,246,248,3,18,9,0,247,245,1,0,0,0,247,248,1,
	0,0,0,248,249,1,0,0,0,249,292,5,12,0,0,250,251,5,48,0,0,251,252,3,18,9,
	0,252,261,5,5,0,0,253,258,3,22,11,0,254,255,5,2,0,0,255,257,3,22,11,0,256,
	254,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,262,1,0,
	0,0,260,258,1,0,0,0,261,253,1,0,0,0,261,262,1,0,0,0,262,263,1,0,0,0,263,
	264,5,6,0,0,264,292,1,0,0,0,265,270,5,13,0,0,266,267,3,18,9,0,267,268,5,
	1,0,0,268,269,3,18,9,0,269,271,1,0,0,0,270,266,1,0,0,0,270,271,1,0,0,0,
	271,272,1,0,0,0,272,292,5,14,0,0,273,274,5,43,0,0,274,275,3,18,9,0,275,
	276,5,54,0,0,276,277,3,18,9,0,277,278,5,37,0,0,278,279,3,18,9,3,279,292,
	1,0,0,0,280,281,5,47,0,0,281,282,5,63,0,0,282,283,5,7,0,0,283,284,3,18,
	9,0,284,285,5,44,0,0,285,286,3,18,9,2,286,292,1,0,0,0,287,288,5,3,0,0,288,
	289,3,18,9,0,289,290,5,4,0,0,290,292,1,0,0,0,291,126,1,0,0,0,291,128,1,
	0,0,0,291,129,1,0,0,0,291,130,1,0,0,0,291,131,1,0,0,0,291,138,1,0,0,0,291,
	143,1,0,0,0,291,148,1,0,0,0,291,153,1,0,0,0,291,158,1,0,0,0,291,163,1,0,
	0,0,291,168,1,0,0,0,291,173,1,0,0,0,291,178,1,0,0,0,291,187,1,0,0,0,291,
	193,1,0,0,0,291,199,1,0,0,0,291,218,1,0,0,0,291,230,1,0,0,0,291,243,1,0,
	0,0,291,250,1,0,0,0,291,265,1,0,0,0,291,273,1,0,0,0,291,280,1,0,0,0,291,
	287,1,0,0,0,292,347,1,0,0,0,293,294,10,20,0,0,294,295,5,22,0,0,295,346,
	3,18,9,21,296,297,10,19,0,0,297,298,5,33,0,0,298,346,3,18,9,20,299,300,
	10,18,0,0,300,301,5,21,0,0,301,346,3,18,9,19,302,303,10,17,0,0,303,304,
	5,50,0,0,304,346,3,18,9,18,305,306,10,9,0,0,306,307,5,15,0,0,307,346,3,
	18,9,10,308,309,10,8,0,0,309,310,5,16,0,0,310,346,3,18,9,9,311,312,10,7,
	0,0,312,313,5,17,0,0,313,346,3,18,9,8,314,315,10,6,0,0,315,316,5,18,0,0,
	316,346,3,18,9,7,317,318,10,5,0,0,318,319,5,19,0,0,319,346,3,18,9,6,320,
	321,10,4,0,0,321,322,5,20,0,0,322,346,3,18,9,5,323,324,10,39,0,0,324,325,
	5,29,0,0,325,346,5,63,0,0,326,327,10,38,0,0,327,328,5,29,0,0,328,346,5,
	65,0,0,329,330,10,21,0,0,330,339,5,3,0,0,331,336,3,18,9,0,332,333,5,1,0,
	0,333,335,3,18,9,0,334,332,1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,
	337,1,0,0,0,337,340,1,0,0,0,338,336,1,0,0,0,339,331,1,0,0,0,339,340,1,0,
	0,0,340,341,1,0,0,0,341,346,5,4,0,0,342,343,10,16,0,0,343,344,5,34,0,0,
	344,346,3,28,14,0,345,293,1,0,0,0,345,296,1,0,0,0,345,299,1,0,0,0,345,302,
	1,0,0,0,345,305,1,0,0,0,345,308,1,0,0,0,345,311,1,0,0,0,345,314,1,0,0,0,
	345,317,1,0,0,0,345,320,1,0,0,0,345,323,1,0,0,0,345,326,1,0,0,0,345,329,
	1,0,0,0,345,342,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,
	348,19,1,0,0,0,349,347,1,0,0,0,350,351,5,63,0,0,351,352,5,7,0,0,352,353,
	3,18,9,0,353,21,1,0,0,0,354,355,3,24,12,0,355,356,5,10,0,0,356,357,3,18,
	9,0,357,23,1,0,0,0,358,359,5,11,0,0,359,362,5,63,0,0,360,361,5,7,0,0,361,
	363,3,24,12,0,362,360,1,0,0,0,362,363,1,0,0,0,363,364,1,0,0,0,364,423,5,
	12,0,0,365,374,5,5,0,0,366,371,3,24,12,0,367,368,5,1,0,0,368,370,3,24,12,
	0,369,367,1,0,0,0,370,373,1,0,0,0,371,369,1,0,0,0,371,372,1,0,0,0,372,375,
	1,0,0,0,373,371,1,0,0,0,374,366,1,0,0,0,374,375,1,0,0,0,375,376,1,0,0,0,
	376,423,5,6,0,0,377,378,5,51,0,0,378,387,5,5,0,0,379,384,3,26,13,0,380,
	381,5,1,0,0,381,383,3,26,13,0,382,380,1,0,0,0,383,386,1,0,0,0,384,382,1,
	0,0,0,384,385,1,0,0,0,385,388,1,0,0,0,386,384,1,0,0,0,387,379,1,0,0,0,387,
	388,1,0,0,0,388,389,1,0,0,0,389,423,5,6,0,0,390,399,5,13,0,0,391,396,3,
	24,12,0,392,393,5,1,0,0,393,395,3,24,12,0,394,392,1,0,0,0,395,398,1,0,0,
	0,396,394,1,0,0,0,396,397,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,399,391,
	1,0,0,0,399,400,1,0,0,0,400,401,1,0,0,0,401,423,5,14,0,0,402,403,5,35,0,
	0,403,404,5,3,0,0,404,405,3,24,12,0,405,406,5,1,0,0,406,407,3,24,12,0,407,
	408,5,4,0,0,408,423,1,0,0,0,409,423,5,39,0,0,410,423,5,56,0,0,411,423,5,
	65,0,0,412,413,5,53,0,0,413,414,5,3,0,0,414,415,3,24,12,0,415,416,5,4,0,
	0,416,423,1,0,0,0,417,423,5,63,0,0,418,419,5,3,0,0,419,420,3,24,12,0,420,
	421,5,4,0,0,421,423,1,0,0,0,422,358,1,0,0,0,422,365,1,0,0,0,422,377,1,0,
	0,0,422,390,1,0,0,0,422,402,1,0,0,0,422,409,1,0,0,0,422,410,1,0,0,0,422,
	411,1,0,0,0,422,412,1,0,0,0,422,417,1,0,0,0,422,418,1,0,0,0,423,25,1,0,
	0,0,424,425,5,63,0,0,425,426,5,7,0,0,426,427,3,24,12,0,427,27,1,0,0,0,428,
	429,6,14,-1,0,429,503,5,30,0,0,430,503,5,31,0,0,431,432,5,41,0,0,432,441,
	5,3,0,0,433,438,3,28,14,0,434,435,5,1,0,0,435,437,3,28,14,0,436,434,1,0,
	0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,442,1,0,0,0,440,
	438,1,0,0,0,441,433,1,0,0,0,441,442,1,0,0,0,442,443,1,0,0,0,443,444,5,4,
	0,0,444,445,5,9,0,0,445,503,3,28,14,10,446,447,5,61,0,0,447,448,5,63,0,
	0,448,449,5,29,0,0,449,503,3,28,14,9,450,455,5,5,0,0,451,452,3,28,14,0,
	452,453,5,1,0,0,453,454,3,28,14,0,454,456,1,0,0,0,455,451,1,0,0,0,455,456,
	1,0,0,0,456,457,1,0,0,0,457,503,5,6,0,0,458,459,5,51,0,0,459,468,5,5,0,
	0,460,465,3,30,15,0,461,462,5,1,0,0,462,464,3,30,15,0,463,461,1,0,0,0,464,
	467,1,0,0,0,465,463,1,0,0,0,465,466,1,0,0,0,466,469,1,0,0,0,467,465,1,0,
	0,0,468,460,1,0,0,0,468,469,1,0,0,0,469,470,1,0,0,0,470,503,5,6,0,0,471,
	472,5,59,0,0,472,481,5,5,0,0,473,478,3,32,16,0,474,475,5,1,0,0,475,477,
	3,32,16,0,476,474,1,0,0,0,477,480,1,0,0,0,478,476,1,0,0,0,478,479,1,0,0,
	0,479,482,1,0,0,0,480,478,1,0,0,0,481,473,1,0,0,0,481,482,1,0,0,0,482,483,
	1,0,0,0,483,503,5,6,0,0,484,493,5,13,0,0,485,490,3,28,14,0,486,487,5,1,
	0,0,487,489,3,28,14,0,488,486,1,0,0,0,489,492,1,0,0,0,490,488,1,0,0,0,490,
	491,1,0,0,0,491,494,1,0,0,0,492,490,1,0,0,0,493,485,1,0,0,0,493,494,1,0,
	0,0,494,495,1,0,0,0,495,503,5,14,0,0,496,503,5,32,0,0,497,503,5,63,0,0,
	498,499,5,3,0,0,499,500,3,28,14,0,500,501,5,4,0,0,501,503,1,0,0,0,502,428,
	1,0,0,0,502,430,1,0,0,0,502,431,1,0,0,0,502,446,1,0,0,0,502,450,1,0,0,0,
	502,458,1,0,0,0,502,471,1,0,0,0,502,484,1,0,0,0,502,496,1,0,0,0,502,497,
	1,0,0,0,502,498,1,0,0,0,503,509,1,0,0,0,504,505,10,8,0,0,505,506,5,21,0,
	0,506,508,3,28,14,9,507,504,1,0,0,0,508,511,1,0,0,0,509,507,1,0,0,0,509,
	510,1,0,0,0,510,29,1,0,0,0,511,509,1,0,0,0,512,513,5,63,0,0,513,514,5,8,
	0,0,514,515,3,28,14,0,515,31,1,0,0,0,516,519,5,63,0,0,517,518,5,8,0,0,518,
	520,3,28,14,0,519,517,1,0,0,0,519,520,1,0,0,0,520,33,1,0,0,0,45,47,53,67,
	75,86,89,94,98,104,118,206,209,224,227,237,240,247,258,261,270,291,336,
	339,345,347,362,371,374,384,387,396,399,422,438,441,455,465,468,478,481,
	490,493,502,509,519];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!stellaParser.__ATN) {
			stellaParser.__ATN = new ATNDeserializer().deserialize(stellaParser._serializedATN);
		}

		return stellaParser.__ATN;
	}


	static DecisionsToDFA = stellaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Start_ProgramContext extends ParserRuleContext {
	public _x!: ProgramContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(stellaParser.EOF, 0);
	}
	public program(): ProgramContext {
		return this.getTypedRuleContext(ProgramContext, 0) as ProgramContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_start_Program;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterStart_Program) {
	 		listener.enterStart_Program(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitStart_Program) {
	 		listener.exitStart_Program(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitStart_Program) {
			return visitor.visitStart_Program(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Start_ExprContext extends ParserRuleContext {
	public _x!: ExprContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(stellaParser.EOF, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_start_Expr;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterStart_Expr) {
	 		listener.enterStart_Expr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitStart_Expr) {
	 		listener.exitStart_Expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitStart_Expr) {
			return visitor.visitStart_Expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Start_TypeContext extends ParserRuleContext {
	public _x!: StellatypeContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(stellaParser.EOF, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_start_Type;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterStart_Type) {
	 		listener.enterStart_Type(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitStart_Type) {
	 		listener.exitStart_Type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitStart_Type) {
			return visitor.visitStart_Type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public _extension!: ExtensionContext;
	public _extensions: ExtensionContext[] = [];
	public _decl!: DeclContext;
	public _decls: DeclContext[] = [];
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public languageDecl(): LanguageDeclContext {
		return this.getTypedRuleContext(LanguageDeclContext, 0) as LanguageDeclContext;
	}
	public extension_list(): ExtensionContext[] {
		return this.getTypedRuleContexts(ExtensionContext) as ExtensionContext[];
	}
	public extension(i: number): ExtensionContext {
		return this.getTypedRuleContext(ExtensionContext, i) as ExtensionContext;
	}
	public decl_list(): DeclContext[] {
		return this.getTypedRuleContexts(DeclContext) as DeclContext[];
	}
	public decl(i: number): DeclContext {
		return this.getTypedRuleContext(DeclContext, i) as DeclContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_program;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LanguageDeclContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_languageDecl;
	}
	public copyFrom(ctx: LanguageDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class LanguageCoreContext extends LanguageDeclContext {
	constructor(parser: stellaParser, ctx: LanguageDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LANGUAGE(): TerminalNode {
		return this.getToken(stellaParser.LANGUAGE, 0);
	}
	public CORE(): TerminalNode {
		return this.getToken(stellaParser.CORE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(stellaParser.SEMICOLON, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLanguageCore) {
	 		listener.enterLanguageCore(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLanguageCore) {
	 		listener.exitLanguageCore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLanguageCore) {
			return visitor.visitLanguageCore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_extension;
	}
	public copyFrom(ctx: ExtensionContext): void {
		super.copyFrom(ctx);
	}
}
export class AnExtensionContext extends ExtensionContext {
	public _ExtensionName!: Token;
	public _extensionNames: Token[] = [];
	constructor(parser: stellaParser, ctx: ExtensionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXTEND(): TerminalNode {
		return this.getToken(stellaParser.EXTEND, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(stellaParser.WITH, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(stellaParser.SEMICOLON, 0);
	}
	public ExtensionName_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.ExtensionName);
	}
	public ExtensionName(i: number): TerminalNode {
		return this.getToken(stellaParser.ExtensionName, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterAnExtension) {
	 		listener.enterAnExtension(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitAnExtension) {
	 		listener.exitAnExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitAnExtension) {
			return visitor.visitAnExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_decl;
	}
	public copyFrom(ctx: DeclContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclTypeAliasContext extends DeclContext {
	public _name!: Token;
	public _atype!: StellatypeContext;
	constructor(parser: stellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE(): TerminalNode {
		return this.getToken(stellaParser.TYPE, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(stellaParser.EQUALS, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(stellaParser.SEMICOLON, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDeclTypeAlias) {
	 		listener.enterDeclTypeAlias(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDeclTypeAlias) {
	 		listener.exitDeclTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDeclTypeAlias) {
			return visitor.visitDeclTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclFunContext extends DeclContext {
	public _annotation!: AnnotationContext;
	public _annotations: AnnotationContext[] = [];
	public _name!: Token;
	public _paramDecl!: ParamDeclContext;
	public _paramDecls: ParamDeclContext[] = [];
	public _returnType!: StellatypeContext;
	public _throwType!: StellatypeContext;
	public _decl!: DeclContext;
	public _localDecls: DeclContext[] = [];
	public _returnExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FN(): TerminalNode {
		return this.getToken(stellaParser.FN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(stellaParser.RETURN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(stellaParser.SEMICOLON, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(stellaParser.ARROW, 0);
	}
	public THROWS(): TerminalNode {
		return this.getToken(stellaParser.THROWS, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public paramDecl_list(): ParamDeclContext[] {
		return this.getTypedRuleContexts(ParamDeclContext) as ParamDeclContext[];
	}
	public paramDecl(i: number): ParamDeclContext {
		return this.getTypedRuleContext(ParamDeclContext, i) as ParamDeclContext;
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public decl_list(): DeclContext[] {
		return this.getTypedRuleContexts(DeclContext) as DeclContext[];
	}
	public decl(i: number): DeclContext {
		return this.getTypedRuleContext(DeclContext, i) as DeclContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDeclFun) {
	 		listener.enterDeclFun(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDeclFun) {
	 		listener.exitDeclFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDeclFun) {
			return visitor.visitDeclFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_annotation;
	}
	public copyFrom(ctx: AnnotationContext): void {
		super.copyFrom(ctx);
	}
}
export class InlineAnnotationContext extends AnnotationContext {
	constructor(parser: stellaParser, ctx: AnnotationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INLINE(): TerminalNode {
		return this.getToken(stellaParser.INLINE, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterInlineAnnotation) {
	 		listener.enterInlineAnnotation(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitInlineAnnotation) {
	 		listener.exitInlineAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitInlineAnnotation) {
			return visitor.visitInlineAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _paramType!: StellatypeContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(stellaParser.COLON, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_paramDecl;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterParamDecl) {
	 		listener.enterParamDecl(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitParamDecl) {
	 		listener.exitParamDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitParamDecl) {
			return visitor.visitParamDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IsEmptyContext extends ExprContext {
	public _list!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LIST_ISEMPTY(): TerminalNode {
		return this.getToken(stellaParser.LIST_ISEMPTY, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterIsEmpty) {
	 		listener.enterIsEmpty(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitIsEmpty) {
	 		listener.exitIsEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitIsEmpty) {
			return visitor.visitIsEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FoldContext extends ExprContext {
	public _type_!: StellatypeContext;
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FOLD(): TerminalNode {
		return this.getToken(stellaParser.FOLD, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(stellaParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(stellaParser.RBRACKET, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterFold) {
	 		listener.enterFold(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitFold) {
	 		listener.exitFold(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitFold) {
			return visitor.visitFold(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(stellaParser.PLUS, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterAdd) {
	 		listener.enterAdd(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitAdd) {
	 		listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsZeroContext extends ExprContext {
	public _n!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAT_ISZERO(): TerminalNode {
		return this.getToken(stellaParser.NAT_ISZERO, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterIsZero) {
	 		listener.enterIsZero(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitIsZero) {
	 		listener.exitIsZero(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitIsZero) {
			return visitor.visitIsZero(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanOrEqualContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LEQ(): TerminalNode {
		return this.getToken(stellaParser.LEQ, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLessThanOrEqual) {
	 		listener.enterLessThanOrEqual(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLessThanOrEqual) {
	 		listener.exitLessThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLessThanOrEqual) {
			return visitor.visitLessThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuccContext extends ExprContext {
	public _n!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SUCC(): TerminalNode {
		return this.getToken(stellaParser.SUCC, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterSucc) {
	 		listener.enterSucc(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitSucc) {
	 		listener.exitSucc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitSucc) {
			return visitor.visitSucc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarContext extends ExprContext {
	public _name!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterVar) {
	 		listener.enterVar(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitVar) {
	 		listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterThanOrEqualContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GEQ(): TerminalNode {
		return this.getToken(stellaParser.GEQ, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterGreaterThanOrEqual) {
	 		listener.enterGreaterThanOrEqual(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitGreaterThanOrEqual) {
	 		listener.exitGreaterThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitGreaterThanOrEqual) {
			return visitor.visitGreaterThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LE(): TerminalNode {
		return this.getToken(stellaParser.LE, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLessThan) {
	 		listener.enterLessThan(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLessThan) {
	 		listener.exitLessThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLessThan) {
			return visitor.visitLessThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicNotContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(stellaParser.NOT, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLogicNot) {
	 		listener.enterLogicNot(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLogicNot) {
	 		listener.exitLogicNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLogicNot) {
			return visitor.visitLogicNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotRecordContext extends ExprContext {
	public _expr_!: ExprContext;
	public _label!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(stellaParser.DOT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDotRecord) {
	 		listener.enterDotRecord(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDotRecord) {
	 		listener.exitDotRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDotRecord) {
			return visitor.visitDotRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisedExprContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterParenthesisedExpr) {
	 		listener.enterParenthesisedExpr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitParenthesisedExpr) {
	 		listener.exitParenthesisedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitParenthesisedExpr) {
			return visitor.visitParenthesisedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterThanContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GE(): TerminalNode {
		return this.getToken(stellaParser.GE, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterGreaterThan) {
	 		listener.enterGreaterThan(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitGreaterThan) {
	 		listener.exitGreaterThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitGreaterThan) {
			return visitor.visitGreaterThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EQ(): TerminalNode {
		return this.getToken(stellaParser.EQ, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterEqual) {
	 		listener.enterEqual(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitEqual) {
	 		listener.exitEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitEqual) {
			return visitor.visitEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TailContext extends ExprContext {
	public _list!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LIST_TAIL(): TerminalNode {
		return this.getToken(stellaParser.LIST_TAIL, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTail) {
	 		listener.enterTail(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTail) {
	 		listener.exitTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTail) {
			return visitor.visitTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public TIMES(): TerminalNode {
		return this.getToken(stellaParser.TIMES, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterMultiply) {
	 		listener.enterMultiply(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitMultiply) {
	 		listener.exitMultiply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitMultiply) {
			return visitor.visitMultiply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecordContext extends ExprContext {
	public _binding!: BindingContext;
	public _bindings: BindingContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RECORD(): TerminalNode {
		return this.getToken(stellaParser.RECORD, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public binding_list(): BindingContext[] {
		return this.getTypedRuleContexts(BindingContext) as BindingContext[];
	}
	public binding(i: number): BindingContext {
		return this.getTypedRuleContext(BindingContext, i) as BindingContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterRecord) {
	 		listener.enterRecord(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitRecord) {
	 		listener.exitRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitRecord) {
			return visitor.visitRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListContext extends ExprContext {
	public _expr!: ExprContext;
	public _exprs: ExprContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(stellaParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(stellaParser.RBRACKET, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(stellaParser.COMMA, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterList) {
	 		listener.enterList(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitList) {
	 		listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicAndContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public AND(): TerminalNode {
		return this.getToken(stellaParser.AND, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLogicAnd) {
	 		listener.enterLogicAnd(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLogicAnd) {
	 		listener.exitLogicAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLogicAnd) {
			return visitor.visitLogicAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicOrContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public OR(): TerminalNode {
		return this.getToken(stellaParser.OR, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLogicOr) {
	 		listener.enterLogicOr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLogicOr) {
	 		listener.exitLogicOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLogicOr) {
			return visitor.visitLogicOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HeadContext extends ExprContext {
	public _list!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LIST_HEAD(): TerminalNode {
		return this.getToken(stellaParser.LIST_HEAD, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterHead) {
	 		listener.enterHead(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitHead) {
	 		listener.exitHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitHead) {
			return visitor.visitHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotEqualContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NEQ(): TerminalNode {
		return this.getToken(stellaParser.NEQ, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterNotEqual) {
	 		listener.enterNotEqual(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitNotEqual) {
	 		listener.exitNotEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitNotEqual) {
			return visitor.visitNotEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredContext extends ExprContext {
	public _n!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAT_PRED(): TerminalNode {
		return this.getToken(stellaParser.NAT_PRED, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPred) {
	 		listener.enterPred(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPred) {
	 		listener.exitPred(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPred) {
			return visitor.visitPred(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchContext extends ExprContext {
	public _match_case!: Match_caseContext;
	public _cases: Match_caseContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MATCH(): TerminalNode {
		return this.getToken(stellaParser.MATCH, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public match_case_list(): Match_caseContext[] {
		return this.getTypedRuleContexts(Match_caseContext) as Match_caseContext[];
	}
	public match_case(i: number): Match_caseContext {
		return this.getTypedRuleContext(Match_caseContext, i) as Match_caseContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(stellaParser.SEMICOLON, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterMatch) {
	 		listener.enterMatch(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitMatch) {
	 		listener.exitMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitMatch) {
			return visitor.visitMatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeAscContext extends ExprContext {
	public _expr_!: ExprContext;
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AS(): TerminalNode {
		return this.getToken(stellaParser.AS, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeAsc) {
	 		listener.enterTypeAsc(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeAsc) {
	 		listener.exitTypeAsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeAsc) {
			return visitor.visitTypeAsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NatRecContext extends ExprContext {
	public _n!: ExprContext;
	public _initial!: ExprContext;
	public _step!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAT_REC(): TerminalNode {
		return this.getToken(stellaParser.NAT_REC, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterNatRec) {
	 		listener.enterNatRec(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitNatRec) {
	 		listener.exitNatRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitNatRec) {
			return visitor.visitNatRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstFalseContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FALSE(): TerminalNode {
		return this.getToken(stellaParser.FALSE, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstFalse) {
	 		listener.enterConstFalse(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstFalse) {
	 		listener.exitConstFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstFalse) {
			return visitor.visitConstFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbstractionContext extends ExprContext {
	public _paramDecl!: ParamDeclContext;
	public _paramDecls: ParamDeclContext[] = [];
	public _returnExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FN(): TerminalNode {
		return this.getToken(stellaParser.FN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(stellaParser.RETURN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(stellaParser.SEMICOLON, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public paramDecl_list(): ParamDeclContext[] {
		return this.getTypedRuleContexts(ParamDeclContext) as ParamDeclContext[];
	}
	public paramDecl(i: number): ParamDeclContext {
		return this.getTypedRuleContext(ParamDeclContext, i) as ParamDeclContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterAbstraction) {
	 		listener.enterAbstraction(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitAbstraction) {
	 		listener.exitAbstraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitAbstraction) {
			return visitor.visitAbstraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstIntContext extends ExprContext {
	public _n!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(stellaParser.INTEGER, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstInt) {
	 		listener.enterConstInt(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstInt) {
	 		listener.exitConstInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstInt) {
			return visitor.visitConstInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnfoldContext extends ExprContext {
	public _type_!: StellatypeContext;
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNFOLD(): TerminalNode {
		return this.getToken(stellaParser.UNFOLD, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(stellaParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(stellaParser.RBRACKET, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterUnfold) {
	 		listener.enterUnfold(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitUnfold) {
	 		listener.exitUnfold(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitUnfold) {
			return visitor.visitUnfold(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariantContext extends ExprContext {
	public _label!: Token;
	public _rhs!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LANGLEBAR(): TerminalNode {
		return this.getToken(stellaParser.LANGLEBAR, 0);
	}
	public RANGLEBAR(): TerminalNode {
		return this.getToken(stellaParser.RANGLEBAR, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(stellaParser.EQUALS, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterVariant) {
	 		listener.enterVariant(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitVariant) {
	 		listener.exitVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitVariant) {
			return visitor.visitVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstTrueContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUE(): TerminalNode {
		return this.getToken(stellaParser.TRUE, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstTrue) {
	 		listener.enterConstTrue(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstTrue) {
	 		listener.exitConstTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstTrue) {
			return visitor.visitConstTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotTupleContext extends ExprContext {
	public _expr_!: ExprContext;
	public _index!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(stellaParser.DOT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(stellaParser.INTEGER, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDotTuple) {
	 		listener.enterDotTuple(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDotTuple) {
	 		listener.exitDotTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDotTuple) {
			return visitor.visitDotTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FixContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FIX(): TerminalNode {
		return this.getToken(stellaParser.FIX, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterFix) {
	 		listener.enterFix(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitFix) {
	 		listener.exitFix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitFix) {
			return visitor.visitFix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetContext extends ExprContext {
	public _var_!: Token;
	public _value!: ExprContext;
	public _body!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LET(): TerminalNode {
		return this.getToken(stellaParser.LET, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(stellaParser.EQUALS, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(stellaParser.IN, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLet) {
	 		listener.enterLet(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLet) {
	 		listener.exitLet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLet) {
			return visitor.visitLet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfContext extends ExprContext {
	public _condition!: ExprContext;
	public _thenExpr!: ExprContext;
	public _elseExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(stellaParser.IF, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(stellaParser.THEN, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(stellaParser.ELSE, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterIf) {
	 		listener.enterIf(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitIf) {
	 		listener.exitIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitIf) {
			return visitor.visitIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplicationContext extends ExprContext {
	public _fun!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterApplication) {
	 		listener.enterApplication(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitApplication) {
	 		listener.exitApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitApplication) {
			return visitor.visitApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleContext extends ExprContext {
	public _expr!: ExprContext;
	public _exprs: ExprContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTuple) {
	 		listener.enterTuple(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTuple) {
	 		listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConsListContext extends ExprContext {
	public _head!: ExprContext;
	public _tail!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONS(): TerminalNode {
		return this.getToken(stellaParser.CONS, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(stellaParser.COMMA, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConsList) {
	 		listener.enterConsList(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConsList) {
	 		listener.exitConsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConsList) {
			return visitor.visitConsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindingContext extends ParserRuleContext {
	public _name!: Token;
	public _rhs!: ExprContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(stellaParser.EQUALS, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_binding;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterBinding) {
	 		listener.enterBinding(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitBinding) {
	 		listener.exitBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitBinding) {
			return visitor.visitBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Match_caseContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public DOUBLEARROW(): TerminalNode {
		return this.getToken(stellaParser.DOUBLEARROW, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_match_case;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterMatch_case) {
	 		listener.enterMatch_case(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitMatch_case) {
	 		listener.exitMatch_case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitMatch_case) {
			return visitor.visitMatch_case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_pattern;
	}
	public copyFrom(ctx: PatternContext): void {
		super.copyFrom(ctx);
	}
}
export class PatternIntContext extends PatternContext {
	public _n!: Token;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(stellaParser.INTEGER, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternInt) {
	 		listener.enterPatternInt(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternInt) {
	 		listener.exitPatternInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternInt) {
			return visitor.visitPatternInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternConsContext extends PatternContext {
	public _head!: PatternContext;
	public _tail!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONS(): TerminalNode {
		return this.getToken(stellaParser.CONS, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(stellaParser.COMMA, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternCons) {
	 		listener.enterPatternCons(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternCons) {
	 		listener.exitPatternCons(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternCons) {
			return visitor.visitPatternCons(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternTrueContext extends PatternContext {
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUE(): TerminalNode {
		return this.getToken(stellaParser.TRUE, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternTrue) {
	 		listener.enterPatternTrue(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternTrue) {
	 		listener.exitPatternTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternTrue) {
			return visitor.visitPatternTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternTupleContext extends PatternContext {
	public _pattern!: PatternContext;
	public _patterns: PatternContext[] = [];
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternTuple) {
	 		listener.enterPatternTuple(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternTuple) {
	 		listener.exitPatternTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternTuple) {
			return visitor.visitPatternTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternListContext extends PatternContext {
	public _pattern!: PatternContext;
	public _patterns: PatternContext[] = [];
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(stellaParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(stellaParser.RBRACKET, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternList) {
	 		listener.enterPatternList(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternList) {
	 		listener.exitPatternList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternList) {
			return visitor.visitPatternList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternVarContext extends PatternContext {
	public _name!: Token;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternVar) {
	 		listener.enterPatternVar(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternVar) {
	 		listener.exitPatternVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternVar) {
			return visitor.visitPatternVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternRecordContext extends PatternContext {
	public _labelledPattern!: LabelledPatternContext;
	public _patterns: LabelledPatternContext[] = [];
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RECORD(): TerminalNode {
		return this.getToken(stellaParser.RECORD, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public labelledPattern_list(): LabelledPatternContext[] {
		return this.getTypedRuleContexts(LabelledPatternContext) as LabelledPatternContext[];
	}
	public labelledPattern(i: number): LabelledPatternContext {
		return this.getTypedRuleContext(LabelledPatternContext, i) as LabelledPatternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternRecord) {
	 		listener.enterPatternRecord(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternRecord) {
	 		listener.exitPatternRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternRecord) {
			return visitor.visitPatternRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisedPatternContext extends PatternContext {
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterParenthesisedPattern) {
	 		listener.enterParenthesisedPattern(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitParenthesisedPattern) {
	 		listener.exitParenthesisedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitParenthesisedPattern) {
			return visitor.visitParenthesisedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternVariantContext extends PatternContext {
	public _label!: Token;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LANGLEBAR(): TerminalNode {
		return this.getToken(stellaParser.LANGLEBAR, 0);
	}
	public RANGLEBAR(): TerminalNode {
		return this.getToken(stellaParser.RANGLEBAR, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(stellaParser.EQUALS, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternVariant) {
	 		listener.enterPatternVariant(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternVariant) {
	 		listener.exitPatternVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternVariant) {
			return visitor.visitPatternVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternSuccContext extends PatternContext {
	public _n!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SUCC(): TerminalNode {
		return this.getToken(stellaParser.SUCC, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternSucc) {
	 		listener.enterPatternSucc(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternSucc) {
	 		listener.exitPatternSucc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternSucc) {
			return visitor.visitPatternSucc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternFalseContext extends PatternContext {
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FALSE(): TerminalNode {
		return this.getToken(stellaParser.FALSE, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternFalse) {
	 		listener.enterPatternFalse(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternFalse) {
	 		listener.exitPatternFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternFalse) {
			return visitor.visitPatternFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelledPatternContext extends ParserRuleContext {
	public _label!: Token;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(stellaParser.EQUALS, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_labelledPattern;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLabelledPattern) {
	 		listener.enterLabelledPattern(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLabelledPattern) {
	 		listener.exitLabelledPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLabelledPattern) {
			return visitor.visitLabelledPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StellatypeContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_stellatype;
	}
	public copyFrom(ctx: StellatypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeTupleContext extends StellatypeContext {
	public _stellatype!: StellatypeContext;
	public _types: StellatypeContext[] = [];
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(stellaParser.COMMA, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeTuple) {
	 		listener.enterTypeTuple(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeTuple) {
	 		listener.exitTypeTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeTuple) {
			return visitor.visitTypeTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeVarContext extends StellatypeContext {
	public _name!: Token;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeVar) {
	 		listener.enterTypeVar(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeVar) {
	 		listener.exitTypeVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeVar) {
			return visitor.visitTypeVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeVariantContext extends StellatypeContext {
	public _variantFieldType!: VariantFieldTypeContext;
	public _fieldTypes: VariantFieldTypeContext[] = [];
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VARIANT(): TerminalNode {
		return this.getToken(stellaParser.VARIANT, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public variantFieldType_list(): VariantFieldTypeContext[] {
		return this.getTypedRuleContexts(VariantFieldTypeContext) as VariantFieldTypeContext[];
	}
	public variantFieldType(i: number): VariantFieldTypeContext {
		return this.getTypedRuleContext(VariantFieldTypeContext, i) as VariantFieldTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeVariant) {
	 		listener.enterTypeVariant(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeVariant) {
	 		listener.exitTypeVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeVariant) {
			return visitor.visitTypeVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeUnitContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE_UNIT(): TerminalNode {
		return this.getToken(stellaParser.TYPE_UNIT, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeUnit) {
	 		listener.enterTypeUnit(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeUnit) {
	 		listener.exitTypeUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeUnit) {
			return visitor.visitTypeUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeBoolContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE_BOOL(): TerminalNode {
		return this.getToken(stellaParser.TYPE_BOOL, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeBool) {
	 		listener.enterTypeBool(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeBool) {
	 		listener.exitTypeBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeBool) {
			return visitor.visitTypeBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeNatContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE_NAT(): TerminalNode {
		return this.getToken(stellaParser.TYPE_NAT, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeNat) {
	 		listener.enterTypeNat(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeNat) {
	 		listener.exitTypeNat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeNat) {
			return visitor.visitTypeNat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRecContext extends StellatypeContext {
	public _var_!: Token;
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MU(): TerminalNode {
		return this.getToken(stellaParser.MU, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(stellaParser.DOT, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeRec) {
	 		listener.enterTypeRec(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeRec) {
	 		listener.exitTypeRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeRec) {
			return visitor.visitTypeRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeParensContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeParens) {
	 		listener.enterTypeParens(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeParens) {
	 		listener.exitTypeParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeParens) {
			return visitor.visitTypeParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFunContext extends StellatypeContext {
	public _stellatype!: StellatypeContext;
	public _paramTypes: StellatypeContext[] = [];
	public _returnType!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FN(): TerminalNode {
		return this.getToken(stellaParser.FN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(stellaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(stellaParser.RPAREN, 0);
	}
	public ARROW(): TerminalNode {
		return this.getToken(stellaParser.ARROW, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeFun) {
	 		listener.enterTypeFun(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeFun) {
	 		listener.exitTypeFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeFun) {
			return visitor.visitTypeFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRecordContext extends StellatypeContext {
	public _recordFieldType!: RecordFieldTypeContext;
	public _fieldTypes: RecordFieldTypeContext[] = [];
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RECORD(): TerminalNode {
		return this.getToken(stellaParser.RECORD, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(stellaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(stellaParser.RBRACE, 0);
	}
	public recordFieldType_list(): RecordFieldTypeContext[] {
		return this.getTypedRuleContexts(RecordFieldTypeContext) as RecordFieldTypeContext[];
	}
	public recordFieldType(i: number): RecordFieldTypeContext {
		return this.getTypedRuleContext(RecordFieldTypeContext, i) as RecordFieldTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeRecord) {
	 		listener.enterTypeRecord(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeRecord) {
	 		listener.exitTypeRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeRecord) {
			return visitor.visitTypeRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeListContext extends StellatypeContext {
	public _stellatype!: StellatypeContext;
	public _types: StellatypeContext[] = [];
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(stellaParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(stellaParser.RBRACKET, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(stellaParser.COMMA, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeList) {
	 		listener.enterTypeList(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeList) {
	 		listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeSumContext extends StellatypeContext {
	public _left!: StellatypeContext;
	public _right!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(stellaParser.PLUS, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeSum) {
	 		listener.enterTypeSum(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeSum) {
	 		listener.exitTypeSum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeSum) {
			return visitor.visitTypeSum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordFieldTypeContext extends ParserRuleContext {
	public _label!: Token;
	public _type_!: StellatypeContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(stellaParser.COLON, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_recordFieldType;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterRecordFieldType) {
	 		listener.enterRecordFieldType(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitRecordFieldType) {
	 		listener.exitRecordFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitRecordFieldType) {
			return visitor.visitRecordFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariantFieldTypeContext extends ParserRuleContext {
	public _label!: Token;
	public _type_!: StellatypeContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(stellaParser.COLON, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_variantFieldType;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterVariantFieldType) {
	 		listener.enterVariantFieldType(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitVariantFieldType) {
	 		listener.exitVariantFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitVariantFieldType) {
			return visitor.visitVariantFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
