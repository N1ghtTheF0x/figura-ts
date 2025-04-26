declare type FiguraAllowedConfigType = boolean | number | string | LuaTable | FiguraAnyVector | FiguraAnyMatrix | undefined

declare interface FiguraConfig
{
    getName(): string
    setName(name: string): FiguraConfig
    name(name: string): FiguraConfig
    save(key: string,value: FiguraAllowedConfigType): FiguraConfig
    load(): LuaTable<string,any>
    load<Value extends FiguraAllowedConfigType>(key: string): Value
}
declare const config: FiguraConfig