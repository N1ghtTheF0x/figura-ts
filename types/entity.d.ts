declare interface FiguraPlayer extends FiguraLivingEntity
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
    getTeamInfo(): LuaMap<string,FiguraPlayerTeam>
    getExperienceLevel(): number
    getCooldownPercent(stack: FiguraItemStack,delta: number): number
}
declare const player: FiguraPlayer
interface IFiguraNullEntity
{
    isLoaded(): this is FiguraEntity
}
declare type FiguraNullEntity = IFiguraNullEntity & {[x: string]: never}
declare interface FiguraEntity
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
    getVehicle(): FiguraEntity | undefined
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
    isMoving(ignoreY: boolean): boolean
    isFalling(): boolean
    getItem(index: number): FiguraItemStack
    getNBT(): LuaTable
    isOnFire(): boolean
    isAlive(): boolean
    getPermissionLevel(): number
    getPassengers(): LuaTable<number,FiguraEntity>
    getControllingPassenger(): FiguraEntity | undefined
    getControlledVehicle(): FiguraEntity | undefined
    hasContainer(): boolean
    hasInventory(): boolean
    getTargetedBlock(): LuaMultiReturn<[FiguraBlockState,FiguraVec3,string]> | undefined
    getTargetedBlock(ignoreLiquids: boolean): LuaMultiReturn<[FiguraBlockState,FiguraVec3,string]> | undefined
    getTargetedBlock(ignoreLiquids: boolean,distance: number): LuaMultiReturn<[FiguraBlockState,FiguraVec3,string]> | undefined
    getTargetedEntity(): LuaMultiReturn<[FiguraEntity,FiguraVec3]> | undefined
    getTargetedEntity(distance: number): LuaMultiReturn<[FiguraEntity,FiguraVec3]> | undefined
    getNearestEntity(type: string): FiguraEntity | undefined
    getNearestEntity(type: string,radius: number): FiguraEntity | undefined
    getVariable(): LuaTable
    getVariable(key: string): unknown
    isLiving(): this is FiguraLivingEntity
    isPlayer(): this is FiguraPlayer
}
declare interface FiguraLivingEntity extends FiguraEntity
{
    getBodyYaw(): number
    getBodyYaw(delta: number): number
    getHeldItem(): FiguraItemStack
    getHeldItem(offhand: boolean): FiguraItemStack
    getActiveItem(): FiguraItemStack
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
declare interface FiguraViewer
{
    getAttachCharge(): number
    isJumping(): boolean
    isFlying(): boolean
    getReachDistance(): number
    getAir(): number
    getStatusEffects(): ReturnType<FiguraHost["getStatusEffects"]>
}