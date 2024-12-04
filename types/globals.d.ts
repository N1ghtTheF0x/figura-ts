declare function require(this: void,scriptName: string): unknown
declare function listFiles(this: void): LuaTable
declare function listFiles(this: void,folder: string): LuaTable
declare function listFiles(this: void,folder: string,subFolders: boolean): LuaTable
declare function print(this: void,...args: Array<unknown>): string
declare function log(this: void,...args: Array<unknown>): string
declare function printTable(this: void,table: LuaTable): string
declare function printTable(this: void,javaObject: unknown): string
declare function printTable(this: void,table: LuaTable,maxDepth: number): string
declare function printTable(this: void,javaObject: unknown,maxDepth: number): string
declare function printTable(this: void,table: LuaTable,maxDepth: number,silent: boolean): string
declare function printTable(this: void,javaObject: unknown,maxDepth: number,silent: boolean): string
declare function printJson(this: void,json: string): string
declare function toJson(this: void,value: unknown): string
declare function parseJson(this: void,jsonString: string): unknown
declare const figuraMetatables: LuaTable