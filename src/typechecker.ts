import type { Decl, DeclFun, Expr, Pattern, Program, Type } from './ast'
import { TypecheckingFailedError } from './errors'
import type { Extension } from './types'
import { DEBUG, T, areTypesEqual, t } from './utils'
import { Context } from './context'

export function typecheckProgram(ast: Program) {
  const ctx = new Context()

  // Add all extensions to the context.
  ast.extensions.forEach(ext => ctx.extensions.add(ext as Extension))

  // Add all global functions to the scope, so we can correctly typecheck their
  // bodies later, when they will invoke each other.
  ast.declarations.forEach((decl) => {
    if (decl.type === 'DeclFun') {
      addFunctionDeclarationToContext(decl, ctx)
    }
  })

  // Typecheck all declarations.
  ast.declarations.forEach(decl => typecheckDeclaration(decl, ctx))

  // Check for a valid main in the program.
  const main = ctx.scope.get('main')
  if (!main) {
    throw new TypecheckingFailedError('ERROR_MISSING_MAIN', '"main" function is not found in the scope.')
  }
  if (main.type !== 'TypeFun') {
    throw new TypecheckingFailedError('ERROR_NOT_A_FUNCTION', `"main" must be a function, not ${t(main)}.`)
  }
  if (main.parametersTypes.length !== 1) {
    throw new TypecheckingFailedError('ERROR_INCORRECT_ARITY_OF_MAIN', `"main" function must accept exactly one argument, not ${main.parametersTypes.length}.`)
  }
}

function typecheckDeclaration(decl: Decl, ctx: Context) {
  switch (decl.type) {
    case 'DeclFun': {
      // @todo: decl.annations, decl.throwTypes

      const localCtx = ctx.newChild()

      decl.parameters.forEach((param) => {
        localCtx.scope.set(param.name, param.paramType)
      })

      decl.nestedDeclarations.forEach((decl) => {
        typecheckDeclaration(decl, localCtx)
        if (decl.type === 'DeclFun') {
          addFunctionDeclarationToContext(decl, localCtx)
        }
      })

      if (decl.returnType) {
        inferType({
          ctx: localCtx,
          expr: decl.returnValue,
          expectedType: decl.returnType,
        })
      }

      break
    }
    case 'DeclExceptionType': {
      if (ctx.exceptionType) {
        throw new Error('Multiple exception types are not supported.')
      }
      ctx.exceptionType = decl.exceptionType
      break
    }
    default:
      throw new Error(`Unsupported declaration type: "${decl.type}".`)
  }
}

function addFunctionDeclarationToContext(decl: DeclFun, ctx: Context) {
  if (!decl.returnType) {
    throw new TypecheckingFailedError('ERROR_MISSING_EXPLICIT_RETURN_TYPE', `Function "${decl.name}" is missing an explicit return type.`)
  }
  ctx.scope.set(decl.name, T.fn(decl.parameters.map(p => p.paramType), decl.returnType))
}

let _depth = 0

function inferType({
  expr,
  ctx,
  expectedType,
}: {
  expr: Expr
  ctx: Context
  expectedType?: Type
}): Type {
  if (DEBUG) {
    console.debug('• '.repeat(_depth), expr.type, expectedType ? `(${t(expectedType)})` : '')
    _depth++
  }

  const inferredType = (() => {
    switch (expr.type) {
      case 'ConstBool':
        return T.Bool
      case 'Unit':
        return T.Unit
      case 'ConstInt':
        if (expr.value < 0) {
          throw new TypecheckingFailedError('ERROR_ILLEGAL_NEGATIVE_LITERAL', `Illegal negative literal: ${expr.value}.`)
        }
        return T.Nat
      case 'Var': {
        const varType = ctx.scope.get(expr.name)
        if (!varType) {
          throw new TypecheckingFailedError('ERROR_UNDEFINED_VARIABLE', `Variable "${expr.name}" is not defined.`)
        }
        return varType
      }
      case 'Succ':
        inferType({ expr: expr.expr, ctx, expectedType: T.Nat })
        return T.Nat
      case 'NatIsZero':
        inferType({ expr: expr.expr, ctx, expectedType: T.Nat })
        return T.Bool
      case 'NatRec': {
        const { n, initial, step } = expr

        inferType({ ctx, expr: n, expectedType: T.Nat })

        const S = inferType({ ctx, expr: initial, expectedType })

        inferType({
          ctx,
          expr: step,
          expectedType: T.fn([T.Nat], T.fn([S], S)),
        })

        return S
      }
      case 'If': {
        const { condition, thenExpr, elseExpr } = expr

        inferType({ ctx, expr: condition, expectedType: T.Bool })

        return inferType({
          ctx,
          expr: elseExpr,
          expectedType: inferType({
            ctx,
            expr: thenExpr,
            expectedType,
          }),
        })
      }
      case 'Application': {
        const { function: fn, arguments: args } = expr

        const fnType = inferType({ ctx, expr: fn })
        if (fnType.type !== 'TypeFun') {
          throw new TypecheckingFailedError('ERROR_NOT_A_FUNCTION', `Left side of application must be a function, but got ${t(fnType)}.`)
        }

        const expectedArgsCount = fnType.parametersTypes.length
        const actualArgsCount = args.length
        if (expectedArgsCount !== actualArgsCount) {
          throw new TypecheckingFailedError('ERROR_INCORRECT_NUMBER_OF_ARGUMENTS', `Function requires ${expectedArgsCount}, but got ${actualArgsCount}.`)
        }

        args.forEach((arg, i) => {
          inferType({
            ctx,
            expr: arg,
            expectedType: fnType.parametersTypes[i],
          })
        })

        return fnType.returnType
      }
      case 'Abstraction': {
        const { returnValue, parameters: params } = expr

        let expectedReturnType
        if (expectedType) {
          if (expectedType.type !== 'TypeFun') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_LAMBDA', `Expected ${t(expectedType)}, but got lambda.`)
          }

          const expectedArity = expectedType.parametersTypes.length
          const actualArity = params.length
          if (actualArity !== expectedArity) {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_NUMBER_OF_PARAMETERS_IN_LAMBDA', `Expected lambda to have ${expectedArity} parameter(s), but got ${actualArity}.`)
          }

          for (let i = 0; i < actualArity; i++) {
            const expectedParamType = expectedType.parametersTypes[i]
            const actualParam = expr.parameters[i]
            if (!areTypesEqual(actualParam.paramType, expectedParamType)) {
              throw new TypecheckingFailedError('ERROR_UNEXPECTED_TYPE_FOR_PARAMETER', `Expected lambda parameter "${actualParam.name}" to have type ${t(expectedParamType)}, but got ${t(actualParam.paramType)}`)
            }
          }

          expectedReturnType = expectedType.returnType
        }

        const nestedCtx = ctx.newChild()
        expr.parameters.forEach((param) => {
          nestedCtx.scope.set(param.name, param.paramType)
        })

        return T.fn(
          params.map(p => p.paramType),
          inferType({
            ctx: nestedCtx,
            expr: returnValue,
            expectedType: expectedReturnType,
          }),
        )
      }
      case 'Sequence':
        inferType({ ctx, expr: expr.expr1, expectedType: T.Unit })
        return inferType({ ctx, expr: expr.expr2, expectedType })
      case 'Tuple': {
        if (expectedType) {
          if (expectedType.type !== 'TypeTuple') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_TUPLE', `Expected expression of type ${t(expectedType)}, but got Tuple.`)
          }

          const expectedLength = expectedType.types.length
          const actualLength = expr.exprs.length
          if (actualLength !== expectedLength) {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_TUPLE_LENGTH', `Expected tuple to have length ${expectedLength}, but got ${actualLength}.`)
          }
        }

        return T.Tuple(expr.exprs.map((expr, i) => (
          inferType({ expr, ctx, expectedType: expectedType?.types[i] })
        )))
      }
      case 'DotTuple': {
        const tupleType = inferType({ expr: expr.expr, ctx })
        if (tupleType.type !== 'TypeTuple') {
          throw new TypecheckingFailedError('ERROR_NOT_A_TUPLE', `Tuple member access is only allowed for Tuples, not ${t(tupleType)}.`)
        }

        // In tuples indexes are 1-based.
        if (expr.index < 1 || expr.index > tupleType.types.length) {
          throw new TypecheckingFailedError('ERROR_TUPLE_INDEX_OUT_OF_BOUNDS', `Cannot access member with index ${expr.index} of type ${t(tupleType)}.`)
        }

        return tupleType.types[expr.index - 1]
      }
      case 'Record': {
        let expectedFieldTypes: Record<string, Type>
        if (expectedType) {
          if (expectedType.type !== 'TypeRecord') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_RECORD', `Expected expression of type ${t(expectedType)}, but got Record.`)
          }

          const expectedLabels = expectedType.fieldTypes.map(f => f.label)
          const presentLables = expr.bindings.map(b => b.name)

          const missingLabels = expectedLabels.filter(l => !presentLables.includes(l))
          if (missingLabels.length > 0) {
            throw new TypecheckingFailedError('ERROR_MISSING_RECORD_FIELDS', `Record doesn't have required field(s): ${missingLabels.join(', ')}.`)
          }

          const unexpectedLabels = presentLables.filter(l => !expectedLabels.includes(l))
          if (unexpectedLabels.length > 0) {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_RECORD_FIELDS', `Record has unexpected field(s): ${unexpectedLabels.join(', ')}.`)
          }

          expectedFieldTypes = Object.fromEntries(
            expectedType.fieldTypes.map(field => (
              [field.label, field.fieldType]
            )),
          )
        }

        return T.Record(
          Object.fromEntries(
            expr.bindings.map(binding => (
              [binding.name, inferType({ expr: binding.expr, ctx, expectedType: expectedFieldTypes?.[binding.name] })]
            )),
          ),
        )
      }
      case 'DotRecord': {
        const recordType = inferType({ expr: expr.expr, ctx })
        if (recordType.type !== 'TypeRecord') {
          throw new TypecheckingFailedError('ERROR_NOT_A_RECORD', `Record field access in only allowed for Records, not ${t(recordType)}.`)
        }

        const accessedField = recordType.fieldTypes.find(field => field.label === expr.label)
        if (!accessedField) {
          throw new TypecheckingFailedError('ERROR_UNEXPECTED_FIELD_ACCESS', `Field with label "${expr.label}" is not present in the ${t(recordType)}.`)
        }

        return accessedField.fieldType
      }
      case 'Let': {
        const nestedCtx = ctx.newChild()
        expr.patternBindings.forEach((binding) => {
          if (binding.pattern.type !== 'PatternVar') {
            throw new Error(`Let with binding patterns of type ${binding.pattern.type} are not supported.`)
          }
          nestedCtx.scope.set(binding.pattern.name, inferType({ expr: binding.rhs, ctx }))
        })

        return inferType({ expr: expr.body, ctx: nestedCtx, expectedType })
      }
      case 'TypeAscription': {
        const { expr: innerExpr, ascribedType } = expr

        if (expectedType) {
          expect(ascribedType).toBe(expectedType)
        }

        return inferType({ expr: innerExpr, ctx, expectedType: ascribedType })
      }
      case 'ListIsEmpty': {
        const inferredType = inferType({ expr: expr.expr, ctx })
        if (inferredType.type !== 'TypeList') {
          throw new TypecheckingFailedError('ERROR_NOT_A_LIST', `List::isempty expects a list as an argument, but got ${t(inferredType)}.`)
        }
        return T.Bool
      }
      case 'Cons': {
        let expectedItemsType
        if (expectedType) {
          if (expectedType.type !== 'TypeList') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_LIST', `Expected expression of type ${t(expectedType)}, but got Cons.`)
          }
          expectedItemsType = expectedType.elementType
        }

        const { head, tail } = expr
        const itemsType = inferType({ expr: head, ctx, expectedType: expectedItemsType })
        return inferType({ expr: tail, ctx, expectedType: T.ListOf(itemsType) })
      }
      case 'List': {
        let itemsType
        if (expectedType) {
          if (expectedType.type !== 'TypeList') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_LIST', `Expected expression of type ${t(expectedType)}, but got List.`)
          }
          itemsType = expectedType.elementType
        }
        for (const item of expr.exprs) {
          itemsType = inferType({ expr: item, ctx, expectedType: itemsType })
        }

        if (!itemsType) {
          throw new TypecheckingFailedError('ERROR_AMBIGUOUS_LIST_TYPE', `Cannot infer type for an empty list, provide the expected type explicitly.`)
        }

        return T.ListOf(itemsType)
      }
      case 'ListHead': {
        const { expr: innerExpr } = expr
        const innerExprType = inferType({
          expr: innerExpr,
          ctx,
          expectedType: expectedType
            ? T.ListOf(expectedType)
            : undefined,
        })
        if (innerExprType.type !== 'TypeList') {
          throw new TypecheckingFailedError('ERROR_NOT_A_LIST', `List::head expects a list as an argument, but got ${t(innerExprType)}.`)
        }
        return innerExprType.elementType
      }
      case 'ListTail': {
        const { expr: innerExpr } = expr
        const innerExprType = inferType({
          expr: innerExpr,
          ctx,
          expectedType: (expectedType && expectedType.type === 'TypeList')
            ? expectedType
            : undefined,
        })
        if (innerExprType.type !== 'TypeList') {
          throw new TypecheckingFailedError('ERROR_NOT_A_LIST', `List::tail expects a list as an argument, but got ${t(innerExprType)}.`)
        }
        return innerExprType
      }
      case 'Inl': {
        const inlExpr = expr.expr

        if (expectedType) {
          if (expectedType.type !== 'TypeSum') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_INJECTION', `Expected ${t(expectedType)}, but got left injection.`)
          }
          return T.Sum(
            inferType({ expr: inlExpr, ctx, expectedType: expectedType.left }),
            expectedType.right,
          )
        } else {
          throw new TypecheckingFailedError('ERROR_AMBIGUOUS_SUM_TYPE', `Cannot infer type for left injection, provide the expected type explicitly.`)
        }
      }
      case 'Inr': {
        const inrExpr = expr.expr

        if (expectedType) {
          if (expectedType.type !== 'TypeSum') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_INJECTION', `Expected ${t(expectedType)}, but got right injection.`)
          }
          return T.Sum(
            expectedType.left,
            inferType({ expr: inrExpr, ctx, expectedType: expectedType.right }),
          )
        } else {
          throw new TypecheckingFailedError('ERROR_AMBIGUOUS_SUM_TYPE', `Cannot infer type for right injection, provide the expected type explicitly.`)
        }
      }
      case 'Match': {
        const { expr: matchExpr, cases: matchCases } = expr

        if (matchCases.length === 0) {
          throw new TypecheckingFailedError('ERROR_ILLEGAL_EMPTY_MATCHING', 'Match expression must have at least one pattern.')
        }

        const matchExprType = inferType({ expr: matchExpr, ctx }) as Exclude<Type, { type: 'TypeVar' }>

        let matchType: Type | undefined = expectedType
        const exhaustivenessChecker = new MatchExhaustivenessChecker()

        for (const matchCase of matchCases) {
          exhaustivenessChecker.addPattern(matchCase.pattern)
          const nestedCtx = extendContextWithPattern({
            ctx,
            pattern: matchCase.pattern,
            type: matchExprType,
          })
          matchType = inferType({
            ctx: nestedCtx,
            expr: matchCase.expr,
            expectedType: matchType,
          })
        }

        if (!matchType || !exhaustivenessChecker.isExhaustive(matchExprType)) {
          throw new TypecheckingFailedError('ERROR_NONEXHAUSTIVE_MATCH_PATTERNS', `Match is not exhaustive for type ${t(matchExprType)}.`)
        }

        return matchType
      }
      case 'Fix': {
        const { expr: innerExpr } = expr
        const innerExprType = inferType({ ctx, expr: innerExpr })

        if (innerExprType.type !== 'TypeFun') {
          throw new TypecheckingFailedError('ERROR_UNEXPECTED_TYPE_FOR_EXPRESSION', `Fix expects a function, but got ${t(innerExprType)}.`)
        }

        const fixT = innerExprType.parametersTypes[0] ?? innerExprType.returnType
        expect(innerExprType).toBe(T.fn([fixT], fixT))

        return fixT
      }
      case 'Variant': {
        const { label, expr: labelExrp } = expr

        if (!labelExrp) {
          throw new TypecheckingFailedError('ERROR_MISSING_DATA_FOR_LABEL', `Variant has no expression for label "${label}".`)
        }

        if (!expectedType) {
          throw new TypecheckingFailedError('ERROR_AMBIGUOUS_VARIANT_TYPE', `Cannot infer type for variant, provide the expected type explicitly.`)
        }

        if (expectedType.type !== 'TypeVariant') {
          throw new TypecheckingFailedError('ERROR_UNEXPECTED_VARIANT', `Expected expression of type ${t(expectedType)}, but got Variant.`)
        }

        const expectedVariantType = expectedType.fieldTypes.find(f => f.label === label)
        if (!expectedVariantType) {
          throw new TypecheckingFailedError('ERROR_UNEXPECTED_VARIANT_LABEL', `Label "${label}" is not present in the variant type: ${t(expectedType)}`)
        }

        inferType({
          ctx,
          expr: labelExrp,
          expectedType: expectedVariantType.fieldType,
        })

        return expectedType
      }
      case 'Assignment': {
        const { lhs, rhs } = expr

        if (lhs.type !== 'Var') {
          throw new Error('Assignment to a non-variable expression is not supported.')
        }

        const varType = ctx.scope.get(lhs.name)
        if (!varType) {
          throw new TypecheckingFailedError('ERROR_UNDEFINED_VARIABLE', `Variable "${lhs.name}" is not defined.`)
        }

        if (varType.type !== 'TypeRef') {
          throw new TypecheckingFailedError('ERROR_NOT_A_REFERENCE', `Cannot assign to expression of type ${t(varType)}.`)
        }

        inferType({ ctx, expr: rhs, expectedType: varType.referredType })
        return T.Unit
      }
      case 'Reference':
        return T.RefTo(inferType({ ctx, expr: expr.expr }))
      case 'Dereference': {
        if (expectedType) {
          inferType({
            ctx,
            expr: expr.expr,
            expectedType: T.RefTo(expectedType),
          })
          return expectedType
        } else {
          const exprType = inferType({ ctx, expr: expr.expr })
          if (exprType.type !== 'TypeRef') {
            throw new TypecheckingFailedError('ERROR_NOT_A_REFERENCE', `Cannot dereference expression of type ${t(exprType)}.`)
          }
          return exprType.referredType
        }
      }
      case 'ConstMemory': {
        if (!expectedType) {
          throw new TypecheckingFailedError('ERROR_AMBIGUOUS_REFERENCE_TYPE', `Cannot infer type for bare memory address, provide the expected type explicitly.`)
        }
        if (expectedType.type !== 'TypeRef') {
          throw new TypecheckingFailedError('ERROR_UNEXPECTED_MEMORY_ADDRESS', `Expected expression of type ${t(expectedType)}, but got bare memory address.`)
        }
        return expectedType
      }
      case 'Panic': {
        if (!expectedType) {
          throw new TypecheckingFailedError('ERROR_AMBIGUOUS_PANIC_TYPE', `Cannot infer type for panic, provide the expected type explicitly.`)
        }
        return expectedType
      }
      case 'Throw': {
        if (!expectedType) {
          throw new TypecheckingFailedError('ERROR_AMBIGUOUS_THROW_TYPE', `Cannot infer type for throw, provide the expected type explicitly.`)
        }
        if (!ctx.exceptionType) {
          throw new TypecheckingFailedError('ERROR_EXCEPTION_TYPE_NOT_DECLARED', `Cannot throw exceptions without exception type declaration.`)
        }
        inferType({
          ctx,
          expr: expr.expr,
          expectedType: ctx.exceptionType,
        })
        return expectedType
      }
      case 'TryWith': {
        return inferType({
          ctx,
          expr: expr.fallbackExpr,
          expectedType: inferType({
            ctx,
            expr: expr.tryExpr,
            expectedType,
          }),
        })
      }
      case 'TryCatch': {
        if (!ctx.exceptionType) {
          throw new TypecheckingFailedError('ERROR_EXCEPTION_TYPE_NOT_DECLARED', `Cannot catch exceptions without exception type declaration.`)
        }

        const { tryExpr, fallbackExpr, pattern: fallbackPattern } = expr
        const tryExprType = inferType({ ctx, expr: tryExpr, expectedType })

        return inferType({
          ctx: extendContextWithPattern({
            ctx,
            pattern: fallbackPattern,
            type: ctx.exceptionType,
          }),
          expr: fallbackExpr,
          expectedType: tryExprType,
        })
      }
      case 'Equal':
      case 'NotEqual':
      case 'GreaterThan':
      case 'GreaterThanOrEqual':
      case 'LessThan':
      case 'LessThanOrEqual':
        inferType({ expr: expr.left, ctx, expectedType: T.Nat })
        inferType({ expr: expr.right, ctx, expectedType: T.Nat })
        return T.Bool
      case 'Add':
      case 'Subtract':
      case 'Multiply':
      case 'Divide':
        inferType({ expr: expr.left, ctx, expectedType: T.Nat })
        inferType({ expr: expr.right, ctx, expectedType: T.Nat })
        return T.Nat
      case 'LogicalAnd':
      case 'LogicalOr':
        inferType({ expr: expr.left, ctx, expectedType: T.Bool })
        inferType({ expr: expr.right, ctx, expectedType: T.Bool })
        return T.Bool
      case 'LogicalNot':
        inferType({ expr: expr.expr, ctx, expectedType: T.Bool })
        return T.Bool
      default:
        throw new Error(`Cannot infer type for expression "${expr.type}".`)
    }
  })()

  if (expectedType) {
    expect(inferredType).toBe(expectedType)
  }

  if (DEBUG) {
    _depth--
  }

  return inferredType
}

function expect(actualType: Type) {
  return {
    toBe: (expectedType: Type) => {
      if (!areTypesEqual(actualType, expectedType)) {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_TYPE_FOR_EXPRESSION', `Expected expression to be of type ${t(expectedType)}, but got ${t(actualType)}.`)
      }
    },
  }
}

function extendContextWithPattern({
  ctx,
  pattern,
  type,
}: {
  ctx: Context
  pattern: Pattern
  type: Type
}): Context {
  switch (pattern.type) {
    case 'PatternVar': {
      const nestedCtx = ctx.newChild()
      nestedCtx.scope.set(pattern.name, type)
      return nestedCtx
    }
    case 'PatternInl':
      if (type.type !== 'TypeSum') {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_PATTERN_FOR_TYPE', `Left injection pattern is not supported for type ${t(type)}.`)
      }
      return extendContextWithPattern({
        ctx,
        pattern: pattern.pattern,
        type: type.left,
      })
    case 'PatternInr':
      if (type.type !== 'TypeSum') {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_PATTERN_FOR_TYPE', `Right injection pattern is not supported for type ${t(type)}.`)
      }
      return extendContextWithPattern({
        ctx,
        pattern: pattern.pattern,
        type: type.right,
      })
    case 'PatternVariant': {
      if (type.type !== 'TypeVariant') {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_VARIANT', `Variant pattern is not supported for type ${t(type)}.`)
      }
      const variantType = type.fieldTypes.find(f => f.label === pattern.label)
      if (!variantType) {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_PATTERN_FOR_TYPE', `Label "${pattern.label}" is not present in the variant type: ${t(type)}`)
      }
      if (pattern.pattern) {
        if (!variantType.fieldType) {
          throw new Error('Pattern for a variant without a field is not supported.')
        }
        return extendContextWithPattern({
          ctx,
          pattern: pattern.pattern,
          type: variantType.fieldType,
        })
      }
      return ctx
    }
    default:
      throw new TypecheckingFailedError('ERROR_UNEXPECTED_PATTERN_FOR_TYPE', `Match pattern "${pattern.type}" is not supported for type ${t(type)}.`)
  }
}

class MatchExhaustivenessChecker {
  private variable = false
  private inl = false
  private inr = false
  private variants = new Map<string, Extract<Pattern, { type: 'PatternVariant' }>>()

  addPattern(pattern: Pattern) {
    if (pattern.type === 'PatternVar') {
      if (this.variable) {
        throw new Error('Multiple variable patterns are not permitted.')
      }
      this.variable = true
    } else if (pattern.type === 'PatternInl') {
      if (this.inl) {
        throw new Error('Multiple patterns for the left injection are not permitted.')
      }
      this.inl = true
    } else if (pattern.type === 'PatternInr') {
      if (this.inr) {
        throw new Error('Multiple patterns for the right injection are not permitted.')
      }
      this.inr = true
    } else if (pattern.type === 'PatternVariant') {
      // @todo: Make sure whether duplicates check is necessary.
      // if (this.variants.has(pattern.label)) {
      //   throw new Error('Multiple patterns for the same variant are not permitted.')
      // }

      this.variants.set(pattern.label, pattern)
    } else {
      throw new Error(`Match pattern "${pattern.type}" is not supported.`)
    }
  }

  isExhaustive(type: Exclude<Type, { type: 'TypeVar' }>) {
    if (this.variable) {
      return true
    }

    switch (type.type) {
      case 'TypeSum': {
        if (this.inl && this.inr) {
          return true
        }
        break
      }
      case 'TypeVariant': {
        const variantsToCover = new Set(type.fieldTypes.map(f => f.label))
        for (const pattern of this.variants.values()) {
          variantsToCover.delete(pattern.label)
        }
        return variantsToCover.size === 0
      }
      default:
        throw new Error(`Match on type ${t(type)} is not supported.`)
    }

    return false
  }
}
