type EventMap = {
    // no return
    "ENTITY_INIT": (this: void) => void
    "WORLD_TICK": (this: void) => void
    "WORLD_RENDER": (this: void,delta: number) => void
    "TICK": (this: void) => void
    "RENDER": (this: void,delta: number,renderMode: RenderMode,poseMatrix: FiguraMat4) => void
    "POST_RENDER": (this: void,delta: number,renderMode: RenderMode,poseMatrix: FiguraMat4) => void
    "POST_WORLD_RENDER": (this: void,delta: number) => void
    "RESOURCE_RELOAD": (this: void) => void
    "DAMAGE": (this: void,sourceType: string,sourceCause: EntityAPI,sourceDirect: EntityAPI,sourcePosition: FiguraVec3) => void
    "CHAR_TYPED": (this: void,chars: string,modifiers: number,codePoint: number) => void
    // cancable
    "SKULL_RENDER": (this: void,delta: number,block: BlockStateAPI,item: ItemStackAPI,entity: EntityAPI,mode: SkullMode) => void | boolean
    "USE_ITEM": (this: void,stack: ItemStackAPI,type: UseAction,particleCount: number) => void | boolean
    "ARROW_RENDER": (this: void,delta: number,arrow: EntityAPI) => void | boolean
    "TRIDENT_RENDER": (this: void,delta: number,trident: EntityAPI) => void | boolean
    "ON_PLAY_SOUND": (this: void,id: string,pos: FiguraVec3,vol: number,pitch: number,loop: boolean,category: SoundCategory,file: string) => void | boolean
    "MOUSE_SCROLL": (this: void,delta: number) => void | boolean
    "MOUSE_MOVE": (this: void,x: number,y: number) => void | boolean
    "MOUSE_PRESS": (this: void,button: number,action: number,modifiers: number) => void | boolean
    "KEY_PRESS": (this: void,key: number,action: number,modifiers: number) => void | boolean
    "TOTEM": (this: void) => void | boolean
    // special
    "ITEM_RENDER": (this: void,item: ItemStackAPI,mode: ItemDisplayMode,pos: FiguraVec3,rot: FiguraVec3,scale: FiguraVec3,leftHanded: boolean) => void | FiguraModelPart
    "CHAT_SEND_MESSAGE": (this: void,message: string) => void | string
    "CHAT_RECEIVE_MESSAGE": (this: void,message: string,json: string) => void | boolean | LuaMultiReturn<[string,FiguraVec3]>
}
type OtherEventsName = {
    [x in keyof EventMap]: Lowercase<x>
}
type EventsEntries = {
    [x in keyof EventMap]: LuaEvent<EventMap[x]>
}
type EventCallbacks = {
    // TODO: can we make this possible?
    [x in keyof EventMap as OtherEventsName[x]]: EventMap[x] // & LuaEvent<EventMap[x]>
}
interface EventMethods
{
    getEvents(): LuaMap<keyof EventMap,LuaEvent>
}
declare type EventsAPI = EventMethods & EventsEntries & EventCallbacks
declare const events: EventsAPI
declare interface LuaEvent<Func extends (...args: Array<any>) => void = () => void>
{
    register(func: Func): this
    register(func: Func,name: string): this
    clear(): void
    remove(name: string): number
    remove(func: Func): number
    getRegisteredCount(name: string): number
}