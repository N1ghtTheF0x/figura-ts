/// <reference path="chat.d.ts" />
/// <reference path="status.d.ts" />

declare interface HostAPI
{
    unlockCursor: boolean
    isHost(): boolean
    isCursorUnlocked(): boolean
    setUnlockCursor(boolean: boolean): this
    setTitleTimes(timesData: FiguraVec3): this
    setTitleTimes(fadeInTimes: number,stayTime: number,fadeOutTime: number): this
    titleTimes(timesData: FiguraVec3): this
    titleTimes(fadeInTimes: number,stayTime: number,fadeOutTime: number): this
    clearTitle(): this
    setTitle(text: string): this
    title(text: string): this
    setSubtitle(text: string): this
    subtitle(text: string): this
    setActionBar(text: string): this
    setActionBar(text: string,animated: boolean): this
    actionBar(text: string): this
    actionBar(text: string,animated: boolean): this
    sendChatMessage(message: string): this
    sendChatCommand(command: string): this
    appendChatHistory(message: string): this
    getChatMessage(index: number): ChatMessage | undefined
    setChatMessage(index: number): this
    setChatMessage(index: number,newMessage: string): this
    setChatMessage(index: number,newMessage: string,backgroundColor: FiguraVec3): this
    swingArm(): this
    swingArm(offhand: boolean): this
    getSlot(slot: string): ItemStackAPI | undefined
    getSlot(slot: number): ItemStackAPI | undefined
    setSlot(slot: string): this
    setSlot(slot: number): this
    setSlot(slot: string,item: string): this
    setSlot(slot: number,item: ItemStackAPI): this
    setBadge(index: number,value: boolean,pride: boolean): this
    badge(index: number,value: boolean,pride: boolean): this
    getChatColor(): number | undefined
    setChatColor(color: FiguraVec3): this
    setChatColor(r: number,g: number,b: number): this
    chatColor(color: FiguraVec3): this
    chatColor(r: number,g: number,b: number): this
    getChatText(): string | undefined
    setChatText(text: string): this
    chatText(text: string): this
    getScreen(): string | undefined
    getScreenSlotCount(): number | undefined
    getScreenSlot(slot: string): ItemStackAPI | undefined
    getScreenSlot(slot: number): ItemStackAPI | undefined
    isChatOpen(): boolean
    isContainerOpen(): boolean
    screenshot(name: string): FiguraTexture
    isAvatarUploaded(): boolean
    getStatusEffects(): LuaTable<number,StatusEffect>
    getClipboard(): string | undefined
    setClipboard(text: string): this
    getAttackCharge(): number
    isJumping(): boolean
    isFlying(): boolean
    getReachDistance(): number
    getAir(): number
    getPickBlock(): LuaMultiReturn<[BlockStateAPI,FiguraVec3,string]> | undefined
    getPickEntity(): EntityAPI | undefined
    isChatVerified(): boolean
    writeToLog(string: string): void
    warnToLog(string: string): void
}
declare const host: HostAPI