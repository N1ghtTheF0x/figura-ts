/// <reference path="textures.d.ts" />

declare type FiguraModelPartRender = (tickDelta: number,renderMode: RenderModes,part: FiguraModelPart) => void
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
    getPos(): Vector3
    setPos(pos: Vector3): FiguraModelPart
    setPos(x: number,y: number,z: number): FiguraModelPart
    pos(pos: Vector3): FiguraModelPart
    pos(x: number,y: number,z: number): FiguraModelPart
    getAnimPos(): Vector3
    getTruePos(): Vector3
    getRot(): Vector3
    setRot(rot: Vector3): FiguraModelPart
    setRot(x: number,y: number,z: number): FiguraModelPart
    rot(rot: Vector3): FiguraModelPart
    rot(x: number,y: number,z: number): FiguraModelPart
    getOffsetRot(): Vector3
    setOffsetRot(offsetRot: Vector3): FiguraModelPart
    setOffsetRot(x: number,y: number,z: number): FiguraModelPart
    offsetRot(offsetRot: Vector3): FiguraModelPart
    offsetRot(x: number,y: number,z: number): FiguraModelPart
    getAnimRot(): Vector3
    getTrueRot(): Vector3
    getScale(): Vector3
    setScale(scale: Vector3): FiguraModelPart
    setScale(x: number,y: number,z: number): FiguraModelPart
    scale(scale: Vector3): FiguraModelPart
    scale(x: number,y: number,z: number): FiguraModelPart
    getOffsetScale(): Vector3
    setOffsetScale(scale: Vector3): FiguraModelPart
    setOffsetScale(x: number,y: number,z: number): FiguraModelPart
    offsetScale(scale: Vector3): FiguraModelPart
    offsetScale(x: number,y: number,z: number): FiguraModelPart
    getAnimScale(): Vector3
    getTrueScale(): Vector3
    getPivot(): Vector3
    setPivot(pivot: Vector3): FiguraModelPart
    setPivot(x: number,y: number,z: number): FiguraModelPart
    pivot(pivot: Vector3): FiguraModelPart
    pivot(x: number,y: number,z: number): FiguraModelPart
    getOffsetPivot(): Vector3
    setOffsetPivot(pivot: Vector3): FiguraModelPart
    setOffsetPivot(x: number,y: number,z: number): FiguraModelPart
    getTruePivot(): Vector3
    getPositionMatrix(): Matrix4
    getPositionMatrixRaw(): Matrix4
    getNormalMatrix(): Matrix3
    getNormalMatrixRaw(): Matrix3
    setMatrix(matrix: Matrix4): FiguraModelPart
    matrix(matrix: Matrix4): FiguraModelPart
    getVisible(): boolean
    setVisible(visible: boolean): FiguraModelPart
    visible(visible: boolean): FiguraModelPart
    getPrimaryRenderType(): RenderTypes
    setPrimaryRenderType(renderType: RenderTypes): FiguraModelPart
    getSecondaryRenderType(): RenderTypes
    setSecondaryRenderType(renderType: RenderTypes): FiguraModelPart
    primaryRenderType(renderType: RenderTypes): FiguraModelPart
    secondaryRenderType(renderType: RenderTypes): FiguraModelPart
    getPrimaryTexture(): LuaMultiReturn<[TextureTypes,string | FiguraTexture | undefined]>
    getSecondaryTexture(): LuaMultiReturn<[TextureTypes,string | FiguraTexture | undefined]>
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
    partToWorldMatrix(): Matrix4
    getTextureSize(): Vector2
    setUV(uv: Vector2): FiguraModelPart
    setUV(u: number,v: number): FiguraModelPart
    uv(uv: Vector2): FiguraModelPart
    uv(u: number,v: number): FiguraModelPart
    getUV(): Vector2
    setUVPixels(uv: Vector2): FiguraModelPart
    setUVPixels(u: number,v: number): FiguraModelPart
    uvPixels(uv: Vector2): FiguraModelPart
    uvPixels(u: number,v: number): FiguraModelPart
    getUVPixels(): Vector2
    setUVMatrix(matrix: Matrix3): FiguraModelPart
    uvMatrix(matrix: Matrix3): FiguraModelPart
    getUVMatrix(): Matrix3
    setColor(color: Vector3): FiguraModelPart
    setColor(r: number,g: number,b: number): FiguraModelPart
    color(color: Vector3): FiguraModelPart
    color(r: number,g: number,b: number): FiguraModelPart
    getColor(): Vector3
    setPrimaryColor(color: Vector3): FiguraModelPart
    setPrimaryColor(r: number,g: number,b: number): FiguraModelPart
    primaryColor(color: Vector3): FiguraModelPart
    primaryColor(r: number,g: number,b: number): FiguraModelPart
    getPrimaryColor(): Vector3
    setSecondaryColor(color: Vector3): FiguraModelPart
    setSecondaryColor(r: number,g: number,b: number): FiguraModelPart
    secondaryColor(color: Vector3): FiguraModelPart
    secondaryColor(r: number,g: number,b: number): FiguraModelPart
    getSecondaryColor(): Vector3
    setOpacity(opacity: number): FiguraModelPart
    opacity(opacity: number): FiguraModelPart
    getOpacity(): number
    setLight(light: Vector2): FiguraModelPart
    setLight(blockLight: number,skyLight: number): FiguraModelPart
    light(light: Vector2): FiguraModelPart
    light(blockLight: number,skyLight: number): FiguraModelPart
    getLight(): Vector2
    setOverlay(overlay: Vector2): FiguraModelPart
    setOverlay(whiteOverlay: number,hurtOverlay: number): FiguraModelPart
    overlay(overlay: Vector2): FiguraModelPart
    overlay(whiteOverlay: number,hurtOverlay: number): FiguraModelPart
    getOverlay(): Vector2
    setParentType(parentType: ParentTypes): FiguraModelPart
    parentType(parentType: ParentTypes): FiguraModelPart
    getParentType(): ParentTypes
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
    newPart(name: string,parentType: ParentTypes): FiguraModelPart
}
declare type FiguraModelPart = IFiguraModelPart & IFiguraModelPartFields
declare const models: FiguraModelPart