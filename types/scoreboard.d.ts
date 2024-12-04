declare interface ScoreboardObjective
{
    name: string
    display_name: string
    criteria: string
    render_type: string
    scores: LuaTable<string,number>
}
declare interface PlayerTeam
{
    name: string
    display_name: string
    color: string
    prefix: string
    suffix: string
    friendly_fire: boolean
    see_friendly_invisibles: boolean
    nametag_visibility: string
    death_message_visibility: string
    collision_rule: string
}