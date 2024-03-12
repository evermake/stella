import process from 'node:process'
import type {
  Type,
  TypeBool,
  TypeBottom,
  TypeFun,
  TypeList,
  TypeNat,
  TypeRecord,
  TypeRef,
  TypeSum,
  TypeTop,
  TypeTuple,
  TypeUnit,
  TypeVariant,
} from './ast'
import { TypecheckingFailedError } from './errors'

export const DEBUG = Boolean(process.env.DEBUG)

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
    case 'TypeList':
      return `[${t(type.elementType)}]`
    case 'TypeSum': {
      const strLeft = type.left.type === 'TypeSum' ? `(${t(type.left)})` : t(type.left)
      const strRight = type.right.type === 'TypeSum' ? `(${t(type.right)})` : t(type.right)
      return `${strLeft} + ${strRight}`
    }
    case 'TypeVariant':
      return `<| ${type.fieldTypes.map(f => `${f.label} : ${f.fieldType ? t(f.fieldType) : '—'}`).join(', ')} |>`
    case 'TypeRef':
      return `&${t(type.referredType)}`
    case 'TypeTop':
      return 'Top'
    case 'TypeBottom':
      return 'Bot'
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

  get Top(): TypeTop {
    return { type: 'TypeTop' }
  }

  get Bot(): TypeBottom {
    return { type: 'TypeBottom' }
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

  Sum(a: Type, b: Type): TypeSum {
    return {
      type: 'TypeSum',
      left: a,
      right: b,
    }
  }

  ListOf(elementType: Type): TypeList {
    return { type: 'TypeList', elementType }
  }

  RefTo(type: Type): TypeRef {
    return {
      type: 'TypeRef',
      referredType: type,
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
    case 'TypeTop':
    case 'TypeBottom':
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

      const presentLables = Object.keys(fields1)
      const expectedLabels = Object.keys(fields2)

      const missingLabels = expectedLabels.filter(l => !presentLables.includes(l))
      if (missingLabels.length > 0) {
        throw new TypecheckingFailedError('ERROR_MISSING_RECORD_FIELDS', `Record doesn't have required field(s): ${missingLabels.join(', ')}.`)
      }

      const unexpectedLabels = presentLables.filter(l => !expectedLabels.includes(l))
      if (unexpectedLabels.length > 0) {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_RECORD_FIELDS', `Record has unexpected field(s): ${unexpectedLabels.join(', ')}.`)
      }

      const allLabels = new Set([
        ...(presentLables),
        ...(expectedLabels),
      ])

      for (const label of allLabels) {
        const t1 = fields1[label]
        const t2 = fields2[label]
        if (!t1 || !t2) {
          return false
        } else if (!areTypesEqual(t1, t2)) {
          return false
        }
      }

      return true
    }
    case 'TypeList': {
      const t2_ = t2 as TypeList
      return areTypesEqual(t1.elementType, t2_.elementType)
    }
    case 'TypeSum': {
      const t2_ = t2 as TypeSum
      return areTypesEqual(t1.left, t2_.left) && areTypesEqual(t1.right, t2_.right)
    }
    case 'TypeVariant': {
      const t2_ = t2 as TypeVariant
      const t1Fields = Object.fromEntries(t1.fieldTypes.map(f => [f.label, f.fieldType]))
      const t2Fields = Object.fromEntries(t2_.fieldTypes.map(f => [f.label, f.fieldType]))
      const t1Labels = new Set(Object.keys(t1Fields))
      const t2Labels = new Set(Object.keys(t2Fields))

      if (t1Labels.size !== t2Labels.size) {
        return false
      }
      for (const label of t1Labels.values()) {
        if (!t2Labels.has(label)) {
          return false
        }
        const field1Type = t1Fields[label]
        const field2Type = t2Fields[label]
        if (!field1Type || !field2Type) {
          throw new Error('Variant field type is undefined.')
        }
        if (!areTypesEqual(field1Type, field2Type)) {
          return false
        }
      }
      return true
    }
    case 'TypeRef': {
      const t2_ = t2 as TypeRef
      return areTypesEqual(t1.referredType, t2_.referredType)
    }
    default:
      throw new Error(`Comparison of types "${t1.type}" is not implemented.`)
  }
}

export function isSubtypeOf(
  subtype: Type,
  supertype: Type,
): boolean {
  if (supertype.type === 'TypeTop') {
    return true
  } else if (subtype.type === 'TypeTop') {
    return false
  } else if (subtype.type === 'TypeBottom') {
    return true
  } else if (supertype.type === 'TypeBottom') {
    return false
  }

  // subtype and supertype are neither top nor bottom here

  if (subtype.type !== supertype.type) {
    // In Stella all the types are disjoint, so if the types are different,
    // they are not assignable.
    return false
  }

  switch (subtype.type) {
    case 'TypeNat':
    case 'TypeBool':
    case 'TypeUnit':
      return true
    case 'TypeRecord': {
      const supertype_ = supertype as TypeRecord
      for (const superFieldType of supertype_.fieldTypes) {
        const subFieldType = subtype.fieldTypes.find(f => f.label === superFieldType.label)
        if (!subFieldType) {
          throw new TypecheckingFailedError('ERROR_MISSING_RECORD_FIELDS', `Missing field "${superFieldType.label}" in record type ${t(subtype)}.`)
        }
        if (!isSubtypeOf(subFieldType.fieldType, superFieldType.fieldType)) {
          return false
        }
      }
      return true
    }
    case 'TypeFun': {
      const supertype_ = supertype as TypeFun
      const subParams = subtype.parametersTypes // S1
      const subReturn = subtype.returnType // S2
      const superParams = supertype_.parametersTypes // T1
      const superReturn = supertype_.returnType // T2

      if (subParams.length !== superParams.length) {
        return false
      }

      if (!subParams.every((subParam, i) => isSubtypeOf(superParams[i], subParam))) {
        return false
      }

      return isSubtypeOf(subReturn, superReturn)
    }
    case 'TypeSum': {
      const supertype_ = supertype as TypeSum
      return (
        isSubtypeOf(subtype.left, supertype_.left)
        && isSubtypeOf(subtype.right, supertype_.right)
      )
    }
    case 'TypeVariant': {
      // (TaPL) The subtyping rules for variants are nearly identical to the ones for
      // records; the only difference is that the width rule S-VariantWidth
      // allows new variants to be added, not dropped, when moving from a
      // subtype to a supertype.

      const supertype_ = supertype as TypeVariant
      const subFields = subtype.fieldTypes
      const superFields = supertype_.fieldTypes

      // Supertype must include all the fields of the subtype
      for (const subField of subFields) {
        const superField = superFields.find(f => f.label === subField.label)

        if (!superField) {
          throw new TypecheckingFailedError('ERROR_UNEXPECTED_VARIANT_LABEL', `Unexpected label "${subField.label}" in variant type ${t(subtype)}.`)
        }

        if (!subField.fieldType || !superField.fieldType) {
          // @todo What to do in this case?
          throw new Error(`Undefined field type in variant for ${subField.label}.`)
        }
        if (!isSubtypeOf(subField.fieldType, superField.fieldType)) {
          return false
        }
      }

      return true
    }
    case 'TypeTuple': {
      const supertype_ = supertype as TypeTuple
      const subTypes = subtype.types
      const superTypes = supertype_.types
      if (subTypes.length !== superTypes.length) {
        return false
      }
      return subTypes.every((subType, i) => isSubtypeOf(subType, superTypes[i]))
    }
    case 'TypeList': {
      const supertype_ = supertype as TypeList
      return isSubtypeOf(subtype.elementType, supertype_.elementType)
    }
    case 'TypeRef': {
      const supertype_ = supertype as TypeRef
      return (
        isSubtypeOf(subtype.referredType, supertype_.referredType)
        && isSubtypeOf(supertype_.referredType, subtype.referredType)
      )
    }
    default:
      throw new Error(`Comparison of subtype checking for "${subtype.type}" is not implemented.`)
  }
}

export function expect(actualType: Type) {
  return {
    toEqual: (expectedType: Type) => {
      if (!areTypesEqual(actualType, expectedType)) {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_TYPE_FOR_EXPRESSION', `Expected expression to be of type ${t(expectedType)}, but got ${t(actualType)}.`)
      }
    },
    toBeSubtypeOf: (superType: Type) => {
      if (!isSubtypeOf(actualType, superType)) {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_SUBTYPE', `Expected expression to be of type ${t(superType)} or a subtype, but got ${t(actualType)}.`)
      }
    },
  }
}
