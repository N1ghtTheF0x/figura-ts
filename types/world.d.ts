/// <reference path="map.d.ts" />

/** @noSelf */
declare interface WorldAPI
{
    getBiome(pos: FiguraVec3): BiomeAPI
    getBiome(x: number,y: number,z: number): BiomeAPI
    getBlockState(pos: FiguraVec3): BlockStateAPI
    getBlockState(x: number,y: number,z: number): BlockStateAPI
    isChunkLoaded(pos: FiguraVec3): boolean
    isChunkLoaded(x: number,y: number,z: number): boolean
    getBlocks(min: FiguraVec3,max: FiguraVec3): LuaTable<number,BlockStateAPI>
    getBlocks(minX: number,minY: number,minZ: number,max: FiguraVec3): LuaTable<number,BlockStateAPI>
    getBlocks(min: FiguraVec3,maxX: number,maxY: number,maxZ: number): LuaTable<number,BlockStateAPI>
    getBlocks(minX: number,minY: number,minZ: number,maxX: number,maxY: number,maxZ: number): LuaTable<number,BlockStateAPI>
    getMapData(id: string): LuaMap<string,MapData>
    getRedstonePower(pos: FiguraVec3): number
    getRedstonePower(x: number,y: number,z: number): number
    getStrongRedstonePower(pos: FiguraVec3): number
    getStrongRedstonePower(x: number,y: number,z: number): number
    getTime(): number
    getTime(delta: number): number
    getTimeOfDay(): number
    getTimeOfDay(delta: number): number
    getDayTime(): number
    getDayTime(delta: number): number
    getDay(): number
    getDay(delta: number): number
    getMoonPhase(): number
    getRainGradient(): number
    getRainGradient(delta: number): number
    isThundering(): boolean
    getLightLevel(pos: FiguraVec3): number
    getLightLevel(x: number,y: number,z: number): number
    getSkyLightLevel(pos: FiguraVec3): number
    getSkyLightLevel(x: number,y: number,z: number): number
    getBlockLightLevel(pos: FiguraVec3): number
    getBlockLightLevel(x: number,y: number,z: number): number
    getHeight(pos: FiguraVec2,heightmap: string): number
    getHeight(x: number,y: number,heightmap: string): number
    isOpenSky(pos: FiguraVec3): boolean
    isOpenSky(x: number,y: number,z: number): boolean
    getDimension(): string
    getPlayers(): LuaMap<string,EntityAPI>
    getEntities(pos1: FiguraVec3,pos2: FiguraVec3): LuaTable<number,EntityAPI>
    getEntity(uuid: string): EntityAPI
    avatarVars(): LuaTable<string,LuaTable>
    newBlock(block: string): BlockStateAPI
    newBlock(block: string,pos: FiguraVec3): BlockStateAPI
    newBlock(block: string,x: number,y: number,z: number): BlockStateAPI
    newItem(item: string): ItemStackAPI
    newItem(item: string,count: number): ItemStackAPI
    newItem(item: string,count: number,damage: number): ItemStackAPI
    exists(): boolean
    getBuildHeight(): LuaMultiReturn<[number,number]>
    getSpawnPoint(): FiguraVec3
}
declare const world: WorldAPI
declare interface BiomeAPI
{
    readonly id: string
    getPos(): FiguraVec3
    setPos(pos: FiguraVec3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: FiguraVec3): this
    pos(x: number,y: number,z: number): this
    getTags(): LuaTable<number,string>
    getTemperature(): number
    getPrecipitation(): Precipitation
    getSkyColor(): FiguraVec3
    getFoliageColor(): FiguraVec3
    getGrassColor(): FiguraVec3
    getFogColor(): FiguraVec3
    getWaterColor(): FiguraVec3
    getWaterFogColor(): FiguraVec3
    getDownfall(): number
    isHot(): boolean
    isCold(): boolean
}
declare interface BlockStateAPI
{
    readonly id: string
    readonly properties: LuaTable
    getID(): string
    getProperties(): LuaTable
    getPos(): FiguraVec3
    setPos(pos: FiguraVec3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: FiguraVec3): this
    pos(x: number,y: number,z: number): this
    isTranslucent(): boolean
    getOpacity(): number
    getMapColor(): FiguraVec3
    isSolidBlock(): boolean
    isFullCube(): boolean
    hasEmissiveLighting(): boolean
    getHardness(): number
    getComparatorOutput(): number
    hasBlockEntity(): boolean
    isOpaque(): boolean
    emitsRedstoneSignal(): boolean
    getLuminance(): number
    getFriction(): number
    getVelocityMultiplier(): number
    getJumpVelocityMultiplier(): number
    getBlastResistance(): number
    asItem(): ItemStackAPI
    getTags(): LuaTable<number,string>
    hasCollision(): boolean
    getCollisionShape(): LuaTable<number,LuaTable<number,FiguraVec3>>
    getOutlineShape(): LuaTable<number,LuaTable<number,FiguraVec3>>
    getSounds(): LuaTable
    getFluidTags(): LuaTable<number,string>
    getEntityData(): LuaTable | undefined
    toStateString(): string
    getTextures(): LuaMap<string,LuaSet<string>>
    isAir(): boolean
}
declare interface ItemStackAPI
{
    readonly id: string
    readonly tag: LuaTable
    getID(): string
    getTag(): ItemStackAPI["tag"]
    getCount(): number
    getDamage(): number
    getPopTime(): number
    hasGlint(): boolean
    getTags(): LuaTable<number,string>
    isBlockItem(): boolean
    isFood(): boolean
    getUseAction(): string
    getName(): string
    getMaxCount(): number
    getRarity(): ItemStackRarity
    isEnchantable(): boolean
    getMaxDamage(): number
    isDamageable(): boolean
    isStackable(): boolean
    getRepairCost(): number
    getUseDuration(): number
    toStackString(): string
    isArmor(): boolean
    isTool(): boolean
    getEquipmentSlot(): string
    copy(): this
    getBlockstate(): BlockStateAPI
}