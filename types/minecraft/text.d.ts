/// <reference path="components.d.ts" />

declare namespace Minecraft
{
    export type Selector = "@p" | "@r" | "@a" | "@e" | "@s" | "@n"
    export type RawJsonTextColor = `#${string}` | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white"
    export interface IRawJsonTextBase<Type extends string>
    {
        type?: Type
        extra?: IRawJsonTextList
        color?: RawJsonTextColor
        font?: string
        bold?: boolean
        italic?: boolean
        underlined?: boolean
        strikethrough?: boolean
        obfuscated?: boolean
        insertion?: string
        clickEvent?: IRawJsonTextBase.ClickEvent
        hoverEvent?: IRawJsonTextBase.HoverEvent
    }
    export namespace IRawJsonTextBase
    {
        export interface ClickEvent
        {
            action: "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard"
            value: string
        }
        export interface HoverEvent<Action extends HoverEvent.Action = HoverEvent.Action>
        {
            action: Action
            contents: HoverEvent.ContentMap[Action]
        }
        export namespace HoverEvent
        {
            export interface TextItemContent
            {
                id: string
                count?: number
                components?: ComponentMap
            }
            export interface EntityContent
            {
                name?: ITextJsonText
                type: string
                id: string
            }
            export type ContentMap = {
                "show_text": TextItemContent
                "show_item": TextItemContent
                "show_entity": EntityContent
            }
            export type Action = keyof ContentMap
        }
    }
    export interface ITextJsonText extends IRawJsonTextBase<"text">
    {
        text: string
    }
    export interface ITranslatedJsonText extends IRawJsonTextBase<"translatable">
    {
        translate: string
        fallback?: string
        with?: IRawJsonTextList
    }
    export interface IScoreJsonText extends IRawJsonTextBase<"score">
    {
        score: IScoreJsonText.Score
    }
    export namespace IScoreJsonText
    {
        export interface Score
        {
            name: string | Selector | "*"
            objective: string
        }
    }
    export interface ISelectorJsonText extends IRawJsonTextBase<"selector">
    {
        selector: Selector
        seperator?: ITextJsonText
    }
    export interface IKeybindJsonText extends IRawJsonTextBase<"keybind">
    {
        keybind: string
    }
    export interface INBTJsonText extends IRawJsonTextBase<"nbt">
    {
        source?: INBTJsonText.Source
        nbt: string
        interpret?: boolean
        seperator?: ITextJsonText
        block?: string
        entity?: string
        storage?: string
    }
    export namespace INBTJsonText
    {
        export type Source = "block" | "entity" | "storage"
    }
    export type IRawJsonText = ITextJsonText | ITranslatedJsonText | IScoreJsonText | ISelectorJsonText | INBTJsonText
    export type IRawJsonTextList = Array<IRawJsonText>
}