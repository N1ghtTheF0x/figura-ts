declare interface FiguraFile
{
    isPathAllowed(path: string): boolean
    allowed(): boolean
    exists(path: string): boolean
    isFile(path: string): boolean
    isDirectory(path: string): boolean
    openReadStream(path: string): FiguraInputStream
    openWriteStream(path: string): FiguraOutputStream
    readString(path: string,encoding: StringEncoding): string
    writeString(path: string,data: string,encoding: StringEncoding): void
    mkdir(path: string): boolean
    mkdirs(path: string): boolean
    delete(path: string): boolean
    list(path: string): LuaTable<number,string> | undefined
}
declare const file: FiguraFile