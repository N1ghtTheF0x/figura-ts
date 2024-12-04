declare interface FileAPI
{
    isPathAllowed(path: string): boolean
    allowed(): boolean
    exists(path: string): boolean
    isFile(path: string): boolean
    isDirectory(path: string): boolean
    openReadStream(path: string): FiguraInputStream
    openWriteStream(path: string): FiguraOutputStream
    readString(path: string,encoding: StringEncodings): string
    writeString(path: string,data: string,encoding: StringEncodings): void
    mkdir(path: string): boolean
    mkdirs(path: string): boolean
    delete(path: string): boolean
    list(path: string): LuaTable<number,string>
}
declare const file: FileAPI