declare interface FiguraTabList
{
    header?: string
    headerJson?: FiguraTabList.Header
    players: LuaTable<number, string>
    footer?: string
    footerJson?: FiguraTabList.Footer
}
declare namespace FiguraTabList
{
    // TODO: what does Header and Footer contain?
    export interface Header
    {

    }
    export interface Footer
    {

    }
}