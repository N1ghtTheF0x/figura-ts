declare interface PlayerAPI extends LivingEntityAPI
{
    getFood(): number
    getSaturation(): number
    getExhaustion(): number
    getExperienceProgress(): number
    getModelType(): ModelType
    getGamemode(): Gamemode
    hasCape(): boolean
    hasSkin(): boolean
    isSkinLayerVisible(part: string): boolean
    isFishing(): boolean
    getChargedAttackDelay(): number
    getShoulderEntity(): LuaTable
    getShoulderEntity(right: boolean): LuaTable
    getTeamInfo(): LuaMap<string,PlayerTeam>
    getExperienceLevel(): number
    getCooldownPercent(stack: ItemStack,delta: number): number
}
declare const player: PlayerAPI
interface INullEntity
{
    isLoaded(): this is EntityAPI
}
declare type NullEntity = INullEntity & {[x: string]: never}
declare interface EntityAPI
{
    isLoaded(): boolean
    getPos(): Vector3
    getPos(delta: number): Vector3
    getRot(): Vector2
    getRot(delta: number): Vector2
    getUUID(): string
    getType(): `${string}:${string}`
    getVelocity(): Vector3
    getLookDir(): Vector3
    getFrozenTicks(): number
    getMaxAir(): number
    getDimensionName(): string
    getPose(): EntityPoses
    getVehicle(): EntityAPI | undefined
    isOnGround(): boolean
    getEyeHeight(): number
    getBoundingBox(): Vector3
    getName(): string
    isWet(): boolean
    isInWater(): boolean
    isUnderwater(): boolean
    isInLava(): boolean
    isInRain(): boolean
    hasAvatar(): boolean
    isSprinting(): boolean
    getEyeY(): number
    isGlowing(): boolean
    isInvisible(): boolean
    isSilent(): boolean
    isSneaking(): boolean
    isCrouching(): boolean
    isMoving(): boolean
    isFalling(): boolean
    getItem(index: number): ItemStack
    getNBT(): LuaTable
    isOnFire(): boolean
    isAlive(): boolean
    getPermissionLevel(): number
    getPassengers(): LuaTable<number,EntityAPI>
    getControllingPassenger(): EntityAPI | undefined
    getControlledVehicle(): EntityAPI | undefined
    hasContainer(): boolean
    hasInventory(): boolean
    getTargetedBlock(): LuaMultiReturn<[BlockStateAPI,Vector3,string]> | undefined
    getTargetedBlock(ignoreLiquids: boolean): LuaMultiReturn<[BlockStateAPI,Vector3,string]> | undefined
    getTargetedBlock(ignoreLiquids: boolean,distance: number): LuaMultiReturn<[BlockStateAPI,Vector3,string]> | undefined
    getTargetedEntity(): LuaMultiReturn<[EntityAPI,Vector3]> | undefined
    getTargetedEntity(distance: number): LuaMultiReturn<[EntityAPI,Vector3]> | undefined
    getNearestEntity(type: string): EntityAPI | undefined
    getNearestEntity(type: string,radius: number): EntityAPI | undefined
    getVariable(): LuaTable
    getVariable(key: string): unknown
    isLiving(): this is LivingEntityAPI
    isPlayer(): this is PlayerAPI
}
declare interface LivingEntityAPI extends EntityAPI
{
    getBodyYaw(): number
    getBodyYaw(delta: number): number
    getHeldItem(): ItemStack
    getHeldItem(offhand: boolean): ItemStack
    getActiveItem(): ItemStack
    getActiveItemTime(): number
    getHealth(): number
    getMaxHealth(): number
    getArmor(): number
    getDeathTime(): number
    getArrowCount(): number
    getStingerCount(): number
    isLeftHanded(): boolean
    isUsingItem(): boolean
    getActiveHand(): ActiveHand
    isClimbing(): boolean
    getSwingTime(): number
    isSwingingArm(): boolean
    getSwingArm(): ActiveHand
    getSwingDuration(): number
    getAbsorptionAmount(): number
    isSensitiveToWater(): boolean
    getEntityCategory(): EntityCategory
    isGliding(): boolean
    isBlocking(): boolean
    isVisuallySwimming(): boolean
    riptideSpinning(): boolean
}
declare interface ViewerAPI
{
    getAir(): number
    getAttachCharge(): number
    getReachDistance(): number
    getStatusEffects(): LuaTable
    isFlying(): boolean
    isJumping(): boolean
}