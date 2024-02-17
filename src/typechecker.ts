import type { Decl, DeclFun, Expr, Program, Type } from './ast'
import { TypecheckingFailedError } from './errors'
import type { Extension } from './types'
import { T, areTypesEqual, t } from './utils'
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
        inferType({ expr: decl.returnValue, ctx: localCtx, expectedType: decl.returnType })
      }

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

function inferType({
  expr,
  ctx,
  expectedType,
}: {
  expr: Expr
  ctx: Context
  expectedType?: Type
}): Type {
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
        inferType({ expr: expr.n, ctx, expectedType: T.Nat })

        const initialType = inferType({ expr: expr.initial, ctx, expectedType })
        const expectedStepType = T.fn([T.Nat], T.fn([initialType], initialType))
        inferType({ expr: expr.step, ctx, expectedType: expectedStepType })

        return initialType
      }
      case 'If': {
        inferType({ expr: expr.condition, ctx, expectedType: T.Bool })

        const thenType = inferType({ expr: expr.thenExpr, ctx })
        inferType({ expr: expr.elseExpr, ctx, expectedType: thenType })

        return thenType
      }
      case 'Application': {
        const fnType = inferType({ expr: expr.function, ctx })
        if (fnType.type !== 'TypeFun') {
          throw new TypecheckingFailedError('ERROR_NOT_A_FUNCTION', `Left side of application must be a function, but got ${t(fnType)}.`)
        }

        const expectedArgsCount = fnType.parametersTypes.length
        const actualArgsCount = expr.arguments.length
        if (expectedArgsCount !== actualArgsCount) {
          throw new TypecheckingFailedError('ERROR_INCORRECT_NUMBER_OF_ARGUMENTS', `Function requires ${expectedArgsCount}, but got ${actualArgsCount}.`)
        }

        expr.arguments.forEach((arg, i) => {
          inferType({ expr: arg, ctx, expectedType: fnType.parametersTypes[i] })
        })

        return fnType.returnType
      }
      case 'Abstraction': {
        let expectedReturnType
        if (expectedType) {
          if (expectedType.type !== 'TypeFun') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_LAMBDA', `Expected ${t(expectedType)}, but got lambda.`)
          }

          const expectedArity = expectedType.parametersTypes.length
          const actualArity = expr.parameters.length
          if (actualArity !== expectedArity) {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_NUMBER_OF_PARAMETERS_IN_LAMBDA', `Expected lambda to have ${expectedArity} parameter(s), but got ${actualArity}.`)
          }

          for (let i = 0; i < expectedArity; i++) {
            const expectedParamType = expectedType.parametersTypes[i]
            const actualParam = expr.parameters[i]
            if (!areTypesEqual(expectedParamType, actualParam.paramType)) {
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
          expr.parameters.map(param => param.paramType),
          inferType({ expr: expr.returnValue, ctx: nestedCtx, expectedType: expectedReturnType }),
        )
      }
      case 'Sequence':
        if (expr.expr2) {
          throw new Error('Sequences are not supported.')
        }
        return inferType({ expr: expr.expr1, ctx, expectedType })
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
          expectedType: expectedType ? T.ListOf(expectedType) : undefined,
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
