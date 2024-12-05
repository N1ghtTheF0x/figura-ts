declare interface NetworkAPI
{
    isNetworkingAllowed(): boolean
    isLinkAllowed(link: string): boolean
    readonly http: HttpAPI
}
declare const net: NetworkAPI
declare interface HttpAPI
{
    request(uri: string): HttpRequestBuilder
}
declare interface HttpRequestBuilder
{
    uri(uri: string): this
    method(method: string): this
    body(data: FiguraInputStream | FiguraBuffer): this
    header(header: string,value: string): this
    getUri(): string
    getMethod(): string
    getBody(): FiguraInputStream | FiguraBuffer
    getHeaders(): LuaMap<string,string>
    send(): FiguraFuture<HttpResponse>
}
declare interface HttpResponse
{
    getData(): FiguraInputStream
    getResponseCode(): number
    getHeaders(): LuaTable<string,LuaTable<number,string>>
}