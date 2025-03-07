declare interface FiguraAnimation
{
    isPlaying(): boolean
    isPaused(): boolean
    isStopped(): boolean
    isHolding(): boolean
    play(): this
    pause(): this
    stop(): this
    restart(): this
    setPlaying(): this
    setPlaying(bool: boolean): this
    playing(): this
    playing(bool: boolean): this
    getTime(): number
    setTime(time: number): number
    time(time: number): number
    getPlayState(): PlayState
    newCode(time: number,code: string): this
    code(time: number,code: string): this
    getBlend(): number
    setBlend(blend: number): this
    blend(blend: number): this
    getOffset(): number
    setOffset(offset: number): this
    offset(offset: number): this
    getStartDelay(): number
    setStartDelay(delay: number): this
    startDelay(delay: number): this
    getLoopDelay(): number
    setLoopDelay(delay: number): this
    loopDelay(delay: number): this
    getLength(): number
    setLength(length: number): this
    length(length: number): this
    setOverride(override: boolean): this
    override(override: boolean): this
    getOverrideRot(): boolean
    getOverridePos(): boolean
    getOverrideScale(): boolean
    setOverrideRot(override: boolean): this
    setOverridePos(override: boolean): this
    setOverrideScale(override: boolean): this
    overrideRot(override: boolean): this
    overridePos(override: boolean): this
    overrideScale(override: boolean): this
    getLoop(): LoopMode
    setLoop(loop: LoopMode): this
    loop(loop: LoopMode): this
    getPriority(): number
    setPriority(priority: number): this
    priority(priority: number): this
    getSpeed(): number
    setSpeed(speed: number): this
    speed(speed: number): this
    getName(): string
    readonly name: string
}
// animations[model][animationName] = Animation
declare type FiguraModelAnimations = Record<string,FiguraAnimation>
interface IFiguraAnimations
{
    get: LuaTableGetMethod<string,FiguraModelAnimations>
    getAnimations(): LuaTable<number,FiguraAnimation>
    getPlaying(): LuaTable<number,FiguraAnimation>
    getPlaying(hold: boolean): LuaTable<number,FiguraAnimation>
    stopAll(): this
}
declare type FiguraAnimations = IFiguraAnimations & Record<string,FiguraModelAnimations>
declare const animations: FiguraAnimations