declare interface MapData
{
    center_x: number
    center_y: number
    locked: boolean
    scale: number
}

declare namespace MapData
{
    export interface Decoration
    {
        type: string
        name: string
        x: number
        y: number
        rot: number
        image: number
    }
}