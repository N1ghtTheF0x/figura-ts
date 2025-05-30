declare interface FiguraSound
{
    play(): this
    isPlaying(): boolean
    pause(): this
    stop(): this
    getPos(): FiguraVec3
    setPos(pos: FiguraVec3): this
    setPos(x: number,y: number,z: number): this
    pos(pos: FiguraVec3): this
    pos(x: number,y: number,z: number): this
    getVolume(): number
    setVolume(volume: number): this
    volume(volume: number): this
    getAttenuation(): number
    setAttenuation(attenuation: number): this
    attenuation(attenuation: number): this
    getPitch(): number
    setPitch(pitch: number): this
    pitch(pitch: number): this
    isLooping(): boolean
    setLoop(loop: boolean): this
    loop(loop: boolean): this
    getSubtitle(): string
    setSubtitle(subtitle: string): this
    subtitle(subtitle: string): this
}
interface IFiguraSounds
{
    playSound(sound: string,pos: FiguraVec3): FiguraSound
    playSound(sound: string,x: number,y: number,z: number): FiguraSound
    playSound(sound: string,pos: FiguraVec3,volume: number,pitch: number,loop: boolean): FiguraSound
    playSound(sound: string,px: number,y: number,z: number,volume: number,pitch: number,loop: boolean): FiguraSound
    stopSound(): this
    stopSound(id: string): this
    newSound(name: string,byteArray: LuaTable<number,number>): this
    newSound(name: string,base64Text: string): this
    getCustomSounds(): LuaSet<string>
    isPresent(id: string): boolean
}
declare type FiguraSounds = IFiguraSounds & Record<string,FiguraSound>
declare const sounds: FiguraSounds