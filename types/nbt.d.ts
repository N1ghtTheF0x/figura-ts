declare type NBTByteArray = LuaTable<number,number>
declare type NBTList<T> = LuaTable<number,T>
declare type NBTCompound<T> = LuaTable<string,T>
declare type NBTVector3 = LuaTable<0 | 1 | 2,number>

declare interface AvatarNBT
{
    metadata: AvatarNBT.Metadata
    resources?: NBTCompound<Record<number,number>>
    animations?: NBTList<AvatarNBT.Animation>
    sounds?: NBTCompound<NBTByteArray>
    scripts?: NBTCompound<NBTByteArray>
    textures?: AvatarNBT.Textures
    models?: AvatarNBT.Model
}
declare namespace AvatarNBT
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