declare type FiguraKeybindCallback<K extends Minecraft.KeyID> = (this: void,modifier: 1 | 2 | 4,keybind: FiguraKeybind<K>) => void | boolean
declare interface FiguraKeybind<K extends Minecraft.KeyID = Minecraft.KeyID>
{
    press: FiguraKeybindCallback<K>
    release: FiguraKeybindCallback<K>
    setOnPress(func: FiguraKeybindCallback<K>): this
    onPress(func: FiguraKeybindCallback<K>): this
    setOnRelease(func: FiguraKeybindCallback<K>): this
    onRelease(func: FiguraKeybindCallback<K>): this
    setKey<Key extends Minecraft.KeyID>(key: Key): FiguraKeybind<Key>
    key<Key extends Minecraft.KeyID>(key: Key): FiguraKeybind<Key>
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
declare interface FiguraKeybinds
{
    newKeybind(name: string): FiguraKeybind
    newKeybind<Key extends Minecraft.KeyID>(name: string,key: Key): FiguraKeybind<Key>
    newKeybind<Key extends Minecraft.KeyID>(name: string,key: Key,gui: boolean): FiguraKeybind<Key>
    fromVanilla(id: KeyID): FiguraKeybind
    getVanillaKey(id: FiguraKeyID): Minecraft.KeyID
    getKeybinds(): LuaTable<string,FiguraKeybind>
}
declare const keybinds: FiguraKeybinds