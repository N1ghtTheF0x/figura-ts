declare interface FiguraMatrices
{
    mat2(this: void): FiguraMat2
    mat2(this: void,col1: FiguraVec2,col2: FiguraVec2): FiguraMat2
    mat3(this: void): FiguraMat3
    mat3(this: void,col1: FiguraVec3,col2: FiguraVec3,col3: FiguraVec3): FiguraMat3
    mat4(this: void): FiguraMat4
    mat4(this: void,col1: FiguraVec4,col2: FiguraVec4,col3: FiguraVec4,col4: FiguraVec4): FiguraMat4
    rotation2(this: void,angle: number): FiguraMat2
    rotation3(this: void,vec: FiguraVec3): FiguraMat3
    rotation3(this: void,x: number,y: number,z: number): FiguraMat3
    xRotation3(this: void,angle: number): FiguraMat3
    yRotation3(this: void,angle: number): FiguraMat3
    zRotation3(this: void,angle: number): FiguraMat3
    rotation4(this: void,vec: FiguraVec3): FiguraMat4
    rotation4(this: void,x: number,y: number,z: number): FiguraMat4
    xRotation4(this: void,angle: number): FiguraMat4
    yRotation4(this: void,angle: number): FiguraMat4
    zRotation4(this: void,angle: number): FiguraMat4
    scale2(this: void,vec: FiguraVec2): FiguraMat2
    scale3(this: void,vec: FiguraVec3): FiguraMat3
    scale3(this: void,x: number,y: number,z: number): FiguraMat3
    scale4(this: void,vec: FiguraVec3): FiguraMat4
    scale4(this: void,x: number,y: number,z: number): FiguraMat4
    translate3(this: void,vec: FiguraVec2): FiguraMat3
    translate3(this: void,x: number,y: number): FiguraMat3
    translate4(this: void,vec: FiguraVec3): FiguraMat4
    translate4(this: void,x: number,y: number,z: number): FiguraMat4
}
declare const matrices: FiguraMatrices
type IMatrixColumns<Numbers extends number,Vector extends FiguraAnyVector> = {
    [x in `${Numbers}` | `c${Numbers}`]: Vector
}
type IMatrixRows<Numbers extends number,Vector extends FiguraAnyVector> = {
    [x in `r${Numbers}`]: Vector
}
type IMatrixValues<Columns extends number,Rows extends number> = {
    [x in `v${Columns}${Rows}`]: number
}
type IMatrixFields<Columns extends number,Rows extends number,Vector extends FiguraAnyVector> = IMatrixColumns<Columns,Vector> & IMatrixRows<Rows,Vector> & IMatrixValues<Columns,Rows>
type IMatrix<Itself extends FiguraAnyMatrix,Columns extends number,Rows extends number,Vector extends FiguraAnyVector> = {
    ADD: LuaAdditionMethod<Itself,Itself>
    SUB: LuaSubtractionMethod<Itself,Itself>
    MUL: LuaMultiplicationMethod<Itself,Itself> | LuaMultiplicationMethod<Vector,Vector> | LuaMultiplicationMethod<number,Itself>
    LEN: LuaLengthMethod<number>
    getColumn(col: Columns): Vector
    getRow(row: Rows): Vector
} & IMatrixFields<Columns,Rows,Vector>
declare interface FiguraMat2 extends IMatrix<FiguraMat2,1 | 2,1 | 2,FiguraVec2>
{
    copy(): this
    set(other: FiguraMat2): this
    multiply(other: FiguraMat2): this
    rightMultiply(other: FiguraMat2): this
    transpose(): this
    transposed(): this
    invert(): this
    inverted(): this
    det(): number
    reset(): this
    add(other: FiguraMat2): this
    sub(other: FiguraMat2): this
    scale(vec: FiguraVec2): this
    scale(x: number,y: number): this
    rotate(degrees: number): this
    augmented(): FiguraMat3
    apply(x: number): number
    applyDir(x: number): number
}
declare interface FiguraMat3 extends IMatrix<FiguraMat3,1 | 2 | 3,1 | 2 | 3,FiguraVec3>
{
    copy(): this
    set(other: FiguraMat3): this
    multiply(other: FiguraMat3): this
    rightMultiply(other: FiguraMat3): this
    transpose(): this
    transposed(): this
    invert(): this
    inverted(): this
    det(): number
    reset(): this
    add(other: FiguraMat3): this
    sub(other: FiguraMat3): this
    scale(vec: FiguraVec3): this
    scale(x: number,y: number,z: number): this
    translate(vec: FiguraVec2): this
    translate(x: number,y: number): this
    rotateX(degrees: number): this
    rotateY(degrees: number): this
    rotateZ(degrees: number): this
    rotate(vec: FiguraVec3): this
    rotate(x: number,y: number,z: number): this
    deaugmented(): FiguraMat2
    augmented(): FiguraMat4
    apply(vec: FiguraVec2): FiguraVec2
    apply(x: number,y: number): FiguraVec2
    applyDir(vec: FiguraVec2): FiguraVec2
    applyDir(x: number,y: number): FiguraVec2
}
declare interface FiguraMat4 extends IMatrix<FiguraMat4,1 | 2 | 3 | 4,1 | 2 | 3 | 4,FiguraVec3>
{
    copy(): this
    set(other: FiguraMat4): this
    multiply(other: FiguraMat4): this
    rightMultiply(other: FiguraMat4): this
    transpose(): this
    transposed(): this
    invert(): this
    inverted(): this
    det(): number
    reset(): FiguraMat4
    add(other: FiguraMat4): this
    sub(other: FiguraMat4): this
    scale(vec: FiguraVec3): this
    scale(x: number,y: number,z: number): this
    translate(vec: FiguraVec3): this
    translate(x: number,y: number,z: number): this
    rotateX(degrees: number): this
    rotateY(degrees: number): this
    rotateZ(degrees: number): this
    rotate(vec: FiguraVec3): this
    rotate(x: number,y: number,z: number): this
    deaugmented(): FiguraMat3
    apply(): FiguraVec3
    apply(vec: FiguraVec3): FiguraVec3
    apply(x: number,y: number,z: number): FiguraVec3
    applyDir(vec: FiguraVec3): FiguraVec3
    applyDir(x: number,y: number,z: number): FiguraVec3
}
declare type FiguraAnyMatrix = FiguraMat2 | FiguraMat3 | FiguraMat4