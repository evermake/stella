import type {
  Type,
  TypeBool,
  TypeFun,
  TypeNat,
  TypeRecord,
  TypeTuple,
  TypeUnit,
} from './ast'

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
      return `Var(${type.name})`
    case 'TypeUnit':
      return 'Unit'
    case 'TypeTuple':
      return `{${type.types.map(t).join(', ')}}`
    case 'TypeRec':
      // @todo: improve this
      return `Rec(type=${type.recType}, var=${type.var})`
    case 'TypeRecord':
      return `{${type.fieldTypes.map(f => `${f.label} : ${t(f.fieldType)}`).join(', ')}}`
    default:
      return type.type
  }
}

/**
 * Utility-class for creating types.
 */
export class _T {
  get Bool(): TypeBool {
    return { type: 'TypeBool' }
  }

  get Nat(): TypeNat {
    return { type: 'TypeNat' }
  }

  get Unit(): TypeUnit {
    return { type: 'TypeUnit' }
  }

  Tuple(types: Type[]): TypeTuple {
    return { type: 'TypeTuple', types }
  }

  Record(types: { [label in string]: Type }): TypeRecord {
    return {
      type: 'TypeRecord',
      fieldTypes: Object.entries(types).map(([label, type]) => ({
        type: 'RecordFieldType',
        label,
        fieldType: type,
      })),
    }
  }

  fn(paramTypes: Type[], returnType: Type): TypeFun {
    return {
      type: 'TypeFun',
      parametersTypes: paramTypes,
      returnType,
    }
  }
}

/**
 * Utility-object for creating types.
 */
export const T = new _T()

export function areTypesEqual(t1: Type, t2: Type): boolean {
  if (t1.type !== t2.type) {
    return false
  }

  switch (t1.type) {
    case 'TypeNat':
    case 'TypeBool':
    case 'TypeUnit':
      return true
    case 'TypeFun': {
      const t2_ = t2 as TypeFun

      if (!areTypesEqual(t1.returnType, t2_.returnType)) {
        return false
      }

      const params1 = t1.parametersTypes
      const params2 = t2_.parametersTypes
      if (params1.length !== params2.length) {
        return false
      }

      return params1.every((p, i) => areTypesEqual(p, params2[i]))
    }
    case 'TypeTuple': {
      const t2_ = t2 as TypeTuple
      if (t1.types.length !== t2_.types.length) {
        return false
      }
      return t1.types.every((t, i) => areTypesEqual(t, t2_.types[i]))
    }
    case 'TypeRecord': {
      const t2_ = t2 as TypeRecord

      const fields1: Record<string, Type> = Object.fromEntries(
        t1.fieldTypes.map(f => [f.label, f.fieldType]),
      )
      const fields2: Record<string, Type> = Object.fromEntries(
        t2_.fieldTypes.map(f => [f.label, f.fieldType]),
      )

      const labels = new Set([...(Object.keys(fields1)), ...(Object.keys(fields2))])

      for (const label of labels.values()) {
        const t1 = fields1[label]
        const t2 = fields2[label]
        if (!t1 || !t2) {
          return false
        }
        if (!areTypesEqual(t1, t2)) {
          return false
        }
      }

      return true
    }
    default:
      throw new Error(`Cannot compare type "${t1.type}".`)
  }
}
