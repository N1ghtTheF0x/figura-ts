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
        sections: NBTCompound<ChunkNBT.Section>
    }
    export namespace ChunkNBT
    {
        export type Status = "minecraft:empty" | "minecraft:structure_starts" | "minecraft:structure_references" | "minecraft:biomes" | "minecraft:biomes" | "minecraft:noise" | "minecraft:surface" | "minecraft:carvers" | "minecraft:features" | "minecraft:light" | "minecraft:spawn" | "minecraft:full"
        export interface Section
        {
            Y: number
            block_states: Section.BlockState
            biomes: Section.Biomes
            BlockLight: NBTByteArray
            SkyLight: NBTByteArray
        }
        export namespace Section
        {
            export interface BlockState
            {
                palette: BlockState.Palette
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
            export interface Biomes
            {
                palette: NBTCompound<Biomes.Palette>
                data: NBTList<number>
            }
            export namespace Biomes
            {
                export interface Palette
                {
                    Name: string
                }
            }
        }
    }
}