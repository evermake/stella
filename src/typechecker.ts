import type { DeclFun, Expr, Program, Type } from './ast'
import { TypecheckingFailedError } from './errors'
import type { Extension } from './types'
import { T, areTypesEqual, t } from './utils'
import { Context } from './context'

export function typecheckProgram(ast: Program) {
  const ctx = new Context()

  ast.extensions.forEach(ext => ctx.extensions.add(ext as Extension))

  // Add all global functions to the scope, so we can correctly typecheck their
  // bodies later, when their calls will be invoked.
  for (const decl of ast.declarations) {
    if (decl.type === 'DeclFun') {
      if (!decl.returnType) {
        throw new TypecheckingFailedError('ERROR_MISSING_EXPLICIT_RETURN_TYPE', `Function "${decl.name}" is missing an explicit return type.`)
      }
      ctx.scope.set(decl.name, {
        type: 'TypeFun',
        parametersTypes: decl.parameters.map(p => p.paramType),
        returnType: decl.returnType,
      })
    }
  }

  for (const decl of ast.declarations) {
    switch (decl.type) {
      case 'DeclFun':
        typecheckDeclFun(decl, ctx)
        break
      default:
        throw new Error(`Typechecking for declaration of type "${decl.type}" is not supported.`)
    }
  }

  checkForValidMainInContext(ctx)
}

function typecheckDeclFun(decl: DeclFun, ctx: Context) {
  // @todo: decl.annations, decl.nestedDeclarations, decl.throwTypes

  const localCtx = ctx.newChild()

  const param = decl.parameters[0]
  const returnVal = decl.returnValue.type === 'Sequence'
    ? decl.returnValue.expr1
    : decl.returnValue

  localCtx.scope.set(param.name, param.paramType)

  if (decl.returnType) {
    inferType({ expr: returnVal, ctx: localCtx, expectedType: decl.returnType })
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
      case 'ConstBool': {
        return T.Bool
      }
      case 'ConstInt': {
        if (ctx.extensions.has('#natural-literals')) {
          if (expr.value < 0) {
            throw new TypecheckingFailedError('ERROR_ILLEGAL_NEGATIVE_LITERAL', `Negative integers are not supported (got ${expr.value}).`)
          }
        } else {
          if (expr.value !== 0) {
            throw new Error('Non-zero integers are not supported.')
          }
        }
        return T.Nat
      }
      case 'Var': {
        const varType = ctx.scope.get(expr.name)
        if (!varType) {
          throw new TypecheckingFailedError('ERROR_UNDEFINED_VARIABLE', `Variable "${expr.name}" is not defined.`)
        }
        return varType
      }
      case 'Succ': {
        inferType({ expr: expr.expr, ctx, expectedType: T.Nat })
        return T.Nat
      }
      case 'NatIsZero': {
        inferType({ expr: expr.expr, ctx, expectedType: T.Nat })
        return T.Bool
      }
      case 'NatRec': {
        inferType({ expr: expr.n, ctx, expectedType: T.Nat })

        const initialType = inferType({ expr: expr.initial, ctx })
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

        inferType({ expr: expr.arguments[0], ctx, expectedType: fnType.parametersTypes[0] })

        return fnType.returnType
      }
      case 'Abstraction': {
        const param = expr.parameters[0]

        let expectedReturnType
        if (expectedType) {
          if (expectedType.type !== 'TypeFun') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_LAMBDA', `Expected ${t(expectedType)}, but got lambda.`)
          }

          const wantedParamType = expectedType.parametersTypes[0]
          if (!areTypesEqual(wantedParamType, param.paramType)) {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_TYPE_FOR_PARAMETER', `Unexpected type for parameter "${param.name}": expected ${t(wantedParamType)}, but got ${t(param.paramType)}.`)
          }

          expectedReturnType = expectedType.returnType
        }

        const nestedCtx = ctx.newChild()
        nestedCtx.scope.set(param.name, param.paramType)

        return T.fn(
          [param.paramType],
          inferType({ expr: expr.returnValue, ctx: nestedCtx, expectedType: expectedReturnType }),
        )
      }
      case 'Sequence': {
        if (expr.expr2) {
          throw new Error('Sequences are not supported.')
        }
        return inferType({ expr: expr.expr1, ctx, expectedType })
      }
      default:
        throw new Error(`Cannot derive type for expression "${expr.type}".`)
    }
  })()

  if (expectedType) {
    expect(inferredType).toBe(expectedType)
  }

  return inferredType
}

function checkForValidMainInContext(ctx: Context) {
  const main = ctx.scope.get('main')
  if (!main) {
    throw new TypecheckingFailedError('ERROR_MISSING_MAIN', '"main" function is not found in the scope.')
  }
  if (main.type !== 'TypeFun') {
    throw new TypecheckingFailedError('ERROR_NOT_A_FUNCTION', `"main" must be a function, not ${t(main)}.`)
  }
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
