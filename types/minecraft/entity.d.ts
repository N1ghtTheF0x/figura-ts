declare namespace Minecraft
{
    export interface EntityNBT
    {
        Air: number
        CustomName?: string
        CustomNameVisible: NBTBoolean
        data: NBTCompound<any>
        FallDistance: number
        fall_distance: number
        Fire: number
        Glowing: NBTBoolean
        HasVisualFire: NBTBoolean
        id: string
        Invulnerable: NBTBoolean
        Motion: NBTVector3
        NoGravity: NBTBoolean
        OnGround: NBTBoolean
        Passengers: NBTCompound<EntityNBT>
        PortalCooldown: number
        Pos: NBTVector3
        Rotation: NBTVector2
        Silent: NBTBoolean
        Tags: NBTCompound<string>
        TicksFrozen: number
        UUID: NBTUUID
    }
}