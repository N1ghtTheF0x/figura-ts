/// <reference path="textures.d.ts" />

declare type FiguraModelPartRender = (this: void,tickDelta: number,renderMode: RenderMode,part: FiguraModelPart) => void
type IFiguraModelPartFields = {
    [x in string]: FiguraModelPart
}
interface IFiguraModelPart
{
    get: LuaTableGetMethod<string,FiguraModelPart>
    preRender: FiguraModelPartRender
    midRender: FiguraModelPartRender
    postRender: FiguraModelPartRender
    setPreRender(func: FiguraModelPartRender): FiguraModelPart
    setMidRender(func: FiguraModelPartRender): FiguraModelPart
    setPostRender(func: FiguraModelPartRender): FiguraModelPart
    getName(): string
    getParent(): FiguraModelPart
    getChildren(): LuaTable<number,FiguraModelPart>
    isChildOf(part: FiguraModelPart): boolean
    getPos(): FiguraVec3
    setPos(pos: FiguraVec3): FiguraModelPart
    setPos(x: number,y: number,z: number): FiguraModelPart
    pos(pos: FiguraVec3): FiguraModelPart
    pos(x: number,y: number,z: number): FiguraModelPart
    getAnimPos(): FiguraVec3
    getTruePos(): FiguraVec3
    getRot(): FiguraVec3
    setRot(rot: FiguraVec3): FiguraModelPart
    setRot(x: number,y: number,z: number): FiguraModelPart
    rot(rot: FiguraVec3): FiguraModelPart
    rot(x: number,y: number,z: number): FiguraModelPart
    getOffsetRot(): FiguraVec3
    setOffsetRot(offsetRot: FiguraVec3): FiguraModelPart
    setOffsetRot(x: number,y: number,z: number): FiguraModelPart
    offsetRot(offsetRot: FiguraVec3): FiguraModelPart
    offsetRot(x: number,y: number,z: number): FiguraModelPart
    getAnimRot(): FiguraVec3
    getTrueRot(): FiguraVec3
    getScale(): FiguraVec3
    setScale(scale: FiguraVec3): FiguraModelPart
    setScale(x: number,y: number,z: number): FiguraModelPart
    scale(scale: FiguraVec3): FiguraModelPart
    scale(x: number,y: number,z: number): FiguraModelPart
    getOffsetScale(): FiguraVec3
    setOffsetScale(scale: FiguraVec3): FiguraModelPart
    setOffsetScale(x: number,y: number,z: number): FiguraModelPart
    offsetScale(scale: FiguraVec3): FiguraModelPart
    offsetScale(x: number,y: number,z: number): FiguraModelPart
    getAnimScale(): FiguraVec3
    getTrueScale(): FiguraVec3
    getPivot(): FiguraVec3
    setPivot(pivot: FiguraVec3): FiguraModelPart
    setPivot(x: number,y: number,z: number): FiguraModelPart
    pivot(pivot: FiguraVec3): FiguraModelPart
    pivot(x: number,y: number,z: number): FiguraModelPart
    getOffsetPivot(): FiguraVec3
    setOffsetPivot(pivot: FiguraVec3): FiguraModelPart
    setOffsetPivot(x: number,y: number,z: number): FiguraModelPart
    getTruePivot(): FiguraVec3
    getPositionMatrix(): FiguraMat4
    getPositionMatrixRaw(): FiguraMat4
    getNormalMatrix(): FiguraMat3
    getNormalMatrixRaw(): FiguraMat3
    setMatrix(matrix: FiguraMat4): FiguraModelPart
    matrix(matrix: FiguraMat4): FiguraModelPart
    getVisible(): boolean
    setVisible(visible: boolean): FiguraModelPart
    visible(visible: boolean): FiguraModelPart
    getPrimaryRenderType(): RenderType
    setPrimaryRenderType(renderType: RenderType): FiguraModelPart
    getSecondaryRenderType(): RenderType
    setSecondaryRenderType(renderType: RenderType): FiguraModelPart
    primaryRenderType(renderType: RenderType): FiguraModelPart
    secondaryRenderType(renderType: RenderType): FiguraModelPart
    getPrimaryTexture(): LuaMultiReturn<[TextureType,string | FiguraTexture | undefined]>
    getSecondaryTexture(): LuaMultiReturn<[TextureType,string | FiguraTexture | undefined]>
    getPrimaryDefinedTextures(): TextureDefinition
    getSecondaryDefinedTextures(): TextureDefinition
    setPrimaryTexture(textureType: "Skin"): FiguraModelPart
    setPrimaryTexture(textureType: "Resource",path: string): FiguraModelPart
    setPrimaryTexture(textureType: "Custom",texture: FiguraTexture): FiguraModelPart
    primaryTexture(textureType: "Skin"): FiguraModelPart
    primaryTexture(textureType: "Resource",path: string): FiguraModelPart
    primaryTexture(textureType: "Custom",texture: FiguraTexture): FiguraModelPart
    setSecondaryTexture(textureType: "Skin"): FiguraModelPart
    setSecondaryTexture(textureType: "Resource",path: string): FiguraModelPart
    setSecondaryTexture(textureType: "Custom",texture: FiguraTexture): FiguraModelPart
    secondaryTexture(textureType: "Skin"): FiguraModelPart
    secondaryTexture(textureType: "Resource",path: string): FiguraModelPart
    secondaryTexture(textureType: "Custom",texture: FiguraTexture): FiguraModelPart
    getTextures(): LuaTable<number,FiguraTexture>
    partToWorldMatrix(): FiguraMat4
    getTextureSize(): FiguraVec2
    setUV(uv: FiguraVec2): FiguraModelPart
    setUV(u: number,v: number): FiguraModelPart
    uv(uv: FiguraVec2): FiguraModelPart
    uv(u: number,v: number): FiguraModelPart
    getUV(): FiguraVec2
    setUVPixels(uv: FiguraVec2): FiguraModelPart
    setUVPixels(u: number,v: number): FiguraModelPart
    uvPixels(uv: FiguraVec2): FiguraModelPart
    uvPixels(u: number,v: number): FiguraModelPart
    getUVPixels(): FiguraVec2
    setUVMatrix(matrix: FiguraMat3): FiguraModelPart
    uvMatrix(matrix: FiguraMat3): FiguraModelPart
    getUVMatrix(): FiguraMat3
    setColor(color: FiguraVec3): FiguraModelPart
    setColor(r: number,g: number,b: number): FiguraModelPart
    color(color: FiguraVec3): FiguraModelPart
    color(r: number,g: number,b: number): FiguraModelPart
    getColor(): FiguraVec3
    setPrimaryColor(color: FiguraVec3): FiguraModelPart
    setPrimaryColor(r: number,g: number,b: number): FiguraModelPart
    primaryColor(color: FiguraVec3): FiguraModelPart
    primaryColor(r: number,g: number,b: number): FiguraModelPart
    getPrimaryColor(): FiguraVec3
    setSecondaryColor(color: FiguraVec3): FiguraModelPart
    setSecondaryColor(r: number,g: number,b: number): FiguraModelPart
    secondaryColor(color: FiguraVec3): FiguraModelPart
    secondaryColor(r: number,g: number,b: number): FiguraModelPart
    getSecondaryColor(): FiguraVec3
    setOpacity(opacity: number): FiguraModelPart
    opacity(opacity: number): FiguraModelPart
    getOpacity(): number
    setLight(light: FiguraVec2): FiguraModelPart
    setLight(blockLight: number,skyLight: number): FiguraModelPart
    light(light: FiguraVec2): FiguraModelPart
    light(blockLight: number,skyLight: number): FiguraModelPart
    getLight(): FiguraVec2
    setOverlay(overlay: FiguraVec2): FiguraModelPart
    setOverlay(whiteOverlay: number,hurtOverlay: number): FiguraModelPart
    overlay(overlay: FiguraVec2): FiguraModelPart
    overlay(whiteOverlay: number,hurtOverlay: number): FiguraModelPart
    getOverlay(): FiguraVec2
    setParentType(parentType: ParentType): FiguraModelPart
    parentType(parentType: ParentType): FiguraModelPart
    getParentType(): ParentType
    getType(): "GROUP" | "CUBE" | "MESH"
    overrideVanillaRot(): boolean
    overrideVanillaPos(): boolean
    overrideVanillaScale(): boolean
    newText(taskName: string): TextTask
    newItem(taskName: string): ItemTask
    newBlock(taskName: string): BlockTask
    newSprite(taskName: string): SpriteTask
    newEntity(taskName: string): EntityTask
    addTask<R extends RenderTask>(renderTask: R): R
    getTask(): LuaTable<string,RenderTask>
    getTask(taskName: string): RenderTask
    removeTask(): FiguraModelPart
    removeTask(taskName: string): FiguraModelPart
    removeTask(renderTask: RenderTask): FiguraModelPart
    remove(): FiguraModelPart
    getVertices(textureID: string): LuaTable<number,Vertex>
    getAllVertices(): LuaMap<string,LuaTable<number,Vertex>>
    moveTo(part: FiguraModelPart): FiguraModelPart
    addChild(part: FiguraModelPart): FiguraModelPart
    removeChild(part: FiguraModelPart): FiguraModelPart
    copy(name: string): FiguraModelPart
    newPart(name: string): FiguraModelPart
    newPart(name: string,parentType: ParentType): FiguraModelPart
}
declare type FiguraModelPart = IFiguraModelPart & IFiguraModelPartFields
declare const models: FiguraModelPart