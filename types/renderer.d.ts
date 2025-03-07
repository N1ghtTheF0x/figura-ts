declare interface FiguraRenderer
{
    renderFire: boolean
    renderVehicle: boolean
    renderCrosshair: boolean
    forcePaperdoll: boolean
    renderHUD: boolean
    shouldRenderFire(): boolean
    setRenderFire(renderFire: boolean): this
    shouldRenderVehicle(): boolean
    setRenderVehicle(renderVehicle: boolean): this
    shouldRenderCrosshair(): boolean
    setRenderCrosshair(renderCrosshair: boolean): this
    shouldForcePaperdoll(): boolean
    setForcePaperdoll(forcePaperdoll: boolean): this
    shouldRenderHUD(): boolean
    setRenderHUD(renderHUD: boolean): this
    isUpsideDown(): boolean
    setUpsideDown(upsideDown: boolean): this
    upsideDown(upsideDown: boolean): this
    setShadowRadius(): this
    setShadowRadius(radius: number): this
    shadowRadius(): this
    shadowRadius(radius: number): this
    getShadowRadius(): number
    isFirstPerson(): boolean
    isCameraBackwards(): boolean
    getCameraPos(): FiguraVec3
    setCameraPos(pos: FiguraVec3): this
    setCameraPos(x: number,y: number,z: number): this
    cameraPos(pos: FiguraVec3): this
    cameraPos(x: number,y: number,z: number): this
    getCameraPivot(): FiguraVec3
    setCameraPivot(pos: FiguraVec3): this
    setCameraPivot(x: number,y: number,z: number): this
    cameraPivot(pos: FiguraVec3): this
    cameraPivot(x: number,y: number,z: number): this
    getCameraOffsetPivot(): FiguraVec3
    setOffsetCameraPivot(pos: FiguraVec3): this
    setOffsetCameraPivot(x: number,y: number,z: number): this
    offsetCameraPivot(pos: FiguraVec3): this
    offsetCameraPivot(x: number,y: number,z: number): this
    getCameraRot(): FiguraVec3
    setCameraRot(rot: FiguraVec3): this
    setCameraRot(x: number,y: number,z: number): this
    cameraRot(rot: FiguraVec3): this
    cameraRot(x: number,y: number,z: number): this
    getCameraOffsetRot(): FiguraVec3
    setOffsetCameraRot(rot: FiguraVec3): this
    setOffsetCameraRot(x: number,y: number,z: number): this
    offsetCameraRot(rot: FiguraVec3): this
    offsetCameraRot(x: number,y: number,z: number): this
    getCameraMatrix(): FiguraMat4
    setCameraMatrix(matrix: FiguraMat4): this
    cameraMatrix(matrix: FiguraMat4): this
    getCameraNormal(): FiguraMat3
    setCameraNormal(matrix: FiguraMat3): this
    cameraNormal(matrix: FiguraMat3): this
    setPostEffect(effect: string): this
    postEffect(effect: string): this
    getFOV(): number
    setFOV(): this
    setFOV(fov: number): this
    fov(): this
    fov(fov: number): this
    getCrosshairOffset(): FiguraVec2
    setCrosshairOffset(vec: FiguraVec2): this
    setCrosshairOffset(x: number,y: number): this
    crosshairOffset(vec: FiguraVec2): this
    crosshairOffset(x: number,y: number): this
    getOutlineColor(): FiguraVec3
    setOutlineColor(rgb: FiguraVec3): this
    setOutlineColor(r: number,g: number,b: number): this
    outlineColor(rgb: FiguraVec3): this
    outlineColor(r: number,g: number,b: number): this
    getPrimaryFireTexture(): string
    getSecondaryFireTexture(): string
    setPrimaryFireTexture(id: string): this
    primaryFireTexture(id: string): this
    setSecondaryFireTexture(id: string): this
    secondaryFireTexture(id: string): this
    setRenderLeftArm(bool: boolean): this
    renderLeftArm(bool: boolean): this
    getRenderLeftArm(): boolean
    getRenderRightArm(): boolean
    setRenderRightArm(bool: boolean): this
    renderRightArm(bool: boolean): this
    setEyeOffset(pos: FiguraVec3): this
    setEyeOffset(x: number,y: number,z: number): this
    eyeOffset(pos: FiguraVec3): this
    eyeOffset(x: number,y: number,z: number): this
    getEyeOffset(): FiguraVec3
    setBlockOutlineColor(rgb: FiguraVec3): this
    setBlockOutlineColor(rgba: FiguraVec4): this
    setBlockOutlineColor(r: number,g: number,b: number,a: number): this
    blockOutlineColor(rgb: FiguraVec3): this
    blockOutlineColor(rgba: FiguraVec4): this
    blockOutlineColor(r: number,g: number,b: number,a: number): this
    getBlockOutlineColor(): FiguraVec4
    setRootRotationAllowed(bool: boolean): this
    rootRotationAllowed(bool: boolean): this
    getRootRotationAllowed(): boolean
}
declare const renderer: FiguraRenderer