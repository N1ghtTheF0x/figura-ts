/// <reference path="nbt.d.ts" />

declare interface AvatarAPI<Data = {}>
{
    getNBT(): AvatarNBT
    store<Key extends string,Value>(key: Key,value: Value): AvatarAPI<Data & {[x in Key]: Value}>
    getUUID(): string
    getCurrentInstruction(): number
    getColor(): string
    setColor(color: Vector3): this
    setColor(r: number,g: number,b: number): this
    setColor(color: Vector3,badgeName: string): this
    setColor(r: number,g: number,b: number,badgeName: string): this
    color(color: Vector3): this
    color(r: number,g: number,b: number): this
    color(color: Vector3,badgeName: string): this
    color(r: number,g: number,b: number,badgeName: string): this
    getBadges(): string
    getVersion(): string
    getAuthors(): string
    getName(): string
    getEntityName(): string
    getSize(): number
    hasTexture(): boolean
    hasScriptError(): boolean
    getPermissionLevel(): string
    getInitCount(): number
    getEntityInitCount(): number
    getMaxInitCount(): number
    getTickCount(): number
    getMaxTickCount(): number
    getRenderCount(): number
    getMaxRenderCount(): number
    getWorldTickCount(): number
    getMaxWorldTickCount(): number
    getWorldRenderCount(): number
    getMaxWorldRenderCount(): number
    getComplexity(): number
    getMaxComplexity(): number
    getRemainingParticles(): number
    getMaxParticles(): number
    getRemainingSounds(): number
    getMaxSounds(): number
    getVolume(): number
    getAnimationComplexity(): number
    getMaxAnimationsComplexity(): number
    getAnimationCount(): number
    getMaxAnimationCount(): number
    getBuffersCount(): number
    getMaxBuffersCount(): number
    getMaxTextureSize(): number
    getMaxBufferSize(): number
    canEditVanillaModel(): boolean
    canEditNameplate(): boolean
    canRenderOffscreen(): boolean
    canUseCustomSounds(): boolean
    canHaveCustomSkull(): boolean
}
declare const avatar: AvatarAPI