declare interface FiguraConfig<Data = {}>
{
    getName(): string
    setName(name: string): FiguraConfig
    name(name: string): FiguraConfig
    save<Key extends string,Value>(key: Key,value: Value): FiguraConfig<Data & {[x in Key]: Value}>
    load(): Data
    load<Key extends keyof Data>(key: Key): Data[Key]
}
declare const config: FiguraConfig