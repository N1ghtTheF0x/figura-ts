declare interface ConfigAPI<Data = {}>
{
    getName(): string
    setName(name: string): ConfigAPI
    name(name: string): ConfigAPI
    save<Key extends string,Value>(key: Key,value: Value): ConfigAPI<Data & {[x in Key]: Value}>
    load(): Data
    load<Key extends keyof Data>(key: Key): Data[Key]
}
declare const config: ConfigAPI