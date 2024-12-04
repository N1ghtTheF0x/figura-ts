declare interface TabList
{
    header?: string
    headerJson?: TabList.Header
    players: LuaTable<number, string>
    footer?: string
    footerJson?: TabList.Footer
}
declare namespace TabList
{
    export interface Header
    {

    }
    export interface Footer
    {

    }
}