declare type VanillaModelAPI = Record<VanillaPlayerGroup,VanillaGroupPart> & Record<VanillaPlayerPart,VanillaModelPart>
declare const vanilla_model: VanillaModelAPI
interface IVanillaGroupPart extends VanillaPart
{
    
}
declare type VanillaGroupPart = IVanillaGroupPart & Record<string,VanillaPart>
declare interface VanillaPart
{
    getVisible(): boolean
    setVisible(visible: boolean): this
    visible(visible: boolean): this
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
    getRot(): FiguraVec3
    setOffsetRot(offsetRot: FiguraVec3): this
    setOffsetRot(x: number,y: number,z: number): this
    offsetRot(offsetRot: FiguraVec3): this
    offsetRot(x: number,y: number,z: number): this
    setScale(offsetRot: FiguraVec3): this
    setScale(x: number,y: number,z: number): this
    scale(offsetRot: FiguraVec3): this
    scale(x: number,y: number,z: number): this
    getScale(): FiguraVec3
    setOffsetScale(offsetRot: FiguraVec3): this
    setOffsetScale(x: number,y: number,z: number): this
    offsetScale(offsetRot: FiguraVec3): this
    offsetScale(x: number,y: number,z: number): this
    getOffsetScale(): FiguraVec3
}
declare interface VanillaModelPart extends VanillaPart
{
    getOriginVisible(): boolean
    getOriginRot(): FiguraVec3
    getOriginPos(): FiguraVec3
    getOriginScale(): FiguraVec3
}