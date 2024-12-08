declare namespace Minecraft
{
    export interface ItemComponent
    {
        slot: number
        id: string
        count?: number
        components?: ComponentMap
    }
    export interface BlockEntityComponent
    {
        id: string
        keepPacked: boolean
        x: number
        y: number
        z: number
        components?: ComponentMap
    }
    export type ComponentMap = Record<string,Components>
    export type Components = unknown
}