declare namespace Minecraft
{
    export interface ChunkNBT
    {
        DataVersion: number
        xPos: number
        yPos: number
        zPos: number
        Status: ChunkNBT.Status
        LastUpdate: number

    }
    export namespace ChunkNBT
    {
        export type Status = "minecraft:empty" | "minecraft:structure_starts" | "minecraft:structure_references" | "minecraft:biomes" | "minecraft:biomes" | "minecraft:noise" | "minecraft:surface" | "minecraft:carvers" | "minecraft:features" | "minecraft:light" | "minecraft:spawn" | "minecraft:full"
        export interface Section
        {
            Y: number
            block_states: Section.BlockState
        }
        export namespace Section
        {
            export interface BlockState
            {
                
                data: NBTList<number>
            }
            export namespace BlockState
            {
                export interface Palette
                {
                    name: Identifier
                    properties: NBTCompound<string>
                }
            }
        }
    }
}