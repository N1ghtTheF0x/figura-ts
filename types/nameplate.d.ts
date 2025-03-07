/// <reference path="minecraft/text.d.ts" />

declare interface FiguraNameplate
{
    readonly CHAT: FiguraNameplateCustomization
    readonly ENTITY: FiguraEntityNameplateCustomization
    readonly LIST: FiguraNameplateCustomization
    readonly ALL: FiguraNameplateCustomizationGroup
}
declare interface FiguraNameplateCustomization
{
    getText(): string
    setText(text: string): this
}
declare interface FiguraEntityNameplateCustomization extends FiguraNameplateCustomization
{
    getPivot(): FiguraVec3
    setPivot(pivot: FiguraVec3): this
    setPivot(x: number,y: number,z: number): this
    pivot(pivot: FiguraVec3): this
    pivot(x: number,y: number,z: number): this
    getPos(): FiguraVec3
    setPos(pos: FiguraVec3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: FiguraVec3): this
    pos(x: number,y: number,z: number): this
    getScale(): FiguraVec3
    setScale(scale: FiguraVec3): this
    setScale(x: number,y: number,z: number): this
    scale(scale: FiguraVec3): this
    scale(x: number,y: number,z: number): this
    getBackgroundColor(): FiguraVec4
    setBackgroundColor(rgba: FiguraVec4): this
    setBackgroundColor(r: number,g: number,b: number,a: number): this
    backgroundColor(rgba: FiguraVec4): this
    backgroundColor(r: number,g: number,b: number,a: number): this
    setOutlineColor(color: FiguraVec3): this
    setOutlineColor(r: number,g: number,b: number): this
    outlineColor(color: FiguraVec3): this
    outlineColor(r: number,g: number,b: number): this
    getLight(): FiguraVec2
    setLight(light: FiguraVec2): this
    setLight(blockLight: number,skyLight: number): this
    light(light: FiguraVec2): this
    light(blockLight: number,skyLight: number): this
    isVisible(): boolean
    setVisible(visible: boolean): this
    visible(visible: boolean): this
    hasOutline(): boolean
    setOutline(outline: boolean): this
    outline(outline: boolean): this
    hasShadow(): boolean
    setShadow(shadow: boolean): this
    shadow(shadow: boolean): this
}
declare interface FiguraNameplateCustomizationGroup
{
    setText(text: string): this
}
declare const nameplate: FiguraNameplate