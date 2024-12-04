declare interface TextureDefinition
{
    main?: FiguraTexture
    emissive?: FiguraTexture
    specular?: FiguraTexture
    normal?: FiguraTexture
}
declare interface FiguraTexture
{
    getDimensions(): Vector2
    getName(): string
    getPath(): string
    setPixel(x: number,y: number,rgb: Vector3): this
    setPixel(x: number,y: number,rgba: Vector4): this
    setPixel(x: number,y: number,r: number,g: number,b: number,a: number): this
    getPixel(x: number,y: number): Vector4
    applyFunc(x: number,y: number,width: number,height: number,func: (x: number,y: number,color: Vector4) => Vector4): this
    applyMatrix(x: number,y: number,width: number,height: number,matrix: Matrix4,clip: boolean): FiguraTexture
    fill(x: number,y: number,width: number,height: number,rgb: Vector3): this
    fill(x: number,y: number,width: number,height: number,rgba: Vector4): this
    fill(x: number,y: number,width: number,height: number,r: number,g: number,b: number,a: number): this
    restore(): FiguraTexture
    save(): string
    update(): FiguraTexture
}
declare interface TextureAtlas
{
    getHeight(): number
    getSpriteUV(path: string): Vector4
    getWidth(): number
    listSprites(): LuaTable
}
declare interface ITexturesAPI
{
    getTextures(): LuaTable<number,FiguraTexture>
    copy(name: string,texture: FiguraTexture): FiguraTexture
    fromVanilla(name: string,path: string): FiguraTexture
    newTexture(name: string,width: number,height: number): FiguraTexture
    read(name: string,base64Text: string): FiguraTexture
    read(name: string,byteArray: LuaTable): FiguraTexture
}
declare type TexturesAPI = ITexturesAPI & Record<string,FiguraTexture>
declare const textures: TexturesAPI