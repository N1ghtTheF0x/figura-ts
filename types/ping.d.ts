declare type AllowedPingType = undefined | boolean | number | string | LuaTable | FiguraVector | FiguraMatrices
declare type PingFunction = (this: void,...args: Array<any>) => void
declare type PingAPI = Record<string,PingFunction>
declare const pings: PingAPI