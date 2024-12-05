declare type KeybindCallback<KeyBindList extends KeybindList> = (modifier: 1 | 2 | 4,keybind: FiguraKeybind<KeyBindList>) => void | boolean
declare interface FiguraKeybind<K extends KeybindList = KeybindList>
{
    press: KeybindCallback<K>
    release: KeybindCallback<K>
    setOnPress(func: KeybindCallback<K>): this
    onPress(func: KeybindCallback<K>): this
    setOnRelease(func: KeybindCallback<K>): this
    onRelease(func: KeybindCallback<K>): this
    setKey<Key extends KeybindList>(key: Key): FiguraKeybind<Key>
    key<Key extends KeybindList>(key: Key): FiguraKeybind<Key>
    isDefault(): boolean
    getKey(): K
    getKeyName(): string
    getName(): string
    getID(): number
    isPressed(): boolean
    isEnabled(): boolean
    setEnabled(bool: boolean): this
    enabled(bool: boolean): this
    isGuiEnabled(): boolean
    setGUI(bool: boolean): this
    gui(bool: boolean): this
}
declare interface KeybindsAPI
{
    newKeybind(name: string): FiguraKeybind
    newKeybind<Key extends KeybindList>(name: string,key: Key): FiguraKeybind<Key>
    newKeybind<Key extends KeybindList>(name: string,key: Key,gui: boolean): FiguraKeybind<Key>
    fromVanilla(id: KeyID): FiguraKeybind
    getVanillaKey(id: KeyID): KeybindList
    getKeybinds(): LuaTable<string,FiguraKeybind>
}
declare const keybinds: KeybindsAPI