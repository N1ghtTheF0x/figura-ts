declare interface FiguraParticles
{
    newParticle(name: string,pos: FiguraVec3): FiguraParticle
    newParticle(name: string,pos: FiguraVec3,vel: FiguraVec3): FiguraParticle
    newParticle(name: string,posX: number,posY: number,posZ: number): FiguraParticle
    newParticle(name: string,pos: FiguraVec3,velX: number,velY: number,velZ: number): FiguraParticle
    newParticle(name: string,posX: number,posY: number,posZ: number,vel: FiguraVec3): FiguraParticle
    newParticle(name: string,posX: number,posY: number,posZ: number,velX: number,velY: number,velZ: number): FiguraParticle
    removeParticles(): this
    isPresent(id: string): boolean
}
declare const particles: FiguraParticles & {[name: string]: FiguraParticle}
declare interface FiguraParticle
{
    spawn(): this
    remove(): this
    isAlive(): boolean
    getPos(): FiguraVec3
    setPos(pos: FiguraVec3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: FiguraVec3): this
    pos(x: number,y: number,z: number): this
    getVelocity(): FiguraVec3
    setVelocity(velcoity: FiguraVec3): this
    setVelocity(x: number,y: number,z: number): this
    velocity(velcoity: FiguraVec3): this
    velocity(x: number,y: number,z: number): this
    getColor(): FiguraVec4
    setColor(rgb: FiguraVec3): this
    setColor(rgba: FiguraVec4): this
    setColor(r: number,g: number,b: number,a: number): this
    color(rgb: FiguraVec3): this
    color(rgba: FiguraVec4): this
    color(r: number,g: number,b: number,a: number): this
    getLifetime(): number
    setLifetime(lifetime: number): this
    lifetime(lifetime: number): this
    getPower(): number
    setPower(power: number): this
    power(power: number): this
    getScale(): number
    setScale(scale: number): this
    scale(scale: number): this
    setSize(scale: number): this
    size(scale: number): this
    getGravity(): number
    setGravity(gravity: number): this
    gravity(gravity: number): this
    hasPhysics(): boolean
    setPhysics(physics: boolean): this
    physics(physics: boolean): this
}