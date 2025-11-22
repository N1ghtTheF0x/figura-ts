declare function require<V>(this: void,scriptName: string): V
declare function listFiles(this: void): LuaTable<number,string>
declare function listFiles(this: void,folder: string): LuaTable<number,string>
declare function listFiles(this: void,folder: string,subFolders: boolean): LuaTable<number,string>
declare function print(this: void,...args: Array<any>): string
declare function log(this: void,...args: Array<any>): string
declare function printTable(this: void,table: LuaTable): string
declare function printTable(this: void,javaObject: any): string
declare function printTable(this: void,table: LuaTable,maxDepth: number): string
declare function printTable(this: void,javaObject: any,maxDepth: number): string
declare function printTable(this: void,table: LuaTable,maxDepth: number,silent: boolean): string
declare function printTable(this: void,javaObject: any,maxDepth: number,silent: boolean): string
declare function printJson(this: void,json: string): string
declare function toJson(this: void,value: any): string
declare function parseJson<V>(this: void,jsonString: string): V
declare const figuraMetatables: LuaTable