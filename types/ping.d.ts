declare type AllowedPingType = undefined | boolean | number | string | LuaTable | FiguraVector | FiguraMatrices
// TODO: make this work without casting
declare type PingFunction = (this: void,...args: Array<AllowedPingType>) => void
declare type PingAPI = Record<string,PingFunction>
declare const pings: PingAPI