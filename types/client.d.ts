/// <reference path="scoreboard.d.ts" />
/// <reference path="tablist.d.ts" />

declare interface ClientAPI
{
    getFPS(): number
    getFPSString(): string
    isPaused(): boolean
    getVersion(): string
    getVersionName(): string
    isSnapshot(): boolean
    getClientBrand(): string
    getServerBrand(): string
    getChunkStatistics(): string
    getEntityStatistics(): string
    getSoundStatistics(): string
    getEntityCount(): number
    getParticleCount(): number
    getCurrentEffect(): string
    getJavaVersion(): string
    getUsedMemory(): number
    getMaxMemory(): number
    getAllocatedMemory(): number
    isWindowFocused(): boolean
    isHudEnabled(): boolean
    isDebugOverlayEnabled(): boolean
    getWindowSize(): Vector2
    getFOV(): number
    getSystemTime(): number
    getMousePos(): Vector2
    getScaledWindowSize(): Vector2
    getGuiScale(): number
    getCameraPos(): Vector3
    getCameraRot(): Vector3
    getCameraDir(): Vector3
    getTextWidth(text: string): number
    getTextHeight(text: string): number
    getTextDimensions(text: string): Vector2
    getTextDimensions(text: string,maxWidth: number,wrap: boolean): Vector2
    getActiveLang(): string
    isModLoaded(modID: string): boolean
    hasShaderPackMod(): boolean
    hasShaderPack(): boolean
    getShaderPackName(): string
    hasResource(path: string): boolean
    getActiveResourcePacks(): LuaTable<number,string>
    getFiguraVersion(): string
    compareVersions(version1: string,version2: string): number
    generateUUID(): LuaMultiReturn<[number,number,number,number]>
    intUUIDToString(a: number,b: number,c: number,d: number): string
    uuidToIntArray(uuid: string): LuaMultiReturn<[number,number,number,number]>
    getViewer(): ViewerAPI
    getCameraEntity(): EntityAPI
    isIntegratedServer(): boolean
    getServerData(): LuaTable
    getDate(): LuaTable
    getFrameTime(): number
    getActionBar(): unknown | undefined
    getTitle(): unknown | undefined
    getSubtitle(): unknown | undefined
    getScoreboard(): LuaMap<string,LuaMap<string,ScoreboardObjective>>
    listAtlases(): LuaTable<number,string>
    getAtlas(path: string): TextureAtlas
    getTabList(): TabList
    getTranslatedString(text: string): string
    getTranslatedString(text: string,args: unknown): string
    getRegistry(registryName: Registries): LuaTable<number,string>
    getEnum(enumName: string): LuaTable<number,string>
}
declare const client: ClientAPI