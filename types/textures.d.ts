declare interface FiguraTextureDefinition
{
    main?: FiguraTexture
    emissive?: FiguraTexture
    specular?: FiguraTexture
    normal?: FiguraTexture
}
declare type FiguraTextureApply = (this: void,color: FiguraVec4,x: number,y: number) => FiguraVec4
declare interface FiguraTexture
{
    readonly name: string
    getName(): string
    getPath(): string
    getDimensions(): FiguraVec2
    getPixel(x: number,y: number): FiguraVec4
    setPixel(x: number,y: number,rgb: FiguraVec3): this
    setPixel(x: number,y: number,rgba: FiguraVec4): this
    setPixel(x: number,y: number,r: number,g: number,b: number,a: number): this
    pixel(x: number,y: number,rgb: FiguraVec3): this
    pixel(x: number,y: number,rgba: FiguraVec4): this
    pixel(x: number,y: number,r: number,g: number,b: number,a: number): this
    fill(x: number,y: number,width: number,height: number,rgb: FiguraVec3): this
    fill(x: number,y: number,width: number,height: number,rgba: FiguraVec4): this
    fill(x: number,y: number,width: number,height: number,r: number,g: number,b: number,a: number): this
    update(): this
    restore(): this
    save(): string
    applyFunc(x: number,y: number,width: number,height: number,func: FiguraTextureApply): this
    applyMatrix(x: number,y: number,width: number,height: number,matrix: FiguraMat4,clip: boolean): this
}
declare interface FiguraTextureAtlas
{
    listSprites(): LuaTable<number,string>
    getSpriteUV(path: string): FiguraVec4
    getWidth(): number
    getHeight(): number
}
declare interface IFiguraTextures
{
    newTexture(name: string,width: number,height: number): FiguraTexture
    read(name: string,base64Text: string): FiguraTexture
    read(name: string,byteArray: LuaTable<number,number>): FiguraTexture
    copy(name: string,texture: FiguraTexture): FiguraTexture
    get(name: string): FiguraTexture
    getTextures(): LuaTable<number,FiguraTexture>
    fromVanilla(name: string,path: string): FiguraTexture
}
declare type FiguraTextures = IFiguraTextures & Record<string,FiguraTexture>
declare const textures: FiguraTextures