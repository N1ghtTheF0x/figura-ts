declare interface NameplateAPI
{
    readonly CHAT: NameplateCustomization
    readonly ENTITY: EntityNameplateCustomization
    readonly LIST: NameplateCustomization
    readonly ALL: NameplateCustomizationGroup
}
declare interface NameplateCustomization
{
    getText(): string
    setText(text: string): this
}
declare interface EntityNameplateCustomization extends NameplateCustomization
{
    getPivor(): Vector3
    setPivot(pivot: Vector3): this
    setPivot(x: number,y: number,z: number): this
    pivot(pivot: Vector3): this
    pivot(x: number,y: number,z: number): this
    getPos(): Vector3
    setPos(pos: Vector3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: Vector3): this
    pos(x: number,y: number,z: number): this
    getScale(): Vector3
    setScale(scale: Vector3): this
    setScale(x: number,y: number,z: number): this
    scale(scale: Vector3): this
    scale(x: number,y: number,z: number): this
    getBackgroundColor(): Vector4
    setBackgroundColor(rgba: Vector4): this
    setBackgroundColor(r: number,g: number,b: number,a: number): this
    backgroundColor(rgba: Vector4): this
    backgroundColor(r: number,g: number,b: number,a: number): this
    setOutlineColor(color: Vector3): this
    setOutlineColor(r: number,g: number,b: number): this
    outlineColor(color: Vector3): this
    outlineColor(r: number,g: number,b: number): this
    getLight(): Vector2
    setLight(light: Vector2): this
    setLight(blockLight: number,skyLight: number): this
    light(light: Vector2): this
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
declare interface NameplateCustomizationGroup
{
    setText(text: string): this
}
declare const nameplate: NameplateAPI