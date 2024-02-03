import type { Type, TypeFun } from './ast'

/**
 * Stringifies a type.
 */
export function t(type: Type): string {
  switch (type.type) {
    case 'TypeBool':
      return 'Bool'
    case 'TypeNat':
      return 'Nat'
    case 'TypeFun':
      return `fn(${type.parametersTypes.map(t).join(' -> ')}) -> ${t(type.returnType)}`
    case 'TypeVar':
      return 'Var'
    default:
      return type.type
  }
}

export function areTypesEqual(t1: Type, t2: Type): boolean {
  if (t1.type !== t2.type) {
    return false
  }

  switch (t1.type) {
    case 'TypeNat':
    case 'TypeBool':
    case 'TypeUnit':
    case 'TypeTop':
    case 'TypeBottom':
      return true
    case 'TypeFun': {
      const t2_ = t2 as TypeFun
      const params1 = t1.parametersTypes
      const params2 = t2_.parametersTypes
      if (params1.length !== params2.length) {
        return false
      }
      if (!areTypesEqual(t1.returnType, t2_.returnType)) {
        return false
      }
      for (let i = 0; i < params1.length; i++) {
        if (!areTypesEqual(params1[i], params2[i])) {
          return false
        }
      }
      return true
    }
    default:
      throw new Error(`Cannot compare type "${t1.type}".`)
  }
}
