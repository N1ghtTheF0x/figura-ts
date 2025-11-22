declare interface FiguraAvatar
{
    metadata: FiguraAvatar.Metadata
    resources?: Minecraft.NBTCompound<Record<number,number>>
    animations?: Minecraft.NBTList<FiguraAvatar.Animation>
    sounds?: Minecraft.NBTCompound<Minecraft.NBTByteArray>
    scripts?: Minecraft.NBTCompound<Minecraft.NBTByteArray>
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
        autoAnims?: Minecraft.NBTList<string>
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
        code?: Minecraft.NBTList<Animation.Code>
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
        data: Minecraft.NBTList<Textures.Data>
        src: Minecraft.NBTCompound<Minecraft.NBTByteArray>
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
        piv?: Minecraft.NBTVector3
        chld: Minecraft.NBTList<Model>
        name: string
        pt?: string
        anim?: Minecraft.NBTList<Model.Animation>
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
                    pre: Minecraft.NBTVector3
                    time: number
                    int: string
                }
            }
        }
    }
}