declare type NBTByteArray = Array<number>
declare type NBTList<T> = Array<T>
declare type NBTCompound<T> = Record<string,T>
declare type NBTVector3 = Record<0 | 1 | 2,number>

declare interface FiguraAvatar
{
    metadata: FiguraAvatar.Metadata
    resources?: NBTCompound<Record<number,number>>
    animations?: NBTList<FiguraAvatar.Animation>
    sounds?: NBTCompound<NBTByteArray>
    scripts?: NBTCompound<NBTByteArray>
    textures?: FiguraAvatar.Textures
    models?: FiguraAvatar.Model
}
declare namespace FiguraAvatar
{
    export interface Metadata
    {
        name: string
        authors: string
        version: string
        id?: string
        color?: string
        minify?: boolean
        autoAnims?: NBTList<string>
    }
    export interface Animation
    {
        mdl: string
        name: string
        loop?: string
        ovr?: boolean
        len?: number
        off?: number
        bld?: number
        sdel?: number
        ldel?: number
        code?: NBTList<Animation.Code>
    }
    export namespace Animation
    {
        export interface Code
        {
            time: number
            src: string
        }
    }
    export interface Textures
    {
        data: NBTList<Textures.Data>
        src: NBTCompound<NBTByteArray>
    }
    export namespace Textures
    {
        export interface Data
        {
            d: string
            e?: string
        }
    }
    export interface Model
    {
        piv?: NBTVector3
        chld: NBTList<Model>
        name: string
        pt?: string
        anim?: NBTList<Model.Animation>
    }
    export namespace Model
    {
        export interface Animation
        {
            id: number
            data: Animation.Data
        }
        export namespace Animation
        {
            export interface Data
            {
                pos: Data.Position
            }
            export namespace Data
            {
                export interface Position
                {
                    pre: NBTVector3
                    time: number
                    int: string
                }
            }
        }
    }
}