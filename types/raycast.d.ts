declare type FiguraRaycastPredicate = (this: void,entity: FiguraEntity) => boolean
declare type FiguraAABB = Record<1 | 2,FiguraVec3>
declare type FiguraAABBs = LuaTable<number,FiguraAABB>
declare interface FiguraRaycast
{
    aabb(startpos: FiguraVec3,endpos: FiguraVec3,addbs: FiguraAABBs): LuaMultiReturn<[LuaTable,FiguraVec3,string,number]>
    aabb(startX: number,startY: number,startZ: number,endpos: FiguraVec3,addbs: FiguraAABBs): LuaMultiReturn<[LuaTable,FiguraVec3,string,number]>
    aabb(startpos: FiguraVec3,endX: number,endY: number,endZ: number,addbs: FiguraAABBs): LuaMultiReturn<[LuaTable,FiguraVec3,string,number]>
    aabb(startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,addbs: FiguraAABBs): LuaMultiReturn<[LuaTable,FiguraVec3,string,number]>
    block(startpos: FiguraVec3,endpos: FiguraVec3,blockCastType: BlockRayCastType,fluidCastType: FluidRaycastType): LuaMultiReturn<[FiguraBlockState,FiguraVec3,string]>
    block(startX: number,startY: number,startZ: number,endpos: FiguraVec3,blockCastType: BlockRayCastType,fluidCastType: FluidRaycastType): LuaMultiReturn<[FiguraBlockState,FiguraVec3,string]>
    block(startpos: FiguraVec3,endX: number,endY: number,endZ: number,blockCastType: BlockRayCastType,fluidCastType: FluidRaycastType): LuaMultiReturn<[FiguraBlockState,FiguraVec3,string]>
    block(startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,blockCastType: BlockRayCastType,fluidCastType: FluidRaycastType): LuaMultiReturn<[FiguraBlockState,FiguraVec3,string]>
    entity(startpos: FiguraVec3,endpos: FiguraVec3,predicate: FiguraRaycastPredicate): LuaMultiReturn<[FiguraEntity,FiguraVec3]>
    entity(startX: number,startY: number,startZ: number,endpos: FiguraVec3,predicate: FiguraRaycastPredicate): LuaMultiReturn<[FiguraEntity,FiguraVec3]>
    entity(startpos: FiguraVec3,endX: number,endY: number,endZ: number,predicate: FiguraRaycastPredicate): LuaMultiReturn<[FiguraEntity,FiguraVec3]>
    entity(startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,predicate: FiguraRaycastPredicate): LuaMultiReturn<[FiguraEntity,FiguraVec3]>
}
declare const raycast: FiguraRaycast