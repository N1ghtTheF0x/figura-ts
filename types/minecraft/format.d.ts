declare namespace Minecraft
{
    export type ColorNameMap = {
        "black": "§0"
        "dark_blue": "§1"
        "dark_green": "§2"
        "dark_aqua": "§3"
        "dark_red": "§4"
        "dark_purple": "§5"
        "gold": "§6"
        "gray": "§7"
        "dark_gray": "§8"
        "blue": "§9"
        "green": "§a"
        "aqua": "§b"
        "red": "§c"
        "light_purple": "§d"
        "yellow": "§e"
        "white": "§f"
    }
    export type ColorName = keyof ColorNameMap
    export type HexColor = `#${string}`
    export type ColorCode<Name extends ColorName = ColorName> = ColorNameMap[Name]
    export type FormatNameMap = {
        "obfuscated": "§k"
        "bold": "§l"
        "strikethrough": "§m"
        "underline": "§n"
        "italic": "§n"
        "reset": "§r"
    }
    export type FormatName = keyof FormatNameMap
    export type FormatCode<Name extends FormatName = FormatName> = FormatNameMap[Name]
}