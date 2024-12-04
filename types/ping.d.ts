declare type PingFunction = (this: void,...args: Array<unknown>) => unknown
declare type PingAPI = {
    [name: string]: PingFunction
}
declare const pings: PingAPI