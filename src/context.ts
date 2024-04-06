import type { Extension, Type, TypeTypeVar } from './types'
import { TypecheckingFailedError } from './errors'
import { expect } from './utils'

export class Context {
  #freshTypeVarId: number
  #parent: Context | null
  #symbols: Map<string, Type>
  #extensions: Set<Extension>
  #exceptionType: Type | null = null
  #exceptionOpenVariants: Map<string, Type> = new Map()

  readonly scope: {
    get: (name: string) => Type | undefined
    set: (name: string, type: Type) => void
    has: (name: string) => boolean
  }

  readonly extensions: {
    has: (ext: Extension) => boolean
    add: (ext: Extension) => void
  }

  constructor(parent: Context | null = null) {
    this.#freshTypeVarId = 1
    this.#parent = parent
    this.#symbols = new Map()
    this.#extensions = new Set()

    this.scope = {
      get: name => (this.#symbols.get(name) ?? this.#parent?.scope.get(name)),
      set: (name, type) => void this.#symbols.set(name, type),
      has: name => this.#symbols.has(name) || (this.#parent?.scope.has(name) ?? false),
    }

    this.extensions = {
      has: ext => this.#extensions.has(ext) || (this.#parent?.extensions.has(ext) ?? false),
      add: ext => void this.#extensions.add(ext),
    }
  }

  newChild(): Context {
    return new Context(this)
  }

  get exceptionType(): Type | null {
    const type = this.#exceptionType
      ?? this.#parent?.exceptionType
      ?? null

    if (type) {
      return type
    }

    const variants = Object.entries(this.getExceptionOpenVariants())
    if (variants.length > 0) {
      return {
        type: 'TypeVariant',
        fieldTypes: variants.map(([label, type]) => ({
          type: 'VariantFieldType',
          label,
          fieldType: type,
        })),
      }
    }

    return null
  }

  set exceptionType(type: Type) {
    this.#exceptionType = type
  }

  addOpenVariant(label: string, type: Type): void {
    this.#exceptionOpenVariants.set(label, type)
  }

  protected getExceptionOpenVariants(): { [label in string]: Type } {
    return {
      ...(this.#parent?.getExceptionOpenVariants() ?? {}),
      ...(Object.fromEntries(this.#exceptionOpenVariants)),
    }
  }

  public get subtypingEnabled(): boolean {
    return this.extensions.has('#structural-subtyping')
  }

  public get typeReconstructionEnabled(): boolean {
    return this.extensions.has('#type-reconstruction')
  }

  isTypeAssignableTo(t1: Type, t2: Type, doThrow: boolean = true) {
    try {
      if (this.subtypingEnabled) {
        expect(t1).toBeSubtypeOf(t2)
      } else {
        expect(t1).toEqual(t2)
      }
      return true
    } catch (err) {
      if (!doThrow && err instanceof TypecheckingFailedError) {
        return false
      }
      throw err
    }
  }

  throwAmbiguousErrorIfNoExtension(error: TypecheckingFailedError) {
    if (!this.extensions.has('#ambiguous-type-as-bottom')) {
      throw error
    }
  }

  public freshTypeVar(): TypeTypeVar {
    if (this.#parent) {
      return this.#parent.freshTypeVar()
    }
    return { type: 'TypeTypeVar', id: this.#freshTypeVarId++ }
  }
}
