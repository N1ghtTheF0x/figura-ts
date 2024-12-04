declare interface RendererAPI
{
    setCameraMatrix(matrix: Matrix4): this
    getCameraMatrix(): Matrix4
    setCameraNormal(matrix: Matrix3): this
    getCameraNormal(): Matrix3
    getCameraOffsetPivot(): Vector3
    getCameraOffsetRot(): Vector3
    setCameraOffsetPivot(pivot: Vector3): this
    setCameraOffsetPivot(x: number,y: number,z: number): this
    getCameraPivot(): Vector3
    setCameraPos(pos: Vector3): this
    setCameraPos(x: number,y: number,z: number): this
    getCameraPos(): Vector3
    setCameraRot(rot: Vector3): this
    setCameraRot(x: number,y: number,z: number): this
    getCameraRot(): Vector3
    setOffsetCameraPivot(pivot: Vector3): this
    setOffsetCameraPivot(x: number,y: number,z: number): this
    setOffsetCameraRot(rot: Vector3): this
    setOffsetCameraRot(x: number,y: number,z: number): this
    isFirstPerson(): boolean
    isCameraBackwards(): boolean
    setBlockOutlineColor(rgb: Vector3): this
    setBlockOutlineColor(rgba: Vector4): this
    setBlockOutlineColor(r: number,g: number,b: number,a: number): this
    getBlockOutlineColor(): Vector4
    setCrosshairOffset(vec: Vector2): this
    setCrosshairOffset(x: number,y: number): this
    getCrosshairOffset(): Vector2
    setEyeOffset(pos: Vector3): this
    setEyeOffset(x: number,y: number,z: number): this
    getEyeOffset(): Vector3
    setFOV(): this
    setFOV(fov: number): this
    getFOV(): number
    setForcePaperdoll(forcePaperdoll: boolean): this
    setOutlineColor(rgb: Vector3): this
    setOutlineColor(r: number,g: number,b: number): this
    getOutlineColor(): Vector3
    setPostEffect(effect: string): this
    setPrimaryFireTexture(id: string): this
    getPrimaryFireTexture(): string
    setRenderCrosshair(renderCrosshair: boolean): this
    setRenderFire(renderFire: boolean): this
    setRenderHUD(renderHUD: boolean): this
    setRenderLeftArm(bool: boolean): this
    getRnederLeftArm(): boolean
    setRenderRightArm(bool: boolean): this
    getRenderRightArm(): boolean
    setRenderVehicle(renderVehicle: boolean): this
    setRootRotationAllowed(bool: boolean): this
    getRootRotationAllowed(): boolean
    setSecondaryFireTexture(id: string): this
    getSecondaryFireTexture(): string
    setShadowRadius(): this
    setShadowRadius(radius: number): this
    getShadowRadius(): number
    setUpsideDown(upsideDown: boolean): this
    isUpsideDown(): boolean
    shouldForcePaperdoll(): boolean
    shouldRenderCrosshair(): boolean
    shouldRenderFire(): boolean
    shouldRenderHUD(): boolean
    shouldRenderVehicle(): boolean
    renderFire: boolean
    renderVehicle: boolean
    renderCrosshair: boolean
    forcePaperdoll: boolean
    renderHUD: boolean
}
declare const renderer: RendererAPI