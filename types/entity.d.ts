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
    getCooldownPercent(stack: ItemStackAPI,delta: number): number
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
    getPos(): FiguraVec3
    getPos(delta: number): FiguraVec3
    getRot(): FiguraVec2
    getRot(delta: number): FiguraVec2
    getUUID(): string
    getType(): `${string}:${string}`
    getVelocity(): FiguraVec3
    getLookDir(): FiguraVec3
    getFrozenTicks(): number
    getMaxAir(): number
    getDimensionName(): string
    getPose(): EntityPose
    getVehicle(): EntityAPI | undefined
    isOnGround(): boolean
    getEyeHeight(): number
    getBoundingBox(): FiguraVec3
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
    getItem(index: number): ItemStackAPI
    getNBT(): LuaTable
    isOnFire(): boolean
    isAlive(): boolean
    getPermissionLevel(): number
    getPassengers(): LuaTable<number,EntityAPI>
    getControllingPassenger(): EntityAPI | undefined
    getControlledVehicle(): EntityAPI | undefined
    hasContainer(): boolean
    hasInventory(): boolean
    getTargetedBlock(): LuaMultiReturn<[BlockStateAPI,FiguraVec3,string]> | undefined
    getTargetedBlock(ignoreLiquids: boolean): LuaMultiReturn<[BlockStateAPI,FiguraVec3,string]> | undefined
    getTargetedBlock(ignoreLiquids: boolean,distance: number): LuaMultiReturn<[BlockStateAPI,FiguraVec3,string]> | undefined
    getTargetedEntity(): LuaMultiReturn<[EntityAPI,FiguraVec3]> | undefined
    getTargetedEntity(distance: number): LuaMultiReturn<[EntityAPI,FiguraVec3]> | undefined
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
    getHeldItem(): ItemStackAPI
    getHeldItem(offhand: boolean): ItemStackAPI
    getActiveItem(): ItemStackAPI
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
    getAttachCharge(): number
    isJumping(): boolean
    isFlying(): boolean
    getReachDistance(): number
    getAir(): number
    getStatusEffects(): ReturnType<HostAPI["getStatusEffects"]>
}