declare interface RenderTask
{
    remove(): this
    getName(): string
    isVisible(): boolean
    setVisible(visible: boolean): this
    visible(visible: boolean): this
    getLight(): Vector2
    setLight(light: Vector2): this
    setLight(blockLight: number,skyLight: number): this
    light(light: Vector2): this
    light(blockLight: number,skyLight: number): this
    getOverlay(): Vector2
    setOverlay(overlay: Vector2): this
    setOverlay(whiteOverlay: number,hurtOverlay: number): this
    overlay(overlay: Vector2): this
    overlay(whiteOverlay: number,hurtOverlay: number): this
    getPos(): Vector3
    setPos(pos: Vector3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: Vector3): this
    pos(x: number,y: number,z: number): this
    getRot(): Vector3
    setRot(rot: Vector3): this
    setRot(x: number,y: number,z: number): this
    rot(rot: Vector3): this
    rot(x: number,y: number,z: number): this
    getScale(): Vector3
    setScale(scale: Vector3): this
    setScale(x: number,y: number,z: number): this
    scale(scale: Vector3): this
    scale(x: number,y: number,z: number): this
    getPositionMatrix(): Matrix4
    getPositionMatrixRaw(): Matrix4
    getNormalMatrix(): Matrix3
    getNormalMatrixRaw(): Matrix3
    setMatrix(matrix: Matrix4): this
    matrix(matrix: Matrix4): this
}
declare interface BlockTask extends RenderTask
{
    setBlock(block: string): this
    setBlock(block: BlockStateAPI): this
    block(block: string): this
    block(block: BlockStateAPI): this
}
declare interface EntityTask extends RenderTask
{
    asEntity(): EntityAPI | undefined
    setNBT(nbt: string): this
    setNBT(id: string,nbt: string): this
    updateWalkingDistance(distance: number): this
    setHeadRotation(rotation: Vector2): this
}
declare interface ItemTask extends RenderTask
{
    setItem(item: string): this
    setItem(item: ItemStack): this
    item(item: string): this
    item(item: ItemStack): this
    getDisplayMode(): ItemDisplayTaskModes
    setDisplayMode(displayMode: ItemDisplayTaskModes): this
    displayMode(displayMode: ItemDisplayTaskModes): this
}
declare interface SpriteTask extends RenderTask
{
    getTexture(): string
    setTexture(textureLocation: string,width: number,height: number): this
    setTexture(texture: FiguraTexture): this
    setTexture(texture: FiguraTexture,width: number,height: number): this
    setTexture(textureLocation: string,dimensions: Vector2): this
    setTexture(texture: FiguraTexture,dimensions: Vector2): this
    texture(textureLocation: string,width: number,height: number): this
    texture(texture: FiguraTexture): this
    texture(texture: FiguraTexture,width: number,height: number): this
    texture(textureLocation: string,dimensions: Vector2): this
    texture(texture: FiguraTexture,dimensions: Vector2): this
    getDimensions(): Vector2
    setDimensions(dimensions: Vector2): this
    setDimensions(width: number,height: number): this
    dimensions(dimensions: Vector2): this
    dimensions(width: number,height: number): this
    getSize(): Vector2
    setSize(size: Vector2): this
    setSize(width: number,height: number): this
    size(size: Vector2): this
    size(width: number,height: number): this
    getRegion(): Vector2
    setRegion(region: Vector2): this
    setRegion(width: number,height: number): this
    region(region: Vector2): this
    region(width: number,height: number): this
    getUV(): Vector2
    setUV(uv: Vector2): this
    setUV(u: number,v: number): this
    uv(uv: Vector2): this
    uv(u: number,v: number): this
    getUVPixels(): Vector2
    setUVPixels(uv: Vector2): this
    setUVPixels(u: number,v: number): this
    uvPixels(uv: Vector2): this
    uvPixels(u: number,v: number): this
    getColor(): Vector4
    setColor(rgb: Vector3): this
    setColor(rgba: Vector4): this
    setColor(r: number,g: number,b: number,a: number): this
    color(rgb: Vector3): this
    color(rgba: Vector4): this
    color(r: number,g: number,b: number,a: number): this
    getRenderType(): RenderTypes
    setRenderType(renderType: RenderTypes): this
    renderType(renderType: RenderTypes): this
    getVertices(): LuaTable<number,Vertex>
}
declare interface TextTask extends RenderTask
{
    getText(): string
    setText(text: string): this
    text(text: string): this
    getAlignment(): "LEFT" | "RIGHT" | "CENTER"
    setAlignment(alignment: "LEFT" | "RIGHT" | "CENTER"): this
    alignment(alignment: "LEFT" | "RIGHT" | "CENTER"): this
    hasShadow(): boolean
    setShadow(shadow: boolean): this
    shadow(shadow: boolean): this
    hasOutline(): boolean
    setOutline(outline: boolean): this
    outline(outline: boolean): this
    getOutlineColor(): Vector3
    outlineColor(color: Vector3): this
    outlineColor(r: number,g: number,b: number): this
    getWidth(): number
    setWidth(width: number): this
    width(width: number): this
    hasWrap(): boolean
    setWrap(wrap: boolean): this
    wrap(wrap: boolean): this
    isSeeThrough(): boolean
    setSeeThrough(seeThrough: boolean): this
    seeThrough(seeThrough: boolean): this
    hasBackground(): boolean
    setBackground(background: boolean): this
    background(background: boolean): this
    getBackgroundColor(): Vector4
    setBackgroundColor(rgba: Vector4): this
    setBackgroundColor(r: number,g: number,b: number,a: number): this
    backgroundColor(rgba: Vector4): this
    backgroundColor(r: number,g: number,b: number,a: number): this
    getOpacity(): number
    setOpacity(opacity: number): this
    opacity(opacity: number): this
}
declare interface Vertex
{
    getPos(): Vector3
    setPos(pos: Vector3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: Vector3): this
    pos(x: number,y: number,z: number): this
    getUV(): Vector2
    setUV(uv: Vector2): this
    setUV(u: number,v: number): this
    uv(uv: Vector2): this
    uv(u: number,v: number): this
    getNormal(): Vector3
    setNormal(normal: Vector3): this
    setNormal(x: number,y: number,z: number): this
    normal(normal: Vector3): this
    normal(x: number,y: number,z: number): this
}