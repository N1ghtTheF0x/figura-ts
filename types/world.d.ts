/** @noSelf **/
declare namespace world
{
    export function exists(): boolean
    export function getBiome(pos: Vector3): BiomeAPI
    export function getBiome(x: number,y: number,z: number): BiomeAPI
    export function getBuildHeight(): LuaMultiReturn<[number,number]>
    export function getDimension(): string
    export function getHeight(pos: Vector2,heightmap: string): number
    export function getHeight(x: number,y: number,heightmap: string): number
    export function getSpawnPoint(): Vector3
    export function isChunkLoaded(pos: Vector3): boolean
    export function isChunkLoaded(x: number,y: number,z: number): boolean
    export function isOpenSky(pos: Vector3): boolean
    export function isOpenSky(x: number,y: number,z: number): boolean
    export function getBlockState(pos: Vector3): BlockStateAPI
    export function getBlockState(x: number,y: number,z: number): BlockStateAPI
    export function getBlocks(min: Vector3,max: Vector3): LuaTable
    export function getBlocks(minX: number,minY: number,minZ: number,max: Vector3): LuaTable
    export function getBlocks(min: Vector3,maxX: number,maxY: number,maxZ: number): LuaTable
    export function getBlocks(minX: number,minY: number,minZ: number,maxX: number,maxY: number,maxZ: number): LuaTable
    export function newBlock(block: string): BlockStateAPI
    export function newBlock(block: string,pos: Vector3): BlockStateAPI
    export function newBlock(block: string,x: number,y: number,z: number): BlockStateAPI
    export function newItem(item: string): ItemStack
    export function newItem(item: string,count: number): ItemStack
    export function newItem(item: string,count: number,damage: number): ItemStack
    export function avatarVars(): LuaTable
    export function getEntity(uuid: string): EntityAPI
    export function getPlayers(): LuaTable<string,PlayerAPI>
    export function getDay(): number
    export function getDay(delta: number): number
    export function getDayTime(): number
    export function getDayTime(delta: number): number
    export function getMoonPhase(): number
    export function getTime(): number
    export function getTime(delta: number): number
    export function getTimeOfDay(): number
    export function getTimeOfDay(delta: number): number
    export function getBlockLightLevel(pos: Vector3): number
    export function getBlockLightLevel(x: number,y: number,z: number): number
    export function getLightLevel(pos: Vector3): number
    export function getLightLevel(x: number,y: number,z: number): number
    export function getSkyLightLevel(pos: Vector3): number
    export function getSkyLightLevel(x: number,y: number,z: number): number
    export function getRainGradient(): number
    export function getRainGradient(delta: number): number
    export function isThundering(): boolean
    export function getRedstonePower(pos: Vector3): number
    export function getRedstonePower(x: number,y: number,z: number): number
    export function getStrongRedstonePower(pos: Vector3): number
    export function getStrongRedstonePower(x: number,y: number,z: number): number
}
declare interface BiomeAPI
{
    readonly id: string
    getPos(): Vector3
    setPos(pos: Vector3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: Vector3): this
    pos(x: number,y: number,z: number): this
    getTags(): LuaTable<number,string>
    getTemperature(): number
    getPrecipitation(): Precipitation
    getSkyColor(): Vector3
    getFoliageColor(): Vector3
    getGrassColor(): Vector3
    getFogColor(): Vector3
    getWaterColor(): Vector3
    getWaterFogColor(): Vector3
    getDownfall(): number
    isHot(): boolean
    isCold(): boolean
}
declare interface BlockStateAPI
{
    getID(): string
    getProperties(): LuaTable
    getPos(): Vector3
    setPos(pos: Vector3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: Vector3): this
    pos(x: number,y: number,z: number): this
    isTranslucent(): boolean
    getOpacity(): number
    getMapColor(): Vector3
    isSolidBlock(): boolean
    isFullCube(): boolean
    hasEmissiveLighting(): boolean
    getHardness(): number

    getComparatorOutput(): number
    emitsRedstoneSignal(): boolean
    getJumpVelocityMultiplier(): number
    getVelocityMultiplier(): number
    getCollisionShape(): LuaTable
    getOutlineShape(): LuaTable
    getLuminance(): number
    getTextures(): LuaTable
    getBlastResistance(): number
    getFriction(): number
    hasCollision(): boolean
    isAir(): boolean
    isOpaque(): boolean
    getEntityData(): LuaTable
    getFluidTags(): LuaTable
    getSounds(): LuaTable
    getTags(): LuaTable
    asItem(): ItemStack
    hasBlockEntity(): boolean
    toStateString(): string
    id: string
    properties: LuaTable
}
declare interface ItemStack
{
    getCount(): number
    getID(): string
    getMaxCount(): number
    getName(): string
    getPopTime(): number
    getRarity(): ItemStackRarity
    getTag(): LuaTable
    getTags(): LuaTable
    getUseAction(): string
    getUseDuration(): number
    copy(): this
    hasGlint(): boolean
    isFood(): boolean
    isStackable(): boolean
    toStackString(): string
    getDamage(): number
    getEquipmentSlot(): string
    getMaxDamage(): number
    getRepairCost(): number
    isArmor(): boolean
    isDamageable(): boolean
    isEnchantable(): boolean
    isTool(): boolean
    getBlockstate(): BlockStateAPI
    isBlockItem(): boolean
    id: string
    tag: LuaTable
}