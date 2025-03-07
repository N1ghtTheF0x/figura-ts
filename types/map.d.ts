declare interface FiguraMapData
{
    center_x: number
    center_y: number
    locked: boolean
    scale: number
}

declare namespace FiguraMapData
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