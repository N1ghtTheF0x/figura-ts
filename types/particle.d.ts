declare interface ParticleAPI
{
    newParticle(name: string,pos: Vector3): LuaParticle
    newParticle(name: string,pos: Vector3,vel: Vector3): LuaParticle
    newParticle(name: string,posX: number,posY: number,posZ: number): LuaParticle
    newParticle(name: string,pos: Vector3,velX: number,velY: number,velZ: number): LuaParticle
    newParticle(name: string,posX: number,posY: number,posZ: number,vel: Vector3): LuaParticle
    newParticle(name: string,posX: number,posY: number,posZ: number,velX: number,velY: number,velZ: number): LuaParticle
    removeParticles(): this
    isPresent(id: string): boolean
}
declare const particles: ParticleAPI & {[name: string]: LuaParticle}
declare interface LuaParticle
{
    spawn(): this
    remove(): this
    isAlive(): boolean
    getPos(): Vector3
    setPos(pos: Vector3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: Vector3): this
    pos(x: number,y: number,z: number): this
    getVelocity(): Vector3
    setVelocity(velcoity: Vector3): this
    setVelocity(x: number,y: number,z: number): this
    velocity(velcoity: Vector3): this
    velocity(x: number,y: number,z: number): this
    getColor(): Vector4
    setColor(rgb: Vector3): this
    setColor(rgba: Vector4): this
    setColor(r: number,g: number,b: number,a: number): this
    color(rgb: Vector3): this
    color(rgba: Vector4): this
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