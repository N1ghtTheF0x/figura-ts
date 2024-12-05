declare function vec(this: void,x: number,y: number): FiguraVec2
declare function vec(this: void,x: number,y: number,z: number): FiguraVec3
declare function vec(this: void,x: number,y: number,z: number,w: number): FiguraVec4
/** @noSelf **/
declare namespace vectors
{
    export function vec(this: void,x: number,y: number): FiguraVec2
    export function vec2(this: void,x: number,y: number): FiguraVec2
    export function vec(this: void,x: number,y: number,z: number): FiguraVec3
    export function vec3(this: void,x: number,y: number,z: number): FiguraVec3
    export function vec(this: void,x: number,y: number,z: number,w: number): FiguraVec4
    export function vec4(this: void,x: number,y: number,z: number,w: number): FiguraVec4
    export function hexToRGB(this: void,hex: string): FiguraVec3
    export function hsvToRGB(this: void,hsv: FiguraVec3): FiguraVec3
    export function hsvToRGB(this: void,h: number,s: number,v: number): FiguraVec3
    export function intToRGB(this: void,color: number): FiguraVec3
    export function rgbToHSV(this: void,rgb: FiguraVec3): FiguraVec3
    export function rgbToHSV(this: void,r: number,g: number,b: number): FiguraVec3
    export function rgbToHex(this: void,rgb: FiguraVec3): string
    export function rgbToHex(this: void,r: number,g: number,b: number): string
    export function rgbToInt(this: void,rgb: FiguraVec3): number
    export function rgbToInt(this: void,r: number,g: number,b: number): number
    export function angleToDir(this: void,vec: FiguraVec2): FiguraVec3
    export function angleToDir(this: void,pitch: number,yaw: number): FiguraVec3
    export function rotateAroundAxis(this: void,angle: number,vec: FiguraVec3,axis: FiguraVec3): FiguraVec3
    export function rotateAroundAxis(this: void,angle: number,x: number,y: number,z: number,axis: FiguraVec3): FiguraVec3
    export function rotateAroundAxis(this: void,angle: number,vec: FiguraVec3,axisX: number,axisY: number,axisZ: number): FiguraVec3
    export function rotateAroundAxis(this: void,angle: number,x: number,y: number,z: number,axisX: number,axisY: number,axisZ: number): FiguraVec3
    export function toCameraSpace(this: void,vec: FiguraVec3): FiguraVec3
    export function toCameraSpace(this: void,x: number,y: number,z: number): FiguraVec3
    export function worldToScreenSpace(this: void,vec: FiguraVec3): FiguraVec4
    export function worldToScreenSpace(this: void,x: number,y: number,z: number): FiguraVec4
}
interface IVector<Itself extends FiguraVector,Matrix extends FiguraMatrices>
{
    ADD: LuaAdditionMethod<Itself | number,Itself>
    SUB: LuaSubtractionMethod<Itself | number,Itself>
    MUL: LuaMultiplicationMethod<Itself | number | Matrix,Itself>
    DIV: LuaDivisionMethod<Itself | number,Itself>
    MOD: LuaModuloMethod<Itself | number,Itself>
    UNM: LuaNegationMethod<Itself>
    LEN: LuaLengthMethod<number>
    LT: LuaLessThanMethod<Itself,boolean>
}
declare interface FiguraVec2 extends IVector<FiguraVec2,FiguraMat2>
{
    [1]: number
    [2]: number
    x: number
    r: number
    y: number
    g: number
    set(x: number,y: number): this
    reset(): this
    set(vec: FiguraVec2): this
    add(vec: FiguraVec2): this
    add(x: number,y: number): this
    sub(vec: FiguraVec2): this
    sub(x: number,y: number): this
    offset(factor: number): this
    mul(vec: FiguraVec2): this
    mul(x: number,y: number): this
    div(vec: FiguraVec2): this
    div(x: number,y: number): this
    reduce(vec: FiguraVec2): this
    reduce(x: number,y: number): this
    scale(factor: number): this
    unpack(): LuaMultiReturn<[number,number]>
    transform(mat: FiguraMat2): this
    lengthSquared(): number
    copy(): this
    dot(vec: FiguraVec2): this
    normalize(): this
    normalized(): this
    clampLength(min: number,max: number): this
    clamped(min: number,max: number): this
    length(): number
    toDeg(): this
    toRad(): this
    floor(): this
    ceil(): this
    applyFunc(func: (value: number,index: 1 | 2) => number): this
    augmented(): FiguraVec3
    augmented(value: number): FiguraVec3
}
declare interface FiguraVec3 extends IVector<FiguraVec3,FiguraMat3>
{
    [1]: number
    [2]: number
    [3]: number
    x: number
    r: number
    y: number
    g: number
    z: number
    b: number
    reset(): this
    set(vec: FiguraVec3): this
    set(x: number,y: number,z: number): this
    add(vec: FiguraVec3): this
    add(x: number,y: number,z: number): this
    sub(vec: FiguraVec3): this
    sub(x: number,y: number,z: number): this
    offset(factor: number): this
    mul(vec: FiguraVec3): this
    mul(x: number,y: number,z: number): this
    div(vec: FiguraVec3): this
    div(x: number,y: number,z: number): this
    reduce(vec: FiguraVec3): this
    reduce(x: number,y: number,z: number): this
    scale(factor: number): this
    unpack(): LuaMultiReturn<[number,number,number]>
    transform(mat: FiguraMat3): this
    lengthSquared(): number
    copy(): this
    dot(vec: FiguraVec3): number
    normalize(): this
    normalized(): this
    clampLength(min: number,max: number): this
    clamped(min: number,max: number): this
    length(): number
    toRad(): this
    toDeg(): this
    floor(): this
    ceil(): this
    applyFunc(func: (value: number,index: 1 | 2 | 3) => number): this
    augmented(): FiguraVec4
    augmented(value: number): FiguraVec4
    cross(other: FiguraVec3): this
    crossed(other: FiguraVec3): this
}
declare interface FiguraVec4 extends IVector<FiguraVec4,FiguraMat4>
{
    [1]: number
    [2]: number
    [3]: number
    [4]: number
    x: number
    r: number
    y: number
    g: number
    z: number
    b: number
    w: number
    a: number
    reset(): this
    set(vec: FiguraVec4): this
    set(x: number,y: number,z: number,w: number): this
    add(vec: FiguraVec4): this
    add(x: number,y: number,z: number,w: number): this
    sub(vec: FiguraVec4): this
    sub(x: number,y: number,z: number,w: number): this
    offset(factor: number): this
    mul(vec: FiguraVec4): this
    mul(x: number,y: number,z: number,w: number): this
    div(vec: FiguraVec4): this
    div(x: number,y: number,z: number,w: number): this
    reduce(vec: FiguraVec4): this
    reduce(x: number,y: number,z: number,w: number): this
    scale(factor: number): this
    unpack(): LuaMultiReturn<[number,number,number,number]>
    transform(mat: FiguraMat4): this
    lengthSquared(): number
    copy(): this
    dot(vec: FiguraVec4): this
    normalize(): this
    normalized(): this
    clampLength(min: number,max: number): this
    clamped(min: number,max: number): this
    length(): number
    toRad(): this
    toDeg(): this
    floor(): this
    ceil(): this
    applyFunc(func: (value: number,index: 1 | 2 | 3 | 4) => number): this
}
declare type FiguraVector = FiguraVec2 | FiguraVec3 | FiguraVec4