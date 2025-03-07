declare interface FiguraNet
{
    isNetworkingAllowed(): boolean
    isLinkAllowed(link: string): boolean
    readonly http: FiguraHttp
}
declare const net: FiguraNet
declare interface FiguraHttp
{
    request(uri: string): FiguraHttpRequestBuilder
}
declare interface FiguraHttpRequestBuilder
{
    uri(uri: string): this
    method(method: string): this
    body(data: FiguraInputStream | FiguraBuffer): this
    header(header: string,value: string): this
    getUri(): string
    getMethod(): string
    getBody(): FiguraInputStream | FiguraBuffer
    getHeaders(): LuaMap<string,string>
    send(): FiguraFuture<FiguraHttpResponse>
}
declare interface FiguraHttpResponse
{
    getData(): FiguraInputStream
    getResponseCode(): number
    getHeaders(): LuaTable<string,LuaTable<number,string>>
}