declare type VanillaModel = {
    [item in VanillaPlayerGroups]: VanillaModelGroup
} & {
    [item in VanillaPlayerParts]: VanillaModelPart
}
declare const vanilla_model: VanillaModel
declare interface VanillaModelGroup
{
    setOffsetRot(offsetRot: Vector3): this
    setOffsetRot(x: number,y: number,z: number): this
    getOffsetRot(): Vector3
    setOffsetScale(offsetRot: Vector3): this
    setOffsetScale(x: number,y: number,z: number): this
    getOffsetScale(): Vector3
    setPos(offsetRot: Vector3): this
    setPos(x: number,y: number,z: number): this
    getPos(): Vector3
    setRot(offsetRot: Vector3): this
    setRot(x: number,y: number,z: number): this
    getRot(): Vector3
    setScale(offsetRot: Vector3): this
    setScale(x: number,y: number,z: number): this
    getScale(): Vector3
    setVisible(visible: boolean): this
    getVisible(): boolean
}
declare interface VanillaModelPart
{
    setOffsetRot(offsetRot: Vector3): this
    setOffsetRot(x: number,y: number,z: number): this
    getOffsetRot(): Vector3
    setOffsetScale(offsetRot: Vector3): this
    setOffsetScale(x: number,y: number,z: number): this
    getOffsetScale(): Vector3
    getOriginPos(): Vector3
    getOriginRot(): Vector3
    getOriginScale(): Vector3
    getOriginVisible(): boolean
    setPos(offsetRot: Vector3): this
    setPos(x: number,y: number,z: number): this
    getPos(): Vector3
    setRot(offsetRot: Vector3): this
    setRot(x: number,y: number,z: number): this
    getRot(): Vector3
    setScale(offsetRot: Vector3): this
    setScale(x: number,y: number,z: number): this
    getScale(): Vector3
    setVisible(visible: boolean): this
    getVisible(): boolean
}