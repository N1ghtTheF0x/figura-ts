/// <reference path="scoreboard.d.ts" />
/// <reference path="tablist.d.ts" />
/// <reference path="server.d.ts" />
/// <reference path="date.d.ts" />

declare interface FiguraClient
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
    getWindowSize(): FiguraVec2
    getFOV(): number
    getSystemTime(): number
    getMousePos(): FiguraVec2
    getScaledWindowSize(): FiguraVec2
    getGuiScale(): number
    getCameraPos(): FiguraVec3
    getCameraRot(): FiguraVec3
    getCameraDir(): FiguraVec3
    getTextWidth(text: string): number
    getTextHeight(text: string): number
    getTextDimensions(text: string): FiguraVec2
    getTextDimensions(text: string,maxWidth: number,wrap: boolean): FiguraVec2
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
    getViewer(): FiguraViewer
    getCameraEntity(): FiguraEntity
    isIntegratedServer(): boolean
    getServerData(): ServerData
    getDate(): FiguraDate
    getFrameTime(): number
    getActionBar(): string | undefined
    getTitle(): string | undefined
    getSubtitle(): string | undefined
    getScoreboard(): LuaMap<string,LuaMap<string,FiguraScoreboardObjective>>
    listAtlases(): LuaTable<number,string>
    getAtlas(path: string): FiguraTextureAtlas
    getTabList(): FiguraTabList
    getTranslatedString(text: string): string
    getTranslatedString(text: string,args: unknown): string
    getRegistry(registryName: Registries): LuaTable<number,string>
    getEnum(enumName: string): LuaTable<number,string>
}
declare const client: FiguraClient