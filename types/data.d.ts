declare interface DataAPI
{
    createBuffer(): FiguraBuffer
    createBuffer(capacity: number): FiguraBuffer
}
declare const data: DataAPI
declare interface FiguraBuffer
{
    read(): number
    readShort(): number
    readUShort(): number
    readInt(): number
    readLong(): number
    readFloat(): number
    readDouble(): number
    readShortLE(): number
    readUShortLE(): number
    readIntLE(): number
    readLongLE(): number
    readFloatLE(): number
    readDoubleLE(): number
    readString(): string
    readString(length: number): string
    readString(length: number,encoding: StringEncodings): string
    readBase64(): string
    readBase64(length: number): string
    readByteArray(): string
    readByteArray(length: number): string
    write(val: number): void
    writeShort(val: number): void
    writeUShort(val: number): void
    writeInt(val: number): void
    writeLong(val: number): void
    writeFloat(val: number): void
    writeDouble(val: number): void
    writeShortLE(val: number): void
    writeUShortLE(val: number): void
    writeIntLE(val: number): void
    writeLongLE(val: number): void
    writeFloatLE(val: number): void
    writeDoubleLE(val: number): void
    writeString(val: string): number
    writeString(val: string,encoding: StringEncodings): number
    writeBase64(base64: string): number
    writeByteArray(array: string): number
    getLength(): number
    getPosition(): number
    setPosition(position: number): void
    clear(): void
    available(): number
    getMaxCapacity(): number
    readFromStream(stream: FiguraInputStream,amount: number): number
    writeToStream(stream: FiguraOutputStream,amount: number): number
    close(): void
    isClosed(): boolean
}
declare interface FiguraFuture<T = unknown,Valid extends boolean = false>
{
    isDone(): this is FiguraFuture<T,true>
    getOrError(): Valid extends true ? T : never
    getValue(): T | undefined
    hasError(): this is FiguraFuture<T,false>
    throwError(): Valid extends false ? never : void
}
declare interface FiguraInputStream<ASync extends boolean = false>
{
    read(): ASync extends true ? never : number
    readAsync(): ASync extends true ? FiguraFuture<string> : never
    skip(n: number): number
    available(): number
    close(): void
    mark(readLimit: number): void
    reset(): void
    markSupported(): boolean
    isAsyncOnly(): this is FiguraInputStream<true>
    transferTo(out: FiguraOutputStream): number
}
declare interface FiguraOutputStream
{
    write(b: number): void
    flush(): void
    close(): void
}
// Resources
declare interface ResourcesAPI
{
    get(path: string): FiguraInputStream
    getPaths(): LuaTable<number,string>
}
declare const resources: ResourcesAPI