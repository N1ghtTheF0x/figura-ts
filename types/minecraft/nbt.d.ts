declare namespace Minecraft
{
    export type NBTList<T> = ArrayLike<T>
    export type NBTByteArray = ArrayLike<number>
    export type NBTCompound<T> = Record<string,T>
}