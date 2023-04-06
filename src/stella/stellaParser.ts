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
	public static readonly Surrogate_id_SYMB_0 = 1;
	public static readonly Surrogate_id_SYMB_1 = 2;
	public static readonly Surrogate_id_SYMB_2 = 3;
	public static readonly Surrogate_id_SYMB_3 = 4;
	public static readonly Surrogate_id_SYMB_4 = 5;
	public static readonly Surrogate_id_SYMB_5 = 6;
	public static readonly Surrogate_id_SYMB_6 = 7;
	public static readonly Surrogate_id_SYMB_7 = 8;
	public static readonly Surrogate_id_SYMB_8 = 9;
	public static readonly Surrogate_id_SYMB_9 = 10;
	public static readonly Surrogate_id_SYMB_10 = 11;
	public static readonly Surrogate_id_SYMB_11 = 12;
	public static readonly Surrogate_id_SYMB_12 = 13;
	public static readonly Surrogate_id_SYMB_13 = 14;
	public static readonly Surrogate_id_SYMB_14 = 15;
	public static readonly Surrogate_id_SYMB_15 = 16;
	public static readonly Surrogate_id_SYMB_16 = 17;
	public static readonly Surrogate_id_SYMB_17 = 18;
	public static readonly Surrogate_id_SYMB_18 = 19;
	public static readonly Surrogate_id_SYMB_19 = 20;
	public static readonly Surrogate_id_SYMB_20 = 21;
	public static readonly Surrogate_id_SYMB_21 = 22;
	public static readonly Surrogate_id_SYMB_22 = 23;
	public static readonly Surrogate_id_SYMB_23 = 24;
	public static readonly Surrogate_id_SYMB_24 = 25;
	public static readonly Surrogate_id_SYMB_25 = 26;
	public static readonly Surrogate_id_SYMB_26 = 27;
	public static readonly Surrogate_id_SYMB_27 = 28;
	public static readonly Surrogate_id_SYMB_28 = 29;
	public static readonly Surrogate_id_SYMB_29 = 30;
	public static readonly Surrogate_id_SYMB_30 = 31;
	public static readonly Surrogate_id_SYMB_31 = 32;
	public static readonly Surrogate_id_SYMB_32 = 33;
	public static readonly Surrogate_id_SYMB_33 = 34;
	public static readonly Surrogate_id_SYMB_34 = 35;
	public static readonly Surrogate_id_SYMB_35 = 36;
	public static readonly Surrogate_id_SYMB_36 = 37;
	public static readonly Surrogate_id_SYMB_37 = 38;
	public static readonly Surrogate_id_SYMB_38 = 39;
	public static readonly Surrogate_id_SYMB_39 = 40;
	public static readonly Surrogate_id_SYMB_40 = 41;
	public static readonly Surrogate_id_SYMB_41 = 42;
	public static readonly Surrogate_id_SYMB_42 = 43;
	public static readonly Surrogate_id_SYMB_43 = 44;
	public static readonly Surrogate_id_SYMB_44 = 45;
	public static readonly Surrogate_id_SYMB_45 = 46;
	public static readonly Surrogate_id_SYMB_46 = 47;
	public static readonly Surrogate_id_SYMB_47 = 48;
	public static readonly Surrogate_id_SYMB_48 = 49;
	public static readonly Surrogate_id_SYMB_49 = 50;
	public static readonly Surrogate_id_SYMB_50 = 51;
	public static readonly Surrogate_id_SYMB_51 = 52;
	public static readonly Surrogate_id_SYMB_52 = 53;
	public static readonly Surrogate_id_SYMB_53 = 54;
	public static readonly Surrogate_id_SYMB_54 = 55;
	public static readonly Surrogate_id_SYMB_55 = 56;
	public static readonly Surrogate_id_SYMB_56 = 57;
	public static readonly Surrogate_id_SYMB_57 = 58;
	public static readonly Surrogate_id_SYMB_58 = 59;
	public static readonly Surrogate_id_SYMB_59 = 60;
	public static readonly Surrogate_id_SYMB_60 = 61;
	public static readonly Surrogate_id_SYMB_61 = 62;
	public static readonly Surrogate_id_SYMB_62 = 63;
	public static readonly Surrogate_id_SYMB_63 = 64;
	public static readonly Surrogate_id_SYMB_64 = 65;
	public static readonly Surrogate_id_SYMB_65 = 66;
	public static readonly COMMENT_antlr_builtin = 67;
	public static readonly MULTICOMMENT_antlr_builtin = 68;
	public static readonly StellaIdent = 69;
	public static readonly ExtensionName = 70;
	public static readonly INTEGER = 71;
	public static readonly WS = 72;
	public static readonly ErrorToken = 73;
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
	public static readonly RULE_patternBinding = 10;
	public static readonly RULE_binding = 11;
	public static readonly RULE_matchCase = 12;
	public static readonly RULE_pattern = 13;
	public static readonly RULE_labelledPattern = 14;
	public static readonly RULE_stellatype = 15;
	public static readonly RULE_recordFieldType = 16;
	public static readonly RULE_variantFieldType = 17;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "';'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'='", 
                                                            "':'", "'->'", 
                                                            "'=>'", "'|'", 
                                                            "'<|'", "'|>'", 
                                                            "'['", "']'", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'=='", "'!='", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'.'", "'List::head'", 
                                                            "'List::isempty'", 
                                                            "'List::tail'", 
                                                            "'Nat::pred'", 
                                                            "'Nat::iszero'", 
                                                            "'Nat::rec'", 
                                                            "'Bool'", "'Nat'", 
                                                            "'Unit'", "'and'", 
                                                            "'as'", "'cons'", 
                                                            "'core'", "'else'", 
                                                            "'extend'", 
                                                            "'false'", "'fix'", 
                                                            "'fn'", "'fold'", 
                                                            "'if'", "'in'", 
                                                            "'inl'", "'inline'", 
                                                            "'inr'", "'language'", 
                                                            "'let'", "'letrec'", 
                                                            "'match'", "'not'", 
                                                            "'or'", "'return'", 
                                                            "'succ'", "'then'", 
                                                            "'throws'", 
                                                            "'true'", "'type'", 
                                                            "'unfold'", 
                                                            "'unit'", "'with'", 
                                                            "'\\u00C2\\u00B5'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Surrogate_id_SYMB_0", 
                                                             "Surrogate_id_SYMB_1", 
                                                             "Surrogate_id_SYMB_2", 
                                                             "Surrogate_id_SYMB_3", 
                                                             "Surrogate_id_SYMB_4", 
                                                             "Surrogate_id_SYMB_5", 
                                                             "Surrogate_id_SYMB_6", 
                                                             "Surrogate_id_SYMB_7", 
                                                             "Surrogate_id_SYMB_8", 
                                                             "Surrogate_id_SYMB_9", 
                                                             "Surrogate_id_SYMB_10", 
                                                             "Surrogate_id_SYMB_11", 
                                                             "Surrogate_id_SYMB_12", 
                                                             "Surrogate_id_SYMB_13", 
                                                             "Surrogate_id_SYMB_14", 
                                                             "Surrogate_id_SYMB_15", 
                                                             "Surrogate_id_SYMB_16", 
                                                             "Surrogate_id_SYMB_17", 
                                                             "Surrogate_id_SYMB_18", 
                                                             "Surrogate_id_SYMB_19", 
                                                             "Surrogate_id_SYMB_20", 
                                                             "Surrogate_id_SYMB_21", 
                                                             "Surrogate_id_SYMB_22", 
                                                             "Surrogate_id_SYMB_23", 
                                                             "Surrogate_id_SYMB_24", 
                                                             "Surrogate_id_SYMB_25", 
                                                             "Surrogate_id_SYMB_26", 
                                                             "Surrogate_id_SYMB_27", 
                                                             "Surrogate_id_SYMB_28", 
                                                             "Surrogate_id_SYMB_29", 
                                                             "Surrogate_id_SYMB_30", 
                                                             "Surrogate_id_SYMB_31", 
                                                             "Surrogate_id_SYMB_32", 
                                                             "Surrogate_id_SYMB_33", 
                                                             "Surrogate_id_SYMB_34", 
                                                             "Surrogate_id_SYMB_35", 
                                                             "Surrogate_id_SYMB_36", 
                                                             "Surrogate_id_SYMB_37", 
                                                             "Surrogate_id_SYMB_38", 
                                                             "Surrogate_id_SYMB_39", 
                                                             "Surrogate_id_SYMB_40", 
                                                             "Surrogate_id_SYMB_41", 
                                                             "Surrogate_id_SYMB_42", 
                                                             "Surrogate_id_SYMB_43", 
                                                             "Surrogate_id_SYMB_44", 
                                                             "Surrogate_id_SYMB_45", 
                                                             "Surrogate_id_SYMB_46", 
                                                             "Surrogate_id_SYMB_47", 
                                                             "Surrogate_id_SYMB_48", 
                                                             "Surrogate_id_SYMB_49", 
                                                             "Surrogate_id_SYMB_50", 
                                                             "Surrogate_id_SYMB_51", 
                                                             "Surrogate_id_SYMB_52", 
                                                             "Surrogate_id_SYMB_53", 
                                                             "Surrogate_id_SYMB_54", 
                                                             "Surrogate_id_SYMB_55", 
                                                             "Surrogate_id_SYMB_56", 
                                                             "Surrogate_id_SYMB_57", 
                                                             "Surrogate_id_SYMB_58", 
                                                             "Surrogate_id_SYMB_59", 
                                                             "Surrogate_id_SYMB_60", 
                                                             "Surrogate_id_SYMB_61", 
                                                             "Surrogate_id_SYMB_62", 
                                                             "Surrogate_id_SYMB_63", 
                                                             "Surrogate_id_SYMB_64", 
                                                             "Surrogate_id_SYMB_65", 
                                                             "COMMENT_antlr_builtin", 
                                                             "MULTICOMMENT_antlr_builtin", 
                                                             "StellaIdent", 
                                                             "ExtensionName", 
                                                             "INTEGER", 
                                                             "WS", "ErrorToken" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start_Program", "start_Expr", "start_Type", "program", "languageDecl", 
		"extension", "decl", "annotation", "paramDecl", "expr", "patternBinding", 
		"binding", "matchCase", "pattern", "labelledPattern", "stellatype", "recordFieldType", 
		"variantFieldType",
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
			this.state = 36;
			localctx._x = this.program();
			this.state = 37;
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
			this.state = 39;
			localctx._x = this.expr(0);
			this.state = 40;
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
			this.state = 42;
			localctx._x = this.stellatype(0);
			this.state = 43;
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
			this.state = 45;
			this.languageDecl();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===41) {
				{
				{
				this.state = 46;
				localctx._extension = this.extension();
				localctx._extensions.push(localctx._extension);
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262177) !== 0)) {
				{
				{
				this.state = 52;
				localctx._decl = this.decl();
				localctx._decls.push(localctx._decl);
				}
				}
				this.state = 57;
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
			this.state = 58;
			this.match(stellaParser.Surrogate_id_SYMB_50);
			this.state = 59;
			this.match(stellaParser.Surrogate_id_SYMB_38);
			this.state = 60;
			this.match(stellaParser.Surrogate_id_SYMB_1);
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
			this.state = 62;
			this.match(stellaParser.Surrogate_id_SYMB_40);
			this.state = 63;
			this.match(stellaParser.Surrogate_id_SYMB_64);
			this.state = 64;
			(localctx as AnExtensionContext)._ExtensionName = this.match(stellaParser.ExtensionName);
			(localctx as AnExtensionContext)._extensionNames.push((localctx as AnExtensionContext)._ExtensionName);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 65;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 66;
				(localctx as AnExtensionContext)._ExtensionName = this.match(stellaParser.ExtensionName);
				(localctx as AnExtensionContext)._extensionNames.push((localctx as AnExtensionContext)._ExtensionName);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this.match(stellaParser.Surrogate_id_SYMB_1);
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
			this.state = 124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
			case 49:
				localctx = new DeclFunContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===49) {
					{
					{
					this.state = 74;
					(localctx as DeclFunContext)._annotation = this.annotation();
					(localctx as DeclFunContext)._annotations.push((localctx as DeclFunContext)._annotation);
					}
					}
					this.state = 79;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 80;
				this.match(stellaParser.Surrogate_id_SYMB_43);
				this.state = 81;
				(localctx as DeclFunContext)._name = this.match(stellaParser.StellaIdent);
				this.state = 82;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 83;
					(localctx as DeclFunContext)._paramDecl = this.paramDecl();
					(localctx as DeclFunContext)._paramDecls.push((localctx as DeclFunContext)._paramDecl);
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 84;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 85;
						(localctx as DeclFunContext)._paramDecl = this.paramDecl();
						(localctx as DeclFunContext)._paramDecls.push((localctx as DeclFunContext)._paramDecl);
						}
						}
						this.state = 90;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 93;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 94;
					this.match(stellaParser.Surrogate_id_SYMB_8);
					this.state = 95;
					(localctx as DeclFunContext)._returnType = this.stellatype(0);
					}
				}

				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 98;
					this.match(stellaParser.Surrogate_id_SYMB_59);
					this.state = 99;
					(localctx as DeclFunContext)._stellatype = this.stellatype(0);
					(localctx as DeclFunContext)._throwTypes.push((localctx as DeclFunContext)._stellatype);
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 100;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 101;
						(localctx as DeclFunContext)._stellatype = this.stellatype(0);
						(localctx as DeclFunContext)._throwTypes.push((localctx as DeclFunContext)._stellatype);
						}
						}
						this.state = 106;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 109;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262177) !== 0)) {
					{
					{
					this.state = 110;
					(localctx as DeclFunContext)._decl = this.decl();
					(localctx as DeclFunContext)._localDecls.push((localctx as DeclFunContext)._decl);
					}
					}
					this.state = 115;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 116;
				this.match(stellaParser.Surrogate_id_SYMB_56);
				this.state = 117;
				(localctx as DeclFunContext)._returnExpr = this.expr(0);
				this.state = 118;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 62:
				localctx = new DeclTypeAliasContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 120;
				this.match(stellaParser.Surrogate_id_SYMB_61);
				this.state = 121;
				(localctx as DeclTypeAliasContext)._name = this.match(stellaParser.StellaIdent);
				this.state = 122;
				this.match(stellaParser.Surrogate_id_SYMB_6);
				this.state = 123;
				(localctx as DeclTypeAliasContext)._atype = this.stellatype(0);
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
			this.state = 126;
			this.match(stellaParser.Surrogate_id_SYMB_48);
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
			this.state = 128;
			localctx._name = this.match(stellaParser.StellaIdent);
			this.state = 129;
			this.match(stellaParser.Surrogate_id_SYMB_7);
			this.state = 130;
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
			this.state = 323;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				localctx = new ConstTrueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 133;
				this.match(stellaParser.Surrogate_id_SYMB_60);
				}
				break;
			case 2:
				{
				localctx = new ConstFalseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 134;
				this.match(stellaParser.Surrogate_id_SYMB_41);
				}
				break;
			case 3:
				{
				localctx = new ConstUnitContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 135;
				this.match(stellaParser.Surrogate_id_SYMB_63);
				}
				break;
			case 4:
				{
				localctx = new ConstIntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 136;
				(localctx as ConstIntContext)._n = this.match(stellaParser.INTEGER);
				}
				break;
			case 5:
				{
				localctx = new VarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 137;
				(localctx as VarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 6:
				{
				localctx = new InlContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 138;
				this.match(stellaParser.Surrogate_id_SYMB_47);
				this.state = 139;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 140;
				(localctx as InlContext)._expr_ = this.expr(0);
				this.state = 141;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 7:
				{
				localctx = new InrContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 143;
				this.match(stellaParser.Surrogate_id_SYMB_49);
				this.state = 144;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 145;
				(localctx as InrContext)._expr_ = this.expr(0);
				this.state = 146;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 8:
				{
				localctx = new ConsListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 148;
				this.match(stellaParser.Surrogate_id_SYMB_37);
				this.state = 149;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 150;
				(localctx as ConsListContext)._head = this.expr(0);
				this.state = 151;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 152;
				(localctx as ConsListContext)._tail = this.expr(0);
				this.state = 153;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 9:
				{
				localctx = new HeadContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 155;
				this.match(stellaParser.Surrogate_id_SYMB_26);
				this.state = 156;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 157;
				(localctx as HeadContext)._list = this.expr(0);
				this.state = 158;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 10:
				{
				localctx = new IsEmptyContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 160;
				this.match(stellaParser.Surrogate_id_SYMB_27);
				this.state = 161;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 162;
				(localctx as IsEmptyContext)._list = this.expr(0);
				this.state = 163;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 11:
				{
				localctx = new TailContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 165;
				this.match(stellaParser.Surrogate_id_SYMB_28);
				this.state = 166;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 167;
				(localctx as TailContext)._list = this.expr(0);
				this.state = 168;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 12:
				{
				localctx = new SuccContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 170;
				this.match(stellaParser.Surrogate_id_SYMB_57);
				this.state = 171;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 172;
				(localctx as SuccContext)._n = this.expr(0);
				this.state = 173;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 13:
				{
				localctx = new LogicNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 175;
				this.match(stellaParser.Surrogate_id_SYMB_54);
				this.state = 176;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 177;
				(localctx as LogicNotContext)._expr_ = this.expr(0);
				this.state = 178;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 14:
				{
				localctx = new PredContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 180;
				this.match(stellaParser.Surrogate_id_SYMB_29);
				this.state = 181;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 182;
				(localctx as PredContext)._n = this.expr(0);
				this.state = 183;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 15:
				{
				localctx = new IsZeroContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 185;
				this.match(stellaParser.Surrogate_id_SYMB_30);
				this.state = 186;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 187;
				(localctx as IsZeroContext)._n = this.expr(0);
				this.state = 188;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 16:
				{
				localctx = new FixContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 190;
				this.match(stellaParser.Surrogate_id_SYMB_42);
				this.state = 191;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 192;
				(localctx as FixContext)._expr_ = this.expr(0);
				this.state = 193;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 17:
				{
				localctx = new NatRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 195;
				this.match(stellaParser.Surrogate_id_SYMB_31);
				this.state = 196;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 197;
				(localctx as NatRecContext)._n = this.expr(0);
				this.state = 198;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 199;
				(localctx as NatRecContext)._initial = this.expr(0);
				this.state = 200;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 201;
				(localctx as NatRecContext)._step = this.expr(0);
				this.state = 202;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 18:
				{
				localctx = new FoldContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 204;
				this.match(stellaParser.Surrogate_id_SYMB_44);
				this.state = 205;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 206;
				(localctx as FoldContext)._type_ = this.stellatype(0);
				this.state = 207;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				this.state = 208;
				(localctx as FoldContext)._expr_ = this.expr(28);
				}
				break;
			case 19:
				{
				localctx = new UnfoldContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 210;
				this.match(stellaParser.Surrogate_id_SYMB_62);
				this.state = 211;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 212;
				(localctx as UnfoldContext)._type_ = this.stellatype(0);
				this.state = 213;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				this.state = 214;
				(localctx as UnfoldContext)._expr_ = this.expr(27);
				}
				break;
			case 20:
				{
				localctx = new AbstractionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 216;
				this.match(stellaParser.Surrogate_id_SYMB_43);
				this.state = 217;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 218;
					(localctx as AbstractionContext)._paramDecl = this.paramDecl();
					(localctx as AbstractionContext)._paramDecls.push((localctx as AbstractionContext)._paramDecl);
					this.state = 223;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 219;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 220;
						(localctx as AbstractionContext)._paramDecl = this.paramDecl();
						(localctx as AbstractionContext)._paramDecls.push((localctx as AbstractionContext)._paramDecl);
						}
						}
						this.state = 225;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 228;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				this.state = 229;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 230;
				this.match(stellaParser.Surrogate_id_SYMB_56);
				this.state = 231;
				(localctx as AbstractionContext)._returnExpr = this.expr(0);
				this.state = 232;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 21:
				{
				localctx = new TupleContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 234;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4160770088) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2767551553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 161) !== 0)) {
					{
					this.state = 235;
					(localctx as TupleContext)._expr = this.expr(0);
					(localctx as TupleContext)._exprs.push((localctx as TupleContext)._expr);
					this.state = 240;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 236;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 237;
						(localctx as TupleContext)._expr = this.expr(0);
						(localctx as TupleContext)._exprs.push((localctx as TupleContext)._expr);
						}
						}
						this.state = 242;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 245;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 22:
				{
				localctx = new RecordContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 246;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 247;
					(localctx as RecordContext)._binding = this.binding();
					(localctx as RecordContext)._bindings.push((localctx as RecordContext)._binding);
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 248;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 249;
						(localctx as RecordContext)._binding = this.binding();
						(localctx as RecordContext)._bindings.push((localctx as RecordContext)._binding);
						}
						}
						this.state = 254;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 257;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 23:
				{
				localctx = new VariantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 258;
				this.match(stellaParser.Surrogate_id_SYMB_11);
				this.state = 259;
				(localctx as VariantContext)._label = this.match(stellaParser.StellaIdent);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 260;
					this.match(stellaParser.Surrogate_id_SYMB_6);
					this.state = 261;
					(localctx as VariantContext)._rhs = this.expr(0);
					}
				}

				this.state = 264;
				this.match(stellaParser.Surrogate_id_SYMB_12);
				}
				break;
			case 24:
				{
				localctx = new MatchContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 265;
				this.match(stellaParser.Surrogate_id_SYMB_53);
				this.state = 266;
				this.expr(0);
				this.state = 267;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2224034833) !== 0) || _la===71) {
					{
					this.state = 268;
					(localctx as MatchContext)._matchCase = this.matchCase();
					(localctx as MatchContext)._cases.push((localctx as MatchContext)._matchCase);
					this.state = 273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===11) {
						{
						{
						this.state = 269;
						this.match(stellaParser.Surrogate_id_SYMB_10);
						this.state = 270;
						(localctx as MatchContext)._matchCase = this.matchCase();
						(localctx as MatchContext)._cases.push((localctx as MatchContext)._matchCase);
						}
						}
						this.state = 275;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 278;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 25:
				{
				localctx = new ListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 280;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4160770088) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2767551553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 161) !== 0)) {
					{
					this.state = 281;
					(localctx as ListContext)._expr = this.expr(0);
					(localctx as ListContext)._exprs.push((localctx as ListContext)._expr);
					{
					this.state = 282;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 283;
					(localctx as ListContext)._expr = this.expr(0);
					(localctx as ListContext)._exprs.push((localctx as ListContext)._expr);
					}
					}
				}

				this.state = 287;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 26:
				{
				localctx = new IfContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 288;
				this.match(stellaParser.Surrogate_id_SYMB_45);
				this.state = 289;
				(localctx as IfContext)._condition = this.expr(0);
				this.state = 290;
				this.match(stellaParser.Surrogate_id_SYMB_58);
				this.state = 291;
				(localctx as IfContext)._thenExpr = this.expr(0);
				this.state = 292;
				this.match(stellaParser.Surrogate_id_SYMB_39);
				this.state = 293;
				(localctx as IfContext)._elseExpr = this.expr(6);
				}
				break;
			case 27:
				{
				localctx = new LetContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 295;
				this.match(stellaParser.Surrogate_id_SYMB_51);
				this.state = 296;
				(localctx as LetContext)._patternBinding = this.patternBinding();
				(localctx as LetContext)._patternBindings.push((localctx as LetContext)._patternBinding);
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 297;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 298;
					(localctx as LetContext)._patternBinding = this.patternBinding();
					(localctx as LetContext)._patternBindings.push((localctx as LetContext)._patternBinding);
					}
					}
					this.state = 303;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 304;
				this.match(stellaParser.Surrogate_id_SYMB_46);
				this.state = 305;
				(localctx as LetContext)._body = this.expr(5);
				}
				break;
			case 28:
				{
				localctx = new LetRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 307;
				this.match(stellaParser.Surrogate_id_SYMB_52);
				this.state = 308;
				(localctx as LetRecContext)._patternBinding = this.patternBinding();
				(localctx as LetRecContext)._patternBindings.push((localctx as LetRecContext)._patternBinding);
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 309;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 310;
					(localctx as LetRecContext)._patternBinding = this.patternBinding();
					(localctx as LetRecContext)._patternBindings.push((localctx as LetRecContext)._patternBinding);
					}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 316;
				this.match(stellaParser.Surrogate_id_SYMB_46);
				this.state = 317;
				(localctx as LetRecContext)._body = this.expr(4);
				}
				break;
			case 29:
				{
				localctx = new ParenthesisedExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 319;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 320;
				(localctx as ParenthesisedExprContext)._expr_ = this.expr(0);
				this.state = 321;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 390;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 388;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as MultiplyContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 325;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 326;
						this.match(stellaParser.Surrogate_id_SYMB_23);
						this.state = 327;
						(localctx as MultiplyContext)._right = this.expr(26);
						}
						break;
					case 2:
						{
						localctx = new DivideContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as DivideContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 328;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 329;
						this.match(stellaParser.Surrogate_id_SYMB_24);
						this.state = 330;
						(localctx as DivideContext)._right = this.expr(25);
						}
						break;
					case 3:
						{
						localctx = new LogicAndContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LogicAndContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 331;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 332;
						this.match(stellaParser.Surrogate_id_SYMB_35);
						this.state = 333;
						(localctx as LogicAndContext)._right = this.expr(24);
						}
						break;
					case 4:
						{
						localctx = new AddContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as AddContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 334;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 335;
						this.match(stellaParser.Surrogate_id_SYMB_21);
						this.state = 336;
						(localctx as AddContext)._right = this.expr(23);
						}
						break;
					case 5:
						{
						localctx = new SubtractContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as SubtractContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 337;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 338;
						this.match(stellaParser.Surrogate_id_SYMB_22);
						this.state = 339;
						(localctx as SubtractContext)._right = this.expr(22);
						}
						break;
					case 6:
						{
						localctx = new LogicOrContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LogicOrContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 340;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 341;
						this.match(stellaParser.Surrogate_id_SYMB_55);
						this.state = 342;
						(localctx as LogicOrContext)._right = this.expr(21);
						}
						break;
					case 7:
						{
						localctx = new LessThanContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LessThanContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 343;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 344;
						this.match(stellaParser.Surrogate_id_SYMB_15);
						this.state = 345;
						(localctx as LessThanContext)._right = this.expr(13);
						}
						break;
					case 8:
						{
						localctx = new LessThanOrEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LessThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 346;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 347;
						this.match(stellaParser.Surrogate_id_SYMB_16);
						this.state = 348;
						(localctx as LessThanOrEqualContext)._right = this.expr(12);
						}
						break;
					case 9:
						{
						localctx = new GreaterThanContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as GreaterThanContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 349;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 350;
						this.match(stellaParser.Surrogate_id_SYMB_17);
						this.state = 351;
						(localctx as GreaterThanContext)._right = this.expr(11);
						}
						break;
					case 10:
						{
						localctx = new GreaterThanOrEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as GreaterThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 352;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 353;
						this.match(stellaParser.Surrogate_id_SYMB_18);
						this.state = 354;
						(localctx as GreaterThanOrEqualContext)._right = this.expr(10);
						}
						break;
					case 11:
						{
						localctx = new EqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as EqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 355;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 356;
						this.match(stellaParser.Surrogate_id_SYMB_19);
						this.state = 357;
						(localctx as EqualContext)._right = this.expr(9);
						}
						break;
					case 12:
						{
						localctx = new NotEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as NotEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 358;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 359;
						this.match(stellaParser.Surrogate_id_SYMB_20);
						this.state = 360;
						(localctx as NotEqualContext)._right = this.expr(8);
						}
						break;
					case 13:
						{
						localctx = new SequenceContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as SequenceContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 361;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 362;
						this.match(stellaParser.Surrogate_id_SYMB_1);
						this.state = 363;
						(localctx as SequenceContext)._right = this.expr(3);
						}
						break;
					case 14:
						{
						localctx = new DotRecordContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as DotRecordContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 364;
						if (!(this.precpred(this._ctx, 47))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 47)");
						}
						this.state = 365;
						this.match(stellaParser.Surrogate_id_SYMB_25);
						this.state = 366;
						(localctx as DotRecordContext)._label = this.match(stellaParser.StellaIdent);
						}
						break;
					case 15:
						{
						localctx = new DotTupleContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as DotTupleContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 367;
						if (!(this.precpred(this._ctx, 46))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 46)");
						}
						this.state = 368;
						this.match(stellaParser.Surrogate_id_SYMB_25);
						this.state = 369;
						(localctx as DotTupleContext)._index = this.match(stellaParser.INTEGER);
						}
						break;
					case 16:
						{
						localctx = new ApplicationContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as ApplicationContext)._fun = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 370;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 371;
						this.match(stellaParser.Surrogate_id_SYMB_2);
						this.state = 380;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4160770088) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2767551553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 161) !== 0)) {
							{
							this.state = 372;
							(localctx as ApplicationContext)._expr = this.expr(0);
							(localctx as ApplicationContext)._args.push((localctx as ApplicationContext)._expr);
							this.state = 377;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la===1) {
								{
								{
								this.state = 373;
								this.match(stellaParser.Surrogate_id_SYMB_0);
								this.state = 374;
								(localctx as ApplicationContext)._expr = this.expr(0);
								(localctx as ApplicationContext)._args.push((localctx as ApplicationContext)._expr);
								}
								}
								this.state = 379;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 382;
						this.match(stellaParser.Surrogate_id_SYMB_3);
						}
						break;
					case 17:
						{
						localctx = new TypeAscContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as TypeAscContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 383;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 384;
						this.match(stellaParser.Surrogate_id_SYMB_36);
						this.state = 385;
						(localctx as TypeAscContext)._type_ = this.stellatype(0);
						}
						break;
					case 18:
						{
						localctx = new TerminatingSemicolonContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as TerminatingSemicolonContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 386;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 387;
						this.match(stellaParser.Surrogate_id_SYMB_1);
						}
						break;
					}
					}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
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
	public patternBinding(): PatternBindingContext {
		let localctx: PatternBindingContext = new PatternBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, stellaParser.RULE_patternBinding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 393;
			localctx._pat = this.pattern();
			this.state = 394;
			this.match(stellaParser.Surrogate_id_SYMB_6);
			this.state = 395;
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
	public binding(): BindingContext {
		let localctx: BindingContext = new BindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, stellaParser.RULE_binding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 397;
			localctx._name = this.match(stellaParser.StellaIdent);
			this.state = 398;
			this.match(stellaParser.Surrogate_id_SYMB_6);
			this.state = 399;
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
	public matchCase(): MatchCaseContext {
		let localctx: MatchCaseContext = new MatchCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, stellaParser.RULE_matchCase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 401;
			localctx._pat = this.pattern();
			this.state = 402;
			this.match(stellaParser.Surrogate_id_SYMB_9);
			this.state = 403;
			localctx._expr_ = this.expr(0);
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
		this.enterRule(localctx, 26, stellaParser.RULE_pattern);
		let _la: number;
		try {
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				localctx = new PatternVariantContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 405;
				this.match(stellaParser.Surrogate_id_SYMB_11);
				this.state = 406;
				(localctx as PatternVariantContext)._label = this.match(stellaParser.StellaIdent);
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 407;
					this.match(stellaParser.Surrogate_id_SYMB_6);
					this.state = 408;
					this.pattern();
					}
				}

				this.state = 411;
				this.match(stellaParser.Surrogate_id_SYMB_12);
				}
				break;
			case 2:
				localctx = new PatternInlContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 412;
				this.match(stellaParser.Surrogate_id_SYMB_47);
				this.state = 413;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 414;
				(localctx as PatternInlContext)._pat = this.pattern();
				this.state = 415;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 3:
				localctx = new PatternInrContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 417;
				this.match(stellaParser.Surrogate_id_SYMB_49);
				this.state = 418;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 419;
				(localctx as PatternInrContext)._pat = this.pattern();
				this.state = 420;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 4:
				localctx = new PatternTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 422;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2224034833) !== 0) || _la===71) {
					{
					this.state = 423;
					(localctx as PatternTupleContext)._pattern = this.pattern();
					(localctx as PatternTupleContext)._patterns.push((localctx as PatternTupleContext)._pattern);
					this.state = 428;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 424;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 425;
						(localctx as PatternTupleContext)._pattern = this.pattern();
						(localctx as PatternTupleContext)._patterns.push((localctx as PatternTupleContext)._pattern);
						}
						}
						this.state = 430;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 433;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 5:
				localctx = new PatternRecordContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 434;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 435;
					(localctx as PatternRecordContext)._labelledPattern = this.labelledPattern();
					(localctx as PatternRecordContext)._patterns.push((localctx as PatternRecordContext)._labelledPattern);
					this.state = 440;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 436;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 437;
						(localctx as PatternRecordContext)._labelledPattern = this.labelledPattern();
						(localctx as PatternRecordContext)._patterns.push((localctx as PatternRecordContext)._labelledPattern);
						}
						}
						this.state = 442;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 445;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 6:
				localctx = new PatternListContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 446;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2224034833) !== 0) || _la===71) {
					{
					this.state = 447;
					(localctx as PatternListContext)._pattern = this.pattern();
					(localctx as PatternListContext)._patterns.push((localctx as PatternListContext)._pattern);
					this.state = 452;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 448;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 449;
						(localctx as PatternListContext)._pattern = this.pattern();
						(localctx as PatternListContext)._patterns.push((localctx as PatternListContext)._pattern);
						}
						}
						this.state = 454;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 457;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 7:
				localctx = new PatternConsContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 458;
				this.match(stellaParser.Surrogate_id_SYMB_37);
				this.state = 459;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 460;
				(localctx as PatternConsContext)._head = this.pattern();
				this.state = 461;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 462;
				(localctx as PatternConsContext)._tail = this.pattern();
				this.state = 463;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 8:
				localctx = new PatternFalseContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 465;
				this.match(stellaParser.Surrogate_id_SYMB_41);
				}
				break;
			case 9:
				localctx = new PatternTrueContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 466;
				this.match(stellaParser.Surrogate_id_SYMB_60);
				}
				break;
			case 10:
				localctx = new PatternUnitContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 467;
				this.match(stellaParser.Surrogate_id_SYMB_63);
				}
				break;
			case 11:
				localctx = new PatternIntContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 468;
				(localctx as PatternIntContext)._n = this.match(stellaParser.INTEGER);
				}
				break;
			case 12:
				localctx = new PatternSuccContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 469;
				this.match(stellaParser.Surrogate_id_SYMB_57);
				this.state = 470;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 471;
				(localctx as PatternSuccContext)._n = this.pattern();
				this.state = 472;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 13:
				localctx = new PatternVarContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 474;
				(localctx as PatternVarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 14:
				localctx = new ParenthesisedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 475;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 476;
				this.pattern();
				this.state = 477;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
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
		this.enterRule(localctx, 28, stellaParser.RULE_labelledPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 481;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 482;
			this.match(stellaParser.Surrogate_id_SYMB_6);
			this.state = 483;
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
		let _startState: number = 30;
		this.enterRecursionRule(localctx, 30, stellaParser.RULE_stellatype, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				localctx = new TypeBoolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 486;
				this.match(stellaParser.Surrogate_id_SYMB_32);
				}
				break;
			case 2:
				{
				localctx = new TypeNatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 487;
				this.match(stellaParser.Surrogate_id_SYMB_33);
				}
				break;
			case 3:
				{
				localctx = new TypeFunContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 488;
				this.match(stellaParser.Surrogate_id_SYMB_43);
				this.state = 489;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16424) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2055) !== 0) || _la===66 || _la===69) {
					{
					this.state = 490;
					(localctx as TypeFunContext)._stellatype = this.stellatype(0);
					(localctx as TypeFunContext)._paramTypes.push((localctx as TypeFunContext)._stellatype);
					this.state = 495;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 491;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 492;
						(localctx as TypeFunContext)._stellatype = this.stellatype(0);
						(localctx as TypeFunContext)._paramTypes.push((localctx as TypeFunContext)._stellatype);
						}
						}
						this.state = 497;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 500;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				this.state = 501;
				this.match(stellaParser.Surrogate_id_SYMB_8);
				this.state = 502;
				(localctx as TypeFunContext)._returnType = this.stellatype(10);
				}
				break;
			case 4:
				{
				localctx = new TypeRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 503;
				this.match(stellaParser.Surrogate_id_SYMB_65);
				this.state = 504;
				(localctx as TypeRecContext)._var_ = this.match(stellaParser.StellaIdent);
				this.state = 505;
				this.match(stellaParser.Surrogate_id_SYMB_25);
				this.state = 506;
				(localctx as TypeRecContext)._type_ = this.stellatype(9);
				}
				break;
			case 5:
				{
				localctx = new TypeTupleContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 507;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16424) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2055) !== 0) || _la===66 || _la===69) {
					{
					this.state = 508;
					(localctx as TypeTupleContext)._stellatype = this.stellatype(0);
					(localctx as TypeTupleContext)._types.push((localctx as TypeTupleContext)._stellatype);
					{
					this.state = 509;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 510;
					(localctx as TypeTupleContext)._stellatype = this.stellatype(0);
					(localctx as TypeTupleContext)._types.push((localctx as TypeTupleContext)._stellatype);
					}
					}
				}

				this.state = 514;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 6:
				{
				localctx = new TypeRecordContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 515;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 516;
					(localctx as TypeRecordContext)._recordFieldType = this.recordFieldType();
					(localctx as TypeRecordContext)._fieldTypes.push((localctx as TypeRecordContext)._recordFieldType);
					this.state = 521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 517;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 518;
						(localctx as TypeRecordContext)._recordFieldType = this.recordFieldType();
						(localctx as TypeRecordContext)._fieldTypes.push((localctx as TypeRecordContext)._recordFieldType);
						}
						}
						this.state = 523;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 526;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 7:
				{
				localctx = new TypeVariantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 527;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 528;
					(localctx as TypeVariantContext)._variantFieldType = this.variantFieldType();
					(localctx as TypeVariantContext)._fieldTypes.push((localctx as TypeVariantContext)._variantFieldType);
					this.state = 533;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 529;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 530;
						(localctx as TypeVariantContext)._variantFieldType = this.variantFieldType();
						(localctx as TypeVariantContext)._fieldTypes.push((localctx as TypeVariantContext)._variantFieldType);
						}
						}
						this.state = 535;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 538;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 8:
				{
				localctx = new TypeListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 539;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16424) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2055) !== 0) || _la===66 || _la===69) {
					{
					this.state = 540;
					(localctx as TypeListContext)._stellatype = this.stellatype(0);
					(localctx as TypeListContext)._types.push((localctx as TypeListContext)._stellatype);
					this.state = 545;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 541;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 542;
						(localctx as TypeListContext)._stellatype = this.stellatype(0);
						(localctx as TypeListContext)._types.push((localctx as TypeListContext)._stellatype);
						}
						}
						this.state = 547;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 550;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 9:
				{
				localctx = new TypeUnitContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 551;
				this.match(stellaParser.Surrogate_id_SYMB_34);
				}
				break;
			case 10:
				{
				localctx = new TypeVarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 552;
				(localctx as TypeVarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 11:
				{
				localctx = new TypeParensContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 553;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 554;
				this.stellatype(0);
				this.state = 555;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 564;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
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
					this.state = 559;
					if (!(this.precpred(this._ctx, 8))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
					}
					this.state = 560;
					this.match(stellaParser.Surrogate_id_SYMB_21);
					this.state = 561;
					(localctx as TypeSumContext)._right = this.stellatype(9);
					}
					}
				}
				this.state = 566;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
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
		this.enterRule(localctx, 32, stellaParser.RULE_recordFieldType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 567;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 568;
			this.match(stellaParser.Surrogate_id_SYMB_7);
			this.state = 569;
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
		this.enterRule(localctx, 34, stellaParser.RULE_variantFieldType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 571;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 572;
				this.match(stellaParser.Surrogate_id_SYMB_7);
				this.state = 573;
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
		case 15:
			return this.stellatype_sempred(localctx as StellatypeContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 25);
		case 1:
			return this.precpred(this._ctx, 24);
		case 2:
			return this.precpred(this._ctx, 23);
		case 3:
			return this.precpred(this._ctx, 22);
		case 4:
			return this.precpred(this._ctx, 21);
		case 5:
			return this.precpred(this._ctx, 20);
		case 6:
			return this.precpred(this._ctx, 12);
		case 7:
			return this.precpred(this._ctx, 11);
		case 8:
			return this.precpred(this._ctx, 10);
		case 9:
			return this.precpred(this._ctx, 9);
		case 10:
			return this.precpred(this._ctx, 8);
		case 11:
			return this.precpred(this._ctx, 7);
		case 12:
			return this.precpred(this._ctx, 2);
		case 13:
			return this.precpred(this._ctx, 47);
		case 14:
			return this.precpred(this._ctx, 46);
		case 15:
			return this.precpred(this._ctx, 26);
		case 16:
			return this.precpred(this._ctx, 19);
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private stellatype_sempred(localctx: StellatypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,73,577,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,5,3,48,8,3,10,3,12,3,51,
	9,3,1,3,5,3,54,8,3,10,3,12,3,57,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
	5,5,68,8,5,10,5,12,5,71,9,5,1,5,1,5,1,6,5,6,76,8,6,10,6,12,6,79,9,6,1,6,
	1,6,1,6,1,6,1,6,1,6,5,6,87,8,6,10,6,12,6,90,9,6,3,6,92,8,6,1,6,1,6,1,6,
	3,6,97,8,6,1,6,1,6,1,6,1,6,5,6,103,8,6,10,6,12,6,106,9,6,3,6,108,8,6,1,
	6,1,6,5,6,112,8,6,10,6,12,6,115,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,
	125,8,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,222,8,9,10,9,12,9,225,9,9,3,9,227,8,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,239,8,9,10,9,12,9,242,9,9,3,9,
	244,8,9,1,9,1,9,1,9,1,9,1,9,5,9,251,8,9,10,9,12,9,254,9,9,3,9,256,8,9,1,
	9,1,9,1,9,1,9,1,9,3,9,263,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,272,8,9,10,
	9,12,9,275,9,9,3,9,277,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,286,8,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,300,8,9,10,9,12,9,303,9,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,312,8,9,10,9,12,9,315,9,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,3,9,324,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,5,9,376,8,9,10,9,12,9,379,9,9,3,9,381,8,9,1,9,1,9,1,9,1,9,1,
	9,1,9,5,9,389,8,9,10,9,12,9,392,9,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
	1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,3,13,410,8,13,1,13,1,13,1,
	13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,427,
	8,13,10,13,12,13,430,9,13,3,13,432,8,13,1,13,1,13,1,13,1,13,1,13,5,13,439,
	8,13,10,13,12,13,442,9,13,3,13,444,8,13,1,13,1,13,1,13,1,13,1,13,5,13,451,
	8,13,10,13,12,13,454,9,13,3,13,456,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,3,13,480,8,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,5,15,494,8,15,10,15,12,15,497,9,15,3,15,499,8,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,513,8,15,1,15,1,15,1,
	15,1,15,1,15,5,15,520,8,15,10,15,12,15,523,9,15,3,15,525,8,15,1,15,1,15,
	1,15,1,15,1,15,5,15,532,8,15,10,15,12,15,535,9,15,3,15,537,8,15,1,15,1,
	15,1,15,1,15,1,15,5,15,544,8,15,10,15,12,15,547,9,15,3,15,549,8,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,3,15,558,8,15,1,15,1,15,1,15,5,15,563,8,15,
	10,15,12,15,566,9,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,3,17,575,8,17,1,
	17,0,2,18,30,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,0,670,
	0,36,1,0,0,0,2,39,1,0,0,0,4,42,1,0,0,0,6,45,1,0,0,0,8,58,1,0,0,0,10,62,
	1,0,0,0,12,124,1,0,0,0,14,126,1,0,0,0,16,128,1,0,0,0,18,323,1,0,0,0,20,
	393,1,0,0,0,22,397,1,0,0,0,24,401,1,0,0,0,26,479,1,0,0,0,28,481,1,0,0,0,
	30,557,1,0,0,0,32,567,1,0,0,0,34,571,1,0,0,0,36,37,3,6,3,0,37,38,5,0,0,
	1,38,1,1,0,0,0,39,40,3,18,9,0,40,41,5,0,0,1,41,3,1,0,0,0,42,43,3,30,15,
	0,43,44,5,0,0,1,44,5,1,0,0,0,45,49,3,8,4,0,46,48,3,10,5,0,47,46,1,0,0,0,
	48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,55,1,0,0,0,51,49,1,0,0,0,52,
	54,3,12,6,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,
	7,1,0,0,0,57,55,1,0,0,0,58,59,5,51,0,0,59,60,5,39,0,0,60,61,5,2,0,0,61,
	9,1,0,0,0,62,63,5,41,0,0,63,64,5,65,0,0,64,69,5,70,0,0,65,66,5,1,0,0,66,
	68,5,70,0,0,67,65,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,
	72,1,0,0,0,71,69,1,0,0,0,72,73,5,2,0,0,73,11,1,0,0,0,74,76,3,14,7,0,75,
	74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,
	1,0,0,0,80,81,5,44,0,0,81,82,5,69,0,0,82,91,5,3,0,0,83,88,3,16,8,0,84,85,
	5,1,0,0,85,87,3,16,8,0,86,84,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,
	1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,91,83,1,0,0,0,91,92,1,0,0,0,92,93,1,
	0,0,0,93,96,5,4,0,0,94,95,5,9,0,0,95,97,3,30,15,0,96,94,1,0,0,0,96,97,1,
	0,0,0,97,107,1,0,0,0,98,99,5,60,0,0,99,104,3,30,15,0,100,101,5,1,0,0,101,
	103,3,30,15,0,102,100,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,
	0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,107,98,1,0,0,0,107,108,1,0,0,0,108,
	109,1,0,0,0,109,113,5,5,0,0,110,112,3,12,6,0,111,110,1,0,0,0,112,115,1,
	0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,
	117,5,57,0,0,117,118,3,18,9,0,118,119,5,6,0,0,119,125,1,0,0,0,120,121,5,
	62,0,0,121,122,5,69,0,0,122,123,5,7,0,0,123,125,3,30,15,0,124,77,1,0,0,
	0,124,120,1,0,0,0,125,13,1,0,0,0,126,127,5,49,0,0,127,15,1,0,0,0,128,129,
	5,69,0,0,129,130,5,8,0,0,130,131,3,30,15,0,131,17,1,0,0,0,132,133,6,9,-1,
	0,133,324,5,61,0,0,134,324,5,42,0,0,135,324,5,64,0,0,136,324,5,71,0,0,137,
	324,5,69,0,0,138,139,5,48,0,0,139,140,5,3,0,0,140,141,3,18,9,0,141,142,
	5,4,0,0,142,324,1,0,0,0,143,144,5,50,0,0,144,145,5,3,0,0,145,146,3,18,9,
	0,146,147,5,4,0,0,147,324,1,0,0,0,148,149,5,38,0,0,149,150,5,3,0,0,150,
	151,3,18,9,0,151,152,5,1,0,0,152,153,3,18,9,0,153,154,5,4,0,0,154,324,1,
	0,0,0,155,156,5,27,0,0,156,157,5,3,0,0,157,158,3,18,9,0,158,159,5,4,0,0,
	159,324,1,0,0,0,160,161,5,28,0,0,161,162,5,3,0,0,162,163,3,18,9,0,163,164,
	5,4,0,0,164,324,1,0,0,0,165,166,5,29,0,0,166,167,5,3,0,0,167,168,3,18,9,
	0,168,169,5,4,0,0,169,324,1,0,0,0,170,171,5,58,0,0,171,172,5,3,0,0,172,
	173,3,18,9,0,173,174,5,4,0,0,174,324,1,0,0,0,175,176,5,55,0,0,176,177,5,
	3,0,0,177,178,3,18,9,0,178,179,5,4,0,0,179,324,1,0,0,0,180,181,5,30,0,0,
	181,182,5,3,0,0,182,183,3,18,9,0,183,184,5,4,0,0,184,324,1,0,0,0,185,186,
	5,31,0,0,186,187,5,3,0,0,187,188,3,18,9,0,188,189,5,4,0,0,189,324,1,0,0,
	0,190,191,5,43,0,0,191,192,5,3,0,0,192,193,3,18,9,0,193,194,5,4,0,0,194,
	324,1,0,0,0,195,196,5,32,0,0,196,197,5,3,0,0,197,198,3,18,9,0,198,199,5,
	1,0,0,199,200,3,18,9,0,200,201,5,1,0,0,201,202,3,18,9,0,202,203,5,4,0,0,
	203,324,1,0,0,0,204,205,5,45,0,0,205,206,5,14,0,0,206,207,3,30,15,0,207,
	208,5,15,0,0,208,209,3,18,9,28,209,324,1,0,0,0,210,211,5,63,0,0,211,212,
	5,14,0,0,212,213,3,30,15,0,213,214,5,15,0,0,214,215,3,18,9,27,215,324,1,
	0,0,0,216,217,5,44,0,0,217,226,5,3,0,0,218,223,3,16,8,0,219,220,5,1,0,0,
	220,222,3,16,8,0,221,219,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,
	1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,226,218,1,0,0,0,226,227,1,0,0,0,
	227,228,1,0,0,0,228,229,5,4,0,0,229,230,5,5,0,0,230,231,5,57,0,0,231,232,
	3,18,9,0,232,233,5,6,0,0,233,324,1,0,0,0,234,243,5,5,0,0,235,240,3,18,9,
	0,236,237,5,1,0,0,237,239,3,18,9,0,238,236,1,0,0,0,239,242,1,0,0,0,240,
	238,1,0,0,0,240,241,1,0,0,0,241,244,1,0,0,0,242,240,1,0,0,0,243,235,1,0,
	0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,324,5,6,0,0,246,255,5,5,0,0,247,
	252,3,22,11,0,248,249,5,1,0,0,249,251,3,22,11,0,250,248,1,0,0,0,251,254,
	1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,
	255,247,1,0,0,0,255,256,1,0,0,0,256,257,1,0,0,0,257,324,5,6,0,0,258,259,
	5,12,0,0,259,262,5,69,0,0,260,261,5,7,0,0,261,263,3,18,9,0,262,260,1,0,
	0,0,262,263,1,0,0,0,263,264,1,0,0,0,264,324,5,13,0,0,265,266,5,54,0,0,266,
	267,3,18,9,0,267,276,5,5,0,0,268,273,3,24,12,0,269,270,5,11,0,0,270,272,
	3,24,12,0,271,269,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,
	0,274,277,1,0,0,0,275,273,1,0,0,0,276,268,1,0,0,0,276,277,1,0,0,0,277,278,
	1,0,0,0,278,279,5,6,0,0,279,324,1,0,0,0,280,285,5,14,0,0,281,282,3,18,9,
	0,282,283,5,1,0,0,283,284,3,18,9,0,284,286,1,0,0,0,285,281,1,0,0,0,285,
	286,1,0,0,0,286,287,1,0,0,0,287,324,5,15,0,0,288,289,5,46,0,0,289,290,3,
	18,9,0,290,291,5,59,0,0,291,292,3,18,9,0,292,293,5,40,0,0,293,294,3,18,
	9,6,294,324,1,0,0,0,295,296,5,52,0,0,296,301,3,20,10,0,297,298,5,1,0,0,
	298,300,3,20,10,0,299,297,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,
	1,0,0,0,302,304,1,0,0,0,303,301,1,0,0,0,304,305,5,47,0,0,305,306,3,18,9,
	5,306,324,1,0,0,0,307,308,5,53,0,0,308,313,3,20,10,0,309,310,5,1,0,0,310,
	312,3,20,10,0,311,309,1,0,0,0,312,315,1,0,0,0,313,311,1,0,0,0,313,314,1,
	0,0,0,314,316,1,0,0,0,315,313,1,0,0,0,316,317,5,47,0,0,317,318,3,18,9,4,
	318,324,1,0,0,0,319,320,5,3,0,0,320,321,3,18,9,0,321,322,5,4,0,0,322,324,
	1,0,0,0,323,132,1,0,0,0,323,134,1,0,0,0,323,135,1,0,0,0,323,136,1,0,0,0,
	323,137,1,0,0,0,323,138,1,0,0,0,323,143,1,0,0,0,323,148,1,0,0,0,323,155,
	1,0,0,0,323,160,1,0,0,0,323,165,1,0,0,0,323,170,1,0,0,0,323,175,1,0,0,0,
	323,180,1,0,0,0,323,185,1,0,0,0,323,190,1,0,0,0,323,195,1,0,0,0,323,204,
	1,0,0,0,323,210,1,0,0,0,323,216,1,0,0,0,323,234,1,0,0,0,323,246,1,0,0,0,
	323,258,1,0,0,0,323,265,1,0,0,0,323,280,1,0,0,0,323,288,1,0,0,0,323,295,
	1,0,0,0,323,307,1,0,0,0,323,319,1,0,0,0,324,390,1,0,0,0,325,326,10,25,0,
	0,326,327,5,24,0,0,327,389,3,18,9,26,328,329,10,24,0,0,329,330,5,25,0,0,
	330,389,3,18,9,25,331,332,10,23,0,0,332,333,5,36,0,0,333,389,3,18,9,24,
	334,335,10,22,0,0,335,336,5,22,0,0,336,389,3,18,9,23,337,338,10,21,0,0,
	338,339,5,23,0,0,339,389,3,18,9,22,340,341,10,20,0,0,341,342,5,56,0,0,342,
	389,3,18,9,21,343,344,10,12,0,0,344,345,5,16,0,0,345,389,3,18,9,13,346,
	347,10,11,0,0,347,348,5,17,0,0,348,389,3,18,9,12,349,350,10,10,0,0,350,
	351,5,18,0,0,351,389,3,18,9,11,352,353,10,9,0,0,353,354,5,19,0,0,354,389,
	3,18,9,10,355,356,10,8,0,0,356,357,5,20,0,0,357,389,3,18,9,9,358,359,10,
	7,0,0,359,360,5,21,0,0,360,389,3,18,9,8,361,362,10,2,0,0,362,363,5,2,0,
	0,363,389,3,18,9,3,364,365,10,47,0,0,365,366,5,26,0,0,366,389,5,69,0,0,
	367,368,10,46,0,0,368,369,5,26,0,0,369,389,5,71,0,0,370,371,10,26,0,0,371,
	380,5,3,0,0,372,377,3,18,9,0,373,374,5,1,0,0,374,376,3,18,9,0,375,373,1,
	0,0,0,376,379,1,0,0,0,377,375,1,0,0,0,377,378,1,0,0,0,378,381,1,0,0,0,379,
	377,1,0,0,0,380,372,1,0,0,0,380,381,1,0,0,0,381,382,1,0,0,0,382,389,5,4,
	0,0,383,384,10,19,0,0,384,385,5,37,0,0,385,389,3,30,15,0,386,387,10,1,0,
	0,387,389,5,2,0,0,388,325,1,0,0,0,388,328,1,0,0,0,388,331,1,0,0,0,388,334,
	1,0,0,0,388,337,1,0,0,0,388,340,1,0,0,0,388,343,1,0,0,0,388,346,1,0,0,0,
	388,349,1,0,0,0,388,352,1,0,0,0,388,355,1,0,0,0,388,358,1,0,0,0,388,361,
	1,0,0,0,388,364,1,0,0,0,388,367,1,0,0,0,388,370,1,0,0,0,388,383,1,0,0,0,
	388,386,1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,19,
	1,0,0,0,392,390,1,0,0,0,393,394,3,26,13,0,394,395,5,7,0,0,395,396,3,18,
	9,0,396,21,1,0,0,0,397,398,5,69,0,0,398,399,5,7,0,0,399,400,3,18,9,0,400,
	23,1,0,0,0,401,402,3,26,13,0,402,403,5,10,0,0,403,404,3,18,9,0,404,25,1,
	0,0,0,405,406,5,12,0,0,406,409,5,69,0,0,407,408,5,7,0,0,408,410,3,26,13,
	0,409,407,1,0,0,0,409,410,1,0,0,0,410,411,1,0,0,0,411,480,5,13,0,0,412,
	413,5,48,0,0,413,414,5,3,0,0,414,415,3,26,13,0,415,416,5,4,0,0,416,480,
	1,0,0,0,417,418,5,50,0,0,418,419,5,3,0,0,419,420,3,26,13,0,420,421,5,4,
	0,0,421,480,1,0,0,0,422,431,5,5,0,0,423,428,3,26,13,0,424,425,5,1,0,0,425,
	427,3,26,13,0,426,424,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,
	0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,431,423,1,0,0,0,431,432,1,0,0,0,432,
	433,1,0,0,0,433,480,5,6,0,0,434,443,5,5,0,0,435,440,3,28,14,0,436,437,5,
	1,0,0,437,439,3,28,14,0,438,436,1,0,0,0,439,442,1,0,0,0,440,438,1,0,0,0,
	440,441,1,0,0,0,441,444,1,0,0,0,442,440,1,0,0,0,443,435,1,0,0,0,443,444,
	1,0,0,0,444,445,1,0,0,0,445,480,5,6,0,0,446,455,5,14,0,0,447,452,3,26,13,
	0,448,449,5,1,0,0,449,451,3,26,13,0,450,448,1,0,0,0,451,454,1,0,0,0,452,
	450,1,0,0,0,452,453,1,0,0,0,453,456,1,0,0,0,454,452,1,0,0,0,455,447,1,0,
	0,0,455,456,1,0,0,0,456,457,1,0,0,0,457,480,5,15,0,0,458,459,5,38,0,0,459,
	460,5,3,0,0,460,461,3,26,13,0,461,462,5,1,0,0,462,463,3,26,13,0,463,464,
	5,4,0,0,464,480,1,0,0,0,465,480,5,42,0,0,466,480,5,61,0,0,467,480,5,64,
	0,0,468,480,5,71,0,0,469,470,5,58,0,0,470,471,5,3,0,0,471,472,3,26,13,0,
	472,473,5,4,0,0,473,480,1,0,0,0,474,480,5,69,0,0,475,476,5,3,0,0,476,477,
	3,26,13,0,477,478,5,4,0,0,478,480,1,0,0,0,479,405,1,0,0,0,479,412,1,0,0,
	0,479,417,1,0,0,0,479,422,1,0,0,0,479,434,1,0,0,0,479,446,1,0,0,0,479,458,
	1,0,0,0,479,465,1,0,0,0,479,466,1,0,0,0,479,467,1,0,0,0,479,468,1,0,0,0,
	479,469,1,0,0,0,479,474,1,0,0,0,479,475,1,0,0,0,480,27,1,0,0,0,481,482,
	5,69,0,0,482,483,5,7,0,0,483,484,3,26,13,0,484,29,1,0,0,0,485,486,6,15,
	-1,0,486,558,5,33,0,0,487,558,5,34,0,0,488,489,5,44,0,0,489,498,5,3,0,0,
	490,495,3,30,15,0,491,492,5,1,0,0,492,494,3,30,15,0,493,491,1,0,0,0,494,
	497,1,0,0,0,495,493,1,0,0,0,495,496,1,0,0,0,496,499,1,0,0,0,497,495,1,0,
	0,0,498,490,1,0,0,0,498,499,1,0,0,0,499,500,1,0,0,0,500,501,5,4,0,0,501,
	502,5,9,0,0,502,558,3,30,15,10,503,504,5,66,0,0,504,505,5,69,0,0,505,506,
	5,26,0,0,506,558,3,30,15,9,507,512,5,5,0,0,508,509,3,30,15,0,509,510,5,
	1,0,0,510,511,3,30,15,0,511,513,1,0,0,0,512,508,1,0,0,0,512,513,1,0,0,0,
	513,514,1,0,0,0,514,558,5,6,0,0,515,524,5,5,0,0,516,521,3,32,16,0,517,518,
	5,1,0,0,518,520,3,32,16,0,519,517,1,0,0,0,520,523,1,0,0,0,521,519,1,0,0,
	0,521,522,1,0,0,0,522,525,1,0,0,0,523,521,1,0,0,0,524,516,1,0,0,0,524,525,
	1,0,0,0,525,526,1,0,0,0,526,558,5,6,0,0,527,536,5,5,0,0,528,533,3,34,17,
	0,529,530,5,1,0,0,530,532,3,34,17,0,531,529,1,0,0,0,532,535,1,0,0,0,533,
	531,1,0,0,0,533,534,1,0,0,0,534,537,1,0,0,0,535,533,1,0,0,0,536,528,1,0,
	0,0,536,537,1,0,0,0,537,538,1,0,0,0,538,558,5,6,0,0,539,548,5,14,0,0,540,
	545,3,30,15,0,541,542,5,1,0,0,542,544,3,30,15,0,543,541,1,0,0,0,544,547,
	1,0,0,0,545,543,1,0,0,0,545,546,1,0,0,0,546,549,1,0,0,0,547,545,1,0,0,0,
	548,540,1,0,0,0,548,549,1,0,0,0,549,550,1,0,0,0,550,558,5,15,0,0,551,558,
	5,35,0,0,552,558,5,69,0,0,553,554,5,3,0,0,554,555,3,30,15,0,555,556,5,4,
	0,0,556,558,1,0,0,0,557,485,1,0,0,0,557,487,1,0,0,0,557,488,1,0,0,0,557,
	503,1,0,0,0,557,507,1,0,0,0,557,515,1,0,0,0,557,527,1,0,0,0,557,539,1,0,
	0,0,557,551,1,0,0,0,557,552,1,0,0,0,557,553,1,0,0,0,558,564,1,0,0,0,559,
	560,10,8,0,0,560,561,5,22,0,0,561,563,3,30,15,9,562,559,1,0,0,0,563,566,
	1,0,0,0,564,562,1,0,0,0,564,565,1,0,0,0,565,31,1,0,0,0,566,564,1,0,0,0,
	567,568,5,69,0,0,568,569,5,8,0,0,569,570,3,30,15,0,570,33,1,0,0,0,571,574,
	5,69,0,0,572,573,5,8,0,0,573,575,3,30,15,0,574,572,1,0,0,0,574,575,1,0,
	0,0,575,35,1,0,0,0,48,49,55,69,77,88,91,96,104,107,113,124,223,226,240,
	243,252,255,262,273,276,285,301,313,323,377,380,388,390,409,428,431,440,
	443,452,455,479,495,498,512,521,524,533,536,545,548,557,564,574];

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
	public Surrogate_id_SYMB_50(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_50, 0);
	}
	public Surrogate_id_SYMB_38(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_38, 0);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_1, 0);
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
	public Surrogate_id_SYMB_40(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_40, 0);
	}
	public Surrogate_id_SYMB_64(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_64, 0);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_1, 0);
	}
	public ExtensionName_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.ExtensionName);
	}
	public ExtensionName(i: number): TerminalNode {
		return this.getToken(stellaParser.ExtensionName, i);
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_61(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_61, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
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
	public _stellatype!: StellatypeContext;
	public _throwTypes: StellatypeContext[] = [];
	public _decl!: DeclContext;
	public _localDecls: DeclContext[] = [];
	public _returnExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_56(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_56, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_8, 0);
	}
	public Surrogate_id_SYMB_59(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_59, 0);
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
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_48(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_48, 0);
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
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_7, 0);
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
	public Surrogate_id_SYMB_27(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_27, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
	public Surrogate_id_SYMB_44(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_44, 0);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
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
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_21(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_21, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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
	public Surrogate_id_SYMB_30(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_30, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
	public Surrogate_id_SYMB_16(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_16, 0);
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
	public Surrogate_id_SYMB_57(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_57, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
export class InlContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_47(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_47, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterInl) {
	 		listener.enterInl(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitInl) {
	 		listener.exitInl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitInl) {
			return visitor.visitInl(this);
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
	public Surrogate_id_SYMB_18(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_18, 0);
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
export class InrContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_49(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_49, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterInr) {
	 		listener.enterInr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitInr) {
	 		listener.exitInr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitInr) {
			return visitor.visitInr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchContext extends ExprContext {
	public _matchCase!: MatchCaseContext;
	public _cases: MatchCaseContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_53(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_53, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public matchCase_list(): MatchCaseContext[] {
		return this.getTypedRuleContexts(MatchCaseContext) as MatchCaseContext[];
	}
	public matchCase(i: number): MatchCaseContext {
		return this.getTypedRuleContext(MatchCaseContext, i) as MatchCaseContext;
	}
	public Surrogate_id_SYMB_10_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_10);
	}
	public Surrogate_id_SYMB_10(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_10, i);
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
export class DivideContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_24(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_24, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDivide) {
	 		listener.enterDivide(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDivide) {
	 		listener.exitDivide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDivide) {
			return visitor.visitDivide(this);
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
	public Surrogate_id_SYMB_15(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_15, 0);
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
	public Surrogate_id_SYMB_54(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_54, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
	public Surrogate_id_SYMB_25(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_25, 0);
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
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
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
	public Surrogate_id_SYMB_17(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_17, 0);
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
	public Surrogate_id_SYMB_19(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_19, 0);
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
	public Surrogate_id_SYMB_28(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_28, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_23(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_23, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public binding_list(): BindingContext[] {
		return this.getTypedRuleContexts(BindingContext) as BindingContext[];
	}
	public binding(i: number): BindingContext {
		return this.getTypedRuleContext(BindingContext, i) as BindingContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, 0);
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
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_35(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_35, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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
export class LetRecContext extends ExprContext {
	public _patternBinding!: PatternBindingContext;
	public _patternBindings: PatternBindingContext[] = [];
	public _body!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_52(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_52, 0);
	}
	public Surrogate_id_SYMB_46(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_46, 0);
	}
	public patternBinding_list(): PatternBindingContext[] {
		return this.getTypedRuleContexts(PatternBindingContext) as PatternBindingContext[];
	}
	public patternBinding(i: number): PatternBindingContext {
		return this.getTypedRuleContext(PatternBindingContext, i) as PatternBindingContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLetRec) {
	 		listener.enterLetRec(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLetRec) {
	 		listener.exitLetRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLetRec) {
			return visitor.visitLetRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicOrContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_55(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_55, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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
	public Surrogate_id_SYMB_26(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_26, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
export class TerminatingSemicolonContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_1, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTerminatingSemicolon) {
	 		listener.enterTerminatingSemicolon(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTerminatingSemicolon) {
	 		listener.exitTerminatingSemicolon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTerminatingSemicolon) {
			return visitor.visitTerminatingSemicolon(this);
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
	public Surrogate_id_SYMB_20(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_20, 0);
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
export class ConstUnitContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_63(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_63, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstUnit) {
	 		listener.enterConstUnit(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstUnit) {
	 		listener.exitConstUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstUnit) {
			return visitor.visitConstUnit(this);
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
	public Surrogate_id_SYMB_29(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_29, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
export class TypeAscContext extends ExprContext {
	public _expr_!: ExprContext;
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_36(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_36, 0);
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
	public Surrogate_id_SYMB_31(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_31, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
export class SequenceContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_1, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterSequence) {
	 		listener.enterSequence(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitSequence) {
	 		listener.exitSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitSequence) {
			return visitor.visitSequence(this);
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
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_41, 0);
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
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_56(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_56, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
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
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_62(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_62, 0);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
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
	public Surrogate_id_SYMB_11(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_11, 0);
	}
	public Surrogate_id_SYMB_12(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_12, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
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
	public Surrogate_id_SYMB_60(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_60, 0);
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
	public Surrogate_id_SYMB_25(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_25, 0);
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
	public Surrogate_id_SYMB_42(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_42, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
export class SubtractContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_22(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_22, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterSubtract) {
	 		listener.enterSubtract(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitSubtract) {
	 		listener.exitSubtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitSubtract) {
			return visitor.visitSubtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetContext extends ExprContext {
	public _patternBinding!: PatternBindingContext;
	public _patternBindings: PatternBindingContext[] = [];
	public _body!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_51(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_51, 0);
	}
	public Surrogate_id_SYMB_46(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_46, 0);
	}
	public patternBinding_list(): PatternBindingContext[] {
		return this.getTypedRuleContexts(PatternBindingContext) as PatternBindingContext[];
	}
	public patternBinding(i: number): PatternBindingContext {
		return this.getTypedRuleContext(PatternBindingContext, i) as PatternBindingContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_45(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_45, 0);
	}
	public Surrogate_id_SYMB_58(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_58, 0);
	}
	public Surrogate_id_SYMB_39(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_39, 0);
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
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_37(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_37, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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


export class PatternBindingContext extends ParserRuleContext {
	public _pat!: PatternContext;
	public _rhs!: ExprContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_patternBinding;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternBinding) {
	 		listener.enterPatternBinding(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternBinding) {
	 		listener.exitPatternBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternBinding) {
			return visitor.visitPatternBinding(this);
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
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
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


export class MatchCaseContext extends ParserRuleContext {
	public _pat!: PatternContext;
	public _expr_!: ExprContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Surrogate_id_SYMB_9(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_9, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_matchCase;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterMatchCase) {
	 		listener.enterMatchCase(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitMatchCase) {
	 		listener.exitMatchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitMatchCase) {
			return visitor.visitMatchCase(this);
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
export class PatternConsContext extends PatternContext {
	public _head!: PatternContext;
	public _tail!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_37(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_37, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
export class PatternTupleContext extends PatternContext {
	public _pattern!: PatternContext;
	public _patterns: PatternContext[] = [];
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
export class PatternRecordContext extends PatternContext {
	public _labelledPattern!: LabelledPatternContext;
	public _patterns: LabelledPatternContext[] = [];
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public labelledPattern_list(): LabelledPatternContext[] {
		return this.getTypedRuleContexts(LabelledPatternContext) as LabelledPatternContext[];
	}
	public labelledPattern(i: number): LabelledPatternContext {
		return this.getTypedRuleContext(LabelledPatternContext, i) as LabelledPatternContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
export class PatternVariantContext extends PatternContext {
	public _label!: Token;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_11(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_11, 0);
	}
	public Surrogate_id_SYMB_12(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_12, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
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
export class PatternInrContext extends PatternContext {
	public _pat!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_49(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_49, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternInr) {
	 		listener.enterPatternInr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternInr) {
	 		listener.exitPatternInr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternInr) {
			return visitor.visitPatternInr(this);
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
	public Surrogate_id_SYMB_60(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_60, 0);
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
export class PatternInlContext extends PatternContext {
	public _pat!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_47(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_47, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternInl) {
	 		listener.enterPatternInl(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternInl) {
	 		listener.exitPatternInl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternInl) {
			return visitor.visitPatternInl(this);
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
export class ParenthesisedPatternContext extends PatternContext {
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
export class PatternSuccContext extends PatternContext {
	public _n!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_57(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_57, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_41, 0);
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
export class PatternUnitContext extends PatternContext {
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_63(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_63, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternUnit) {
	 		listener.enterPatternUnit(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternUnit) {
	 		listener.exitPatternUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternUnit) {
			return visitor.visitPatternUnit(this);
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
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
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
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, 0);
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
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public variantFieldType_list(): VariantFieldTypeContext[] {
		return this.getTypedRuleContexts(VariantFieldTypeContext) as VariantFieldTypeContext[];
	}
	public variantFieldType(i: number): VariantFieldTypeContext {
		return this.getTypedRuleContext(VariantFieldTypeContext, i) as VariantFieldTypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_34(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_34, 0);
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
	public Surrogate_id_SYMB_32(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_32, 0);
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
	public Surrogate_id_SYMB_33(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_33, 0);
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
	public Surrogate_id_SYMB_65(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_65, 0);
	}
	public Surrogate_id_SYMB_25(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_25, 0);
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
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
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
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_8, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public recordFieldType_list(): RecordFieldTypeContext[] {
		return this.getTypedRuleContexts(RecordFieldTypeContext) as RecordFieldTypeContext[];
	}
	public recordFieldType(i: number): RecordFieldTypeContext {
		return this.getTypedRuleContext(RecordFieldTypeContext, i) as RecordFieldTypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
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
	public Surrogate_id_SYMB_21(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_21, 0);
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
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_7, 0);
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
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_7, 0);
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
