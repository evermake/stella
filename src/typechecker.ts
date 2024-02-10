import type { DeclFun, Expr, Program, Type } from './ast'
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
  for (const decl of ast.declarations) {
    if (decl.type === 'DeclFun') {
      if (!decl.returnType) {
        throw new TypecheckingFailedError('ERROR_MISSING_EXPLICIT_RETURN_TYPE', `Function "${decl.name}" is missing an explicit return type.`)
      }
      ctx.scope.set(decl.name, T.fn(decl.parameters.map(p => p.paramType), decl.returnType))
    }
  }

  // Typecheck all declarations.
  for (const decl of ast.declarations) {
    switch (decl.type) {
      case 'DeclFun':
        typecheckDeclFun(decl, ctx)
        break
      default:
        throw new Error(`Unknown declaration type: "${decl.type}".`)
    }
  }

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

function typecheckDeclFun(decl: DeclFun, ctx: Context) {
  // @todo: decl.annations, decl.nestedDeclarations, decl.throwTypes

  const localCtx = ctx.newChild()

  decl.parameters.forEach((param) => {
    localCtx.scope.set(param.name, param.paramType)
  })

  if (decl.returnType) {
    inferType({ expr: decl.returnValue, ctx: localCtx, expectedType: decl.returnType })
  }
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
      default:
        throw new Error(`Cannot derive type for expression "${expr.type}".`)
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
