declare interface FiguraActionWheel
{
    leftClick?: (this: void) => void
    rightClick?: (this: void) => void
    scroll?: () => void
    execute(): this
    execute(index: number): this
    execute(index: number,rightClick: boolean): this
    isEnabled(): boolean
    getSelected(): number
    getSelectedAction(): FiguraAction
    newAction(): FiguraAction
    newPage(): FiguraPage
    newPage(title: string): FiguraPage
    setPage(title: string): this
    setPage(page: FiguraPage): this
    getPage(): LuaTable<string,FiguraPage>
    getPage(title: string): FiguraPage
    getCurrentPage(): FiguraPage
}
declare type FiguraOnClickAction = (this: void,action: FiguraAction) => void
declare type FiguraOnToggleAction = (this: void,toggle: boolean,action: FiguraAction) => void
declare type FiguraOnScrollAction = (this: void,dir: number,action: FiguraAction) => void
declare interface FiguraAction
{
    leftClick: FiguraOnClickAction
    rightClick: FiguraOnClickAction
    toggle: FiguraOnToggleAction
    untoggle: FiguraOnToggleAction
    scroll: FiguraOnScrollAction
    getTitle(): string
    setTitle(): this
    setTitle(title: string): this
    title(): this
    title(title: string): this
    getColor(): FiguraVec3
    setColor(color: FiguraVec3): this
    setColor(r: number,g: number,b: number): this
    color(color: FiguraVec3): this
    color(r: number,g: number,b: number): this
    getHoverColor(): FiguraVec3
    setHoverColor(color: FiguraVec3): this
    setHoverColor(r: number,g: number,b: number): this
    hoverColor(color: FiguraVec3): this
    hoverColor(r: number,g: number,b: number): this
    setItem(item: FiguraItemStack): this
    setItem(item: string): this
    item(item: FiguraItemStack): this
    item(item: string): this
    setHoverItem(item: FiguraItemStack): this
    setHoverItem(item: string): this
    hoverItem(item: FiguraItemStack): this
    hoverItem(item: string): this
    setTexture(texture: FiguraTexture): this
    setTexture(texture: FiguraTexture,u: number,v: number): this
    setTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number): this
    setTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number,scale: number): this
    texture(texture: FiguraTexture): this
    texture(texture: FiguraTexture,u: number,v: number): this
    texture(texture: FiguraTexture,u: number,v: number,width: number,height: number): this
    texture(texture: FiguraTexture,u: number,v: number,width: number,height: number,scale: number): this
    setHoverTexture(texture: FiguraTexture): this
    setHoverTexture(texture: FiguraTexture,u: number,v: number): this
    setHoverTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number): this
    setHoverTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number,scale: number): this
    hoverTexture(texture: FiguraTexture): this
    hoverTexture(texture: FiguraTexture,u: number,v: number): this
    hoverTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number): this
    hoverTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number,scale: number): this
    setOnLeftClick(leftFunction: FiguraOnClickAction): this
    onLeftClick(leftFunction: FiguraOnClickAction): this
    setOnRightClick(rightFunction: FiguraOnClickAction): this
    onRightClick(rightFunction: FiguraOnClickAction): this
    setOnToggle(toggleFunction: FiguraOnToggleAction): this
    onToggle(toggleFunction: FiguraOnToggleAction): this
    setOnUntoggle(toggleFunction: FiguraOnToggleAction): this
    onUntoggle(toggleFunction: FiguraOnToggleAction): this
    setOnScroll(scrollFunction: FiguraOnScrollAction): this
    onScroll(scrollFunction: FiguraOnScrollAction): this
    getToggleTitle(): string
    setToggleTitle(title: string): this
    toggleTitle(title: string): this
    setToggleColor(color: FiguraVec3): FiguraAction
    setToggleColor(r: number,g: number,b: number): FiguraAction
    toggleColor(color: FiguraVec3): FiguraAction
    toggleColor(r: number,g: number,b: number): FiguraAction
    setToggleItem(item: FiguraItemStack): this
    setToggleItem(item: string): this
    toggleItem(item: FiguraItemStack): this
    toggleItem(item: string): this
    setToggleTexture(texture: FiguraTexture): this
    setToggleTexture(texture: FiguraTexture,u: number,v: number): this
    setToggleTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number): this
    setToggleTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number,scale: number): this
    toggleTexture(texture: FiguraTexture): this
    toggleTexture(texture: FiguraTexture,u: number,v: number): this
    toggleTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number): this
    toggleTexture(texture: FiguraTexture,u: number,v: number,width: number,height: number,scale: number): this
    isToggled(): boolean
    setToggled(bool: boolean): this
    toggled(bool: boolean): this
}
declare interface FiguraPage
{
    keepSlots: boolean
    shouldKeepSlots(): boolean
    setKeepSlots(bool: boolean): this
    getTitle(): string
    newAction(): FiguraAction
    newAction(index: number): FiguraAction
    getAction(index: number): FiguraAction
    setAction(index: number,action: FiguraAction): this
    action(index: number,action: FiguraAction): this
    getSlotsShift(): number
    setSlotsShift(shift: number): this
    slotsShift(shift: number): this
    getActions(): LuaTable<number,FiguraAction>
    getActions(shift: number): LuaTable<number,FiguraAction>
}
declare const action_wheel: FiguraActionWheel