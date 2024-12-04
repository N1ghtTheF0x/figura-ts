declare interface Sound
{
    play(): this
    stop(): this
    pause(): this
    isPlaying(): boolean
    isLooping(): boolean
    setPos(pos: Vector3): this
    setPos(x: number,y: number,z: number): this
    getPos(): Vector3
    setAttenuation(attenuation: number): this
    getAttenuation(): number
    setLoop(loop: boolean): this
    setPitch(pitch: number): this
    getPitch(): number
    setSubtitle(subtitle: string): this
    getSubtitle(): string
    setVolume(volume: number): this
    getVolume(): number
}
interface ISoundAPI
{
    playSound(sound: string,pos: Vector3): Sound
    playSound(sound: string,x: number,y: number,z: number): Sound
    playSound(sound: string,pos: Vector3,volume: number,pitch: number,loop: boolean): Sound
    playSound(sound: string,px: number,y: number,z: number,volume: number,pitch: number,loop: boolean): Sound
    stopSound(): this
    stopSound(id: string): this
    newSound(name: string,byteArray: LuaTable): this
    newSound(name: string,base64Text: string): this
    getCustomSounds(): LuaTable
    isPresent(id: string): boolean
}
declare type SoundAPI = ISoundAPI & Record<string,Sound>
declare const sounds: SoundAPI