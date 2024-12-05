declare type RaycastPredicate = (this: void,entity: EntityAPI) => boolean
declare type AABB = Record<1 | 2,FiguraVec3>
declare type AABBs = LuaTable<number,AABB>
declare interface RaycastAPI
{
    aabb(this: void,startpos: FiguraVec3,endpos: FiguraVec3,addbs: AABBs): LuaMultiReturn<[LuaTable,FiguraVec3,string,number]>
    aabb(this: void,startX: number,startY: number,startZ: number,endpos: FiguraVec3,addbs: AABBs): LuaMultiReturn<[LuaTable,FiguraVec3,string,number]>
    aabb(this: void,startpos: FiguraVec3,endX: number,endY: number,endZ: number,addbs: AABBs): LuaMultiReturn<[LuaTable,FiguraVec3,string,number]>
    aabb(this: void,startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,addbs: AABBs): LuaMultiReturn<[LuaTable,FiguraVec3,string,number]>
    block(this: void,startpos: FiguraVec3,endpos: FiguraVec3,blockCastType: BlockRayCastType,fluidCastType: FluidRaycastType): LuaMultiReturn<[LuaTable,FiguraVec3,string]>
    block(this: void,startX: number,startY: number,startZ: number,endpos: FiguraVec3,blockCastType: BlockRayCastType,fluidCastType: FluidRaycastType): LuaMultiReturn<[LuaTable,FiguraVec3,string]>
    block(this: void,startpos: FiguraVec3,endX: number,endY: number,endZ: number,blockCastType: BlockRayCastType,fluidCastType: FluidRaycastType): LuaMultiReturn<[LuaTable,FiguraVec3,string]>
    block(this: void,startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,blockCastType: BlockRayCastType,fluidCastType: FluidRaycastType): LuaMultiReturn<[LuaTable,FiguraVec3,string]>
    entity(this: void,startpos: FiguraVec3,endpos: FiguraVec3,predicate: RaycastPredicate): LuaMultiReturn<[EntityAPI,FiguraVec3]>
    entity(this: void,startX: number,startY: number,startZ: number,endpos: FiguraVec3,predicate: RaycastPredicate): LuaMultiReturn<[EntityAPI,FiguraVec3]>
    entity(this: void,startpos: FiguraVec3,endX: number,endY: number,endZ: number,predicate: RaycastPredicate): LuaMultiReturn<[EntityAPI,FiguraVec3]>
    entity(this: void,startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,predicate: RaycastPredicate): LuaMultiReturn<[EntityAPI,FiguraVec3]>
}
declare const raycast: RaycastAPI