type EventMap = {
    // no return
    "ENTITY_INIT": () => void
    "WORLD_TICK": () => void
    "WORLD_RENDER": (delta: number) => void
    "TICK": () => void
    "RENDER": (delta: number,renderMode: RenderModes,poseMatrix: Matrix4) => void
    "POST_RENDER": (delta: number,renderMode: RenderModes,poseMatrix: Matrix4) => void
    "POST_WORLD_RENDER": (delta: number) => void
    "RESOURCE_RELOAD": () => void
    "DAMAGE": (sourceType: string,sourceCause: EntityAPI,sourceDirect: EntityAPI,sourcePosition: Vector3) => void
    "CHAR_TYPED": (chars: string,modifiers: number,codePoint: number) => void
    // cancable
    "SKULL_RENDER": (delta: number,block: BlockStateAPI,item: ItemStack,entity: EntityAPI,mode: SkullMode) => void | boolean
    "USE_ITEM": (stack: ItemStack,type: UseActions,particleCount: number) => void | boolean
    "ARROW_RENDER": (delta: number,arrow: EntityAPI) => void | boolean
    "TRIDENT_RENDER": (delta: number,trident: EntityAPI) => void | boolean
    "ON_PLAY_SOUND": (id: string,pos: Vector3,vol: number,pitch: number,loop: boolean,category: SoundCategory,file: string) => void | boolean
    "MOUSE_SCROLL": (delta: number) => void | boolean
    "MOUSE_MOVE": (x: number,y: number) => void | boolean
    "MOUSE_PRESS": (button: number,action: number,modifiers: number) => void | boolean
    "KEY_PRESS": (key: number,action: number,modifiers: number) => void | boolean
    "TOTEM": () => void | boolean
    // special
    "ITEM_RENDER": (item: ItemStack,mode: ItemDisplayModes,pos: Vector3,rot: Vector3,scale: Vector3,leftHanded: boolean) => void | FiguraModelPart
    "CHAT_SEND_MESSAGE": (message: string) => void | string
    "CHAT_RECEIVE_MESSAGE": (message: string,json: string) => void | boolean | LuaMultiReturn<[string,Vector3]>
}
type OtherEventsName = {
    [x in keyof EventMap]: Lowercase<x>
}
type EventsEntries = {
    [x in keyof EventMap]: LuaEvent<EventMap[x]>
}
type EventCallbacks = {
    [x in keyof EventMap as OtherEventsName[x]]: EventMap[x] // & LuaEvent<EventMap[x]>
}
interface EventMethods
{
    getEvents(): LuaMap<keyof EventMap,LuaEvent>
}
declare type EventsAPI = EventMethods & EventsEntries & EventCallbacks
declare const events: EventsAPI
declare interface LuaEvent<Func = () => void>
{
    register(func: Func): this
    register(func: Func,name: string): this
    clear(): void
    remove(name: string): number
    remove(func: Func): number
    getRegisteredCount(name: string): number
}