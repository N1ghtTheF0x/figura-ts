declare interface FiguraJson
{
    newBuilder(): FiguraJsonBuilder
    newArray(): FiguraJsonArray
    newObject(): FiguraJsonObject
    isSerializable(val: boolean | number | string | undefined): true
    isSerializable(val: any): boolean
}
declare const json: FiguraJson
type FiguraJsonArrayLike<T> = {[x: number]: T}
declare interface FiguraJsonArray<T = any> extends FiguraJsonArrayLike<T>
{
    get(index: number): T
    size(): number
    contains(elem: T): boolean
    add(elem: T): boolean
    insert(index: number,elem: T): void
    set(index: number,elem: T): void
    removeAt(index: number): T
    remove(elem: T): boolean
    indexOf(elem: T): number
    lastIndexOf(elem: T): number
    clear(): void
}
declare interface FiguraJsonBuilder
{
    prettyPrinting: boolean
    htmlEscaping: boolean
    serializeNils: boolean
    build(): FiguraJsonSerializer
}
declare interface FiguraJsonObject<T = object> extends LuaIterable<LuaMultiReturn<[string,T]>>
{
    size(): number
    get<Key extends keyof T>(key: Key): T[Key]
    containsKey<Key extends string>(key: Key): this is FiguraJsonObject<T & {[key in Key]: any}>
    put(key: string,value: T): T
    remove<Key extends keyof T>(key: Key): T[Key]
    clear(): void
    containsValue<V>(value: V): this is FiguraJsonObject<T & {[key: string]: V}>
}
declare interface FiguraJsonSerializer
{
    serialize(val: any): string
    deserialize<T>(str: string): T
}