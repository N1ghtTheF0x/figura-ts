/// <reference path="chat.d.ts" />
/// <reference path="status.d.ts" />

declare interface HostAPI
{
    unlockCursor: boolean
    isHost(): boolean
    isCursorUnlocked(): boolean
    setUnlockCursor(boolean: boolean): this
    setTitleTimes(timesData: Vector3): this
    setTitleTimes(fadeInTimes: number,stayTime: number,fadeOutTime: number): this
    titleTimes(timesData: Vector3): this
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
    setChatMessage(index: number,newMessage: string,backgroundColor: Vector3): this
    swingArm(): this
    swingArm(offhand: boolean): this
    getSlot(slot: string): ItemStack | undefined
    getSlot(slot: number): ItemStack | undefined
    setSlot(slot: string): this
    setSlot(slot: number): this
    setSlot(slot: string,item: string): this
    setSlot(slot: number,item: ItemStack): this
    setBadge(index: number,value: boolean,pride: boolean): this
    badge(index: number,value: boolean,pride: boolean): this
    getChatColor(): number | undefined
    setChatColor(color: Vector3): this
    setChatColor(r: number,g: number,b: number): this
    chatColor(color: Vector3): this
    chatColor(r: number,g: number,b: number): this
    getChatText(): string | undefined
    setChatText(text: string): this
    chatText(text: string): this
    getScreen(): string | undefined
    getScreenSlotCount(): number | undefined
    getScreenSlot(slot: string): ItemStack | undefined
    getScreenSlot(slot: number): ItemStack | undefined
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
    getPickBlock(): LuaMultiReturn<[BlockStateAPI,Vector3,string]> | undefined
    getPickEntity(): EntityAPI | undefined
    isChatVerified(): boolean
    writeToLog(string: string): void
    warnToLog(string: string): void
}
declare const host: HostAPI