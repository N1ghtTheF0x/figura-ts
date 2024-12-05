declare interface ActionWheelAPI
{
    leftClick?: () => void
    rightClick?: () => void
    scroll?: () => void
    execute(): this
    execute(index: number): this
    execute(index: number,rightClick: boolean): this
    isEnabled(): boolean
    getSelected(): number
    getSelectedAction(): Action
    newAction(): Action
    newPage(): Page
    newPage(title: string): Page
    setPage(title: string): this
    setPage(page: Page): this
    getPage(): LuaTable<string,Page>
    getPage(title: string): Page
    getCurrentPage(): Page
}
declare type OnClickAction = (this: void,action: Action) => void
declare type OnToggleAction = (this: void,toggle: boolean,action: Action) => void
declare type OnScrollAction = (this: void,dir: number,action: Action) => void
declare interface Action
{
    leftClick: OnClickAction
    rightClick: OnClickAction
    toggle: OnToggleAction
    untoggle: OnToggleAction
    scroll: OnScrollAction
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
    setItem(item: ItemStackAPI): this
    setItem(item: string): this
    item(item: ItemStackAPI): this
    item(item: string): this
    setHoverItem(item: ItemStackAPI): this
    setHoverItem(item: string): this
    hoverItem(item: ItemStackAPI): this
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
    setOnLeftClick(leftFunction: OnClickAction): this
    onLeftClick(leftFunction: OnClickAction): this
    setOnRightClick(rightFunction: OnClickAction): this
    onRightClick(rightFunction: OnClickAction): this
    setOnToggle(toggleFunction: OnToggleAction): this
    onToggle(toggleFunction: OnToggleAction): this
    setOnUntoggle(toggleFunction: OnToggleAction): this
    onUntoggle(toggleFunction: OnToggleAction): this
    setOnScroll(scrollFunction: OnScrollAction): this
    onScroll(scrollFunction: OnScrollAction): this
    getToggleTitle(): string
    setToggleTitle(title: string): this
    toggleTitle(title: string): this
    setToggleColor(color: FiguraVec3): Action
    setToggleColor(r: number,g: number,b: number): Action
    toggleColor(color: FiguraVec3): Action
    toggleColor(r: number,g: number,b: number): Action
    setToggleItem(item: ItemStackAPI): this
    setToggleItem(item: string): this
    toggleItem(item: ItemStackAPI): this
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
declare interface Page
{
    keepSlots: boolean
    shouldKeepSlots(): boolean
    setKeepSlots(bool: boolean): this
    getTitle(): string
    newAction(): Action
    newAction(index: number): Action
    getAction(index: number): Action
    setAction(index: number,action: Action): this
    action(index: number,action: Action): this
    getSlotsShift(): number
    setSlotsShift(shift: number): this
    slotsShift(shift: number): this
    getActions(): LuaTable<number,Action>
    getActions(shift: number): LuaTable<number,Action>
}
declare const action_wheel: ActionWheelAPI