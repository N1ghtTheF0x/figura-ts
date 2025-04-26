declare namespace Minecraft
{
    export type NBTList<T> = ArrayLike<T>
    export type NBTByteArray = ArrayLike<number>
    export type NBTCompound<T> = Record<string,T>
    export type NBTBoolean = 1 | 0
    export type NBTVector2 = Record<0 | 1,number>
    export type NBTVector3 = Record<0 | 1 | 2,number>
    export type NBTUUID = Record<0 | 1 | 2 | 3,number>
}