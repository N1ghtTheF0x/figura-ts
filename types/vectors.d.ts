declare function vec(this: void,x: number,y: number): Vector2
declare function vec(this: void,x: number,y: number,z: number): Vector3
declare function vec(this: void,x: number,y: number,z: number,w: number): Vector4
/** @noSelf **/
declare namespace vectors
{
    export function vec(this:void,x: number,y: number): Vector2
    export function vec2(this:void,x: number,y: number): Vector2
    export function vec(this:void,x: number,y: number,z: number): Vector3
    export function vec3(this:void,x: number,y: number,z: number): Vector3
    export function vec(this:void,x: number,y: number,z: number,w: number): Vector4
    export function vec4(this:void,x: number,y: number,z: number,w: number): Vector4
    export function hexToRGB(this:void,hex: string): Vector3
    export function hsvToRGB(this:void,hsv: Vector3): Vector3
    export function hsvToRGB(this:void,h: number,s: number,v: number): Vector3
    export function intToRGB(this:void,color: number): Vector3
    export function rgbToHSV(this:void,rgb: Vector3): Vector3
    export function rgbToHSV(this:void,r: number,g: number,b: number): Vector3
    export function rgbToHex(this:void,rgb: Vector3): string
    export function rgbToHex(this:void,r: number,g: number,b: number): string
    export function rgbToInt(this:void,rgb: Vector3): number
    export function rgbToInt(this:void,r: number,g: number,b: number): number
    export function angleToDir(this:void,vec: Vector2): Vector3
    export function angleToDir(this:void,pitch: number,yaw: number): Vector3
    export function rotateAroundAxis(this:void,angle: number,vec: Vector3,axis: Vector3): Vector3
    export function rotateAroundAxis(this:void,angle: number,x: number,y: number,z: number,axis: Vector3): Vector3
    export function rotateAroundAxis(this:void,angle: number,vec: Vector3,axisX: number,axisY: number,axisZ: number): Vector3
    export function rotateAroundAxis(this:void,angle: number,x: number,y: number,z: number,axisX: number,axisY: number,axisZ: number): Vector3
    export function toCameraSpace(this:void,vec: Vector3): Vector3
    export function toCameraSpace(this:void,x: number,y: number,z: number): Vector3
    export function worldToScreenSpace(this:void,vec: Vector3): Vector4
    export function worldToScreenSpace(this:void,x: number,y: number,z: number): Vector4
}
interface IVector<Itself extends VectorLike,Matrix extends MatrixLike>
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
declare interface Vector2 extends IVector<Vector2,Matrix2>
{
    [1]: number
    [2]: number
    x: number
    r: number
    y: number
    g: number
    set(x: number,y: number): this
    reset(): this
    set(vec: Vector2): this
    add(vec: Vector2): this
    add(x: number,y: number): this
    sub(vec: Vector2): this
    sub(x: number,y: number): this
    offset(factor: number): this
    mul(vec: Vector2): this
    mul(x: number,y: number): this
    div(vec: Vector2): this
    div(x: number,y: number): this
    reduce(vec: Vector2): this
    reduce(x: number,y: number): this
    scale(factor: number): this
    unpack(): LuaMultiReturn<[number,number]>
    transform(mat: Matrix2): this
    lengthSquared(): number
    copy(): this
    dot(vec: Vector2): this
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
    augmented(): Vector3
    augmented(value: number): Vector3
}
declare interface Vector3 extends IVector<Vector3,Matrix3>
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
    set(vec: Vector3): this
    set(x: number,y: number,z: number): this
    add(vec: Vector3): this
    add(x: number,y: number,z: number): this
    sub(vec: Vector3): this
    sub(x: number,y: number,z: number): this
    offset(factor: number): this
    mul(vec: Vector3): this
    mul(x: number,y: number,z: number): this
    div(vec: Vector3): this
    div(x: number,y: number,z: number): this
    reduce(vec: Vector3): this
    reduce(x: number,y: number,z: number): this
    scale(factor: number): this
    unpack(): LuaMultiReturn<[number,number,number]>
    transform(mat: Matrix3): this
    lengthSquared(): number
    copy(): this
    dot(vec: Vector3): number
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
    augmented(): Vector4
    augmented(value: number): Vector4
    cross(other: Vector3): this
    crossed(other: Vector3): this
}
declare interface Vector4 extends IVector<Vector4,Matrix4>
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
    set(vec: Vector4): this
    set(x: number,y: number,z: number,w: number): this
    add(vec: Vector4): this
    add(x: number,y: number,z: number,w: number): this
    sub(vec: Vector4): this
    sub(x: number,y: number,z: number,w: number): this
    offset(factor: number): this
    mul(vec: Vector4): this
    mul(x: number,y: number,z: number,w: number): this
    div(vec: Vector4): this
    div(x: number,y: number,z: number,w: number): this
    reduce(vec: Vector4): this
    reduce(x: number,y: number,z: number,w: number): this
    scale(factor: number): this
    unpack(): LuaMultiReturn<[number,number,number,number]>
    transform(mat: Matrix4): this
    lengthSquared(): number
    copy(): this
    dot(vec: Vector4): this
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
declare type VectorLike = Vector2 | Vector3 | Vector4