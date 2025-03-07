declare type FiguraAllowedPingType = undefined | boolean | number | string | LuaTable | FiguraAnyVector | FiguraAnyMatrix
declare type FiguraPingFunction = (this: void,...args: Array<any>) => void
declare type FiguraPings = Record<string,FiguraPingFunction>
declare const pings: FiguraPings