declare interface RenderTask
{
    remove(): this
    getName(): string
    isVisible(): boolean
    setVisible(visible: boolean): this
    visible(visible: boolean): this
    getLight(): FiguraVec2
    setLight(light: FiguraVec2): this
    setLight(blockLight: number,skyLight: number): this
    light(light: FiguraVec2): this
    light(blockLight: number,skyLight: number): this
    getOverlay(): FiguraVec2
    setOverlay(overlay: FiguraVec2): this
    setOverlay(whiteOverlay: number,hurtOverlay: number): this
    overlay(overlay: FiguraVec2): this
    overlay(whiteOverlay: number,hurtOverlay: number): this
    getPos(): FiguraVec3
    setPos(pos: FiguraVec3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: FiguraVec3): this
    pos(x: number,y: number,z: number): this
    getRot(): FiguraVec3
    setRot(rot: FiguraVec3): this
    setRot(x: number,y: number,z: number): this
    rot(rot: FiguraVec3): this
    rot(x: number,y: number,z: number): this
    getScale(): FiguraVec3
    setScale(scale: FiguraVec3): this
    setScale(x: number,y: number,z: number): this
    scale(scale: FiguraVec3): this
    scale(x: number,y: number,z: number): this
    getPositionMatrix(): FiguraMat4
    getPositionMatrixRaw(): FiguraMat4
    getNormalMatrix(): FiguraMat3
    getNormalMatrixRaw(): FiguraMat3
    setMatrix(matrix: FiguraMat4): this
    matrix(matrix: FiguraMat4): this
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
    setHeadRotation(rotation: FiguraVec2): this
}
declare interface ItemTask extends RenderTask
{
    setItem(item: string): this
    setItem(item: ItemStackAPI): this
    item(item: string): this
    item(item: ItemStackAPI): this
    getDisplayMode(): ItemDisplayTaskMode
    setDisplayMode(displayMode: ItemDisplayTaskMode): this
    displayMode(displayMode: ItemDisplayTaskMode): this
}
declare interface SpriteTask extends RenderTask
{
    getTexture(): string
    setTexture(textureLocation: string,width: number,height: number): this
    setTexture(texture: FiguraTexture): this
    setTexture(texture: FiguraTexture,width: number,height: number): this
    setTexture(textureLocation: string,dimensions: FiguraVec2): this
    setTexture(texture: FiguraTexture,dimensions: FiguraVec2): this
    texture(textureLocation: string,width: number,height: number): this
    texture(texture: FiguraTexture): this
    texture(texture: FiguraTexture,width: number,height: number): this
    texture(textureLocation: string,dimensions: FiguraVec2): this
    texture(texture: FiguraTexture,dimensions: FiguraVec2): this
    getDimensions(): FiguraVec2
    setDimensions(dimensions: FiguraVec2): this
    setDimensions(width: number,height: number): this
    dimensions(dimensions: FiguraVec2): this
    dimensions(width: number,height: number): this
    getSize(): FiguraVec2
    setSize(size: FiguraVec2): this
    setSize(width: number,height: number): this
    size(size: FiguraVec2): this
    size(width: number,height: number): this
    getRegion(): FiguraVec2
    setRegion(region: FiguraVec2): this
    setRegion(width: number,height: number): this
    region(region: FiguraVec2): this
    region(width: number,height: number): this
    getUV(): FiguraVec2
    setUV(uv: FiguraVec2): this
    setUV(u: number,v: number): this
    uv(uv: FiguraVec2): this
    uv(u: number,v: number): this
    getUVPixels(): FiguraVec2
    setUVPixels(uv: FiguraVec2): this
    setUVPixels(u: number,v: number): this
    uvPixels(uv: FiguraVec2): this
    uvPixels(u: number,v: number): this
    getColor(): FiguraVec4
    setColor(rgb: FiguraVec3): this
    setColor(rgba: FiguraVec4): this
    setColor(r: number,g: number,b: number,a: number): this
    color(rgb: FiguraVec3): this
    color(rgba: FiguraVec4): this
    color(r: number,g: number,b: number,a: number): this
    getRenderType(): RenderType
    setRenderType(renderType: RenderType): this
    renderType(renderType: RenderType): this
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
    getOutlineColor(): FiguraVec3
    outlineColor(color: FiguraVec3): this
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
    getBackgroundColor(): FiguraVec4
    setBackgroundColor(rgba: FiguraVec4): this
    setBackgroundColor(r: number,g: number,b: number,a: number): this
    backgroundColor(rgba: FiguraVec4): this
    backgroundColor(r: number,g: number,b: number,a: number): this
    getOpacity(): number
    setOpacity(opacity: number): this
    opacity(opacity: number): this
}
declare interface Vertex
{
    getPos(): FiguraVec3
    setPos(pos: FiguraVec3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: FiguraVec3): this
    pos(x: number,y: number,z: number): this
    getUV(): FiguraVec2
    setUV(uv: FiguraVec2): this
    setUV(u: number,v: number): this
    uv(uv: FiguraVec2): this
    uv(u: number,v: number): this
    getNormal(): FiguraVec3
    setNormal(normal: FiguraVec3): this
    setNormal(x: number,y: number,z: number): this
    normal(normal: FiguraVec3): this
    normal(x: number,y: number,z: number): this
}