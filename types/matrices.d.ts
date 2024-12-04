
declare interface MatricesAPI
{
    mat2(this: void,): Matrix2
    mat2(this: void,col1: Vector2,col2: Vector2): Matrix2
    mat3(this: void,): Matrix3
    mat3(this: void,col1: Vector3,col2: Vector3,col3: Vector3): Matrix3
    mat4(this: void,): Matrix4
    mat4(this: void,col1: Vector4,col2: Vector4,col3: Vector4,col4: Vector4): Matrix4
    rotation2(this: void,angle: number): Matrix2
    rotation3(this: void,vec: Vector3): Matrix3
    rotation3(this: void,x: number,y: number,z: number): Matrix3
    xRotation3(this: void,angle: number): Matrix3
    yRotation3(this: void,angle: number): Matrix3
    zRotation3(this: void,angle: number): Matrix3
    rotation4(this: void,vec: Vector3): Matrix4
    rotation4(this: void,x: number,y: number,z: number): Matrix4
    xRotation4(this: void,angle: number): Matrix4
    yRotation4(this: void,angle: number): Matrix4
    zRotation4(this: void,angle: number): Matrix4
    scale2(this: void,vec: Vector2): Matrix2
    scale3(this: void,vec: Vector3): Matrix3
    scale3(this: void,x: number,y: number,z: number): Matrix3
    scale4(this: void,vec: Vector3): Matrix4
    scale4(this: void,x: number,y: number,z: number): Matrix4
    translate3(this: void,vec: Vector2): Matrix3
    translate3(this: void,x: number,y: number): Matrix3
    translate4(this: void,vec: Vector3): Matrix4
    translate4(this: void,x: number,y: number,z: number): Matrix4
}
declare const matrices: MatricesAPI
type IMatrixColumns<Numbers extends number,Vector extends VectorLike> = {
    [x in `${Numbers}` | `c${Numbers}`]: Vector
}
type IMatrixRows<Numbers extends number,Vector extends VectorLike> = {
    [x in `r${Numbers}`]: Vector
}
type IMatrixValues<Columns extends number,Rows extends number> = {
    [x in `v${Columns}${Rows}`]: number
}
type IMatrixFields<Columns extends number,Rows extends number,Vector extends VectorLike> = IMatrixColumns<Columns,Vector> & IMatrixRows<Rows,Vector> & IMatrixValues<Columns,Rows>
type IMatrix<Itself extends MatrixLike,Columns extends number,Rows extends number,Vector extends VectorLike> = {
    ADD: LuaAdditionMethod<Itself,Itself>
    SUB: LuaSubtractionMethod<Itself,Itself>
    MUL: LuaMultiplicationMethod<Itself,Itself> | LuaMultiplicationMethod<Vector,Vector> | LuaMultiplicationMethod<number,Itself>
    LEN: LuaLengthMethod<number>
    getColumn(col: Columns): Vector
    getRow(row: Rows): Vector
} & IMatrixFields<Columns,Rows,Vector>
declare interface Matrix2 extends IMatrix<Matrix2,1 | 2,1 | 2,Vector2>
{
    copy(): Matrix2
    set(other: Matrix2): Matrix2
    multiply(other: Matrix2): Matrix2
    rightMultiply(other: Matrix2): Matrix2
    transpose(): Matrix2
    transposed(): Matrix2
    invert(): Matrix2
    inverted(): Matrix2
    det(): number
    reset(): Matrix2
    add(other: Matrix2): Matrix2
    sub(other: Matrix2): Matrix2
    scale(vec: Vector2): Matrix2
    scale(x: number,y: number): Matrix2
    rotate(degrees: number): Matrix2
    augmented(): Matrix3
    apply(x: number): number
    applyDir(x: number): number
}
declare interface Matrix3 extends IMatrix<Matrix3,1 | 2 | 3,1 | 2 | 3,Vector3>
{
    copy(): Matrix3
    set(other: Matrix3): Matrix3
    multiply(other: Matrix3): Matrix3
    rightMultiply(other: Matrix3): Matrix3
    transpose(): Matrix3
    transposed(): Matrix3
    invert(): Matrix3
    inverted(): Matrix3
    det(): number
    reset(): Matrix3
    add(other: Matrix3): Matrix3
    sub(other: Matrix3): Matrix3
    scale(vec: Vector3): Matrix3
    scale(x: number,y: number,z: number): Matrix3
    translate(vec: Vector2): Matrix3
    translate(x: number,y: number): Matrix3
    rotateX(degrees: number): Matrix3
    rotateY(degrees: number): Matrix3
    rotateZ(degrees: number): Matrix3
    rotate(vec: Vector3): Matrix3
    rotate(x: number,y: number,z: number): Matrix3
    deaugmented(): Matrix2
    augmented(): Matrix4
    apply(vec: Vector2): Vector2
    apply(x: number,y: number): Vector2
    applyDir(vec: Vector2): Vector2
    applyDir(x: number,y: number): Vector2
}
declare interface Matrix4 extends IMatrix<Matrix4,1 | 2 | 3 | 4,1 | 2 | 3 | 4,Vector3>
{
    copy(): Matrix4
    set(other: Matrix4): Matrix4
    multiply(other: Matrix4): Matrix4
    rightMultiply(other: Matrix4): Matrix4
    transpose(): Matrix4
    transposed(): Matrix4
    invert(): Matrix4
    inverted(): Matrix4
    det(): number
    reset(): Matrix4
    add(other: Matrix4): Matrix4
    sub(other: Matrix4): Matrix4
    scale(vec: Vector3): Matrix4
    scale(x: number,y: number,z: number): Matrix4
    translate(vec: Vector3): Matrix4
    translate(x: number,y: number,z: number): Matrix4
    rotateX(degrees: number): Matrix4
    rotateY(degrees: number): Matrix4
    rotateZ(degrees: number): Matrix4
    rotate(vec: Vector3): Matrix4
    rotate(x: number,y: number,z: number): Matrix4
    deaugmented(): Matrix3
    apply(): Vector3
    apply(vec: Vector3): Vector3
    apply(x: number,y: number,z: number): Vector3
    applyDir(vec: Vector3): Vector3
    applyDir(x: number,y: number,z: number): Vector3
}
declare type MatrixLike = Matrix2 | Matrix3 | Matrix4