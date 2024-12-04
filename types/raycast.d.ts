declare interface RaycastAPI
{
    aabb(this: void,startpos: Vector3,endpos: Vector3,addbs: LuaTable): LuaMultiReturn<[LuaTable,Vector3,string,number]>
    aabb(this: void,startX: number,startY: number,startZ: number,endpos: Vector3,addbs: LuaTable): LuaMultiReturn<[LuaTable,Vector3,string,number]>
    aabb(this: void,startpos: Vector3,endX: number,endY: number,endZ: number,addbs: LuaTable): LuaMultiReturn<[LuaTable,Vector3,string,number]>
    aabb(this: void,startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,addbs: LuaTable): LuaMultiReturn<[LuaTable,Vector3,string,number]>
    block(this: void,startpos: Vector3,endpos: Vector3,blockCastType: BlockRayCastTypes,fluidCastType: FluidRaycastTypes): LuaMultiReturn<[LuaTable,Vector3,string]>
    block(this: void,startX: number,startY: number,startZ: number,endpos: Vector3,blockCastType: BlockRayCastTypes,fluidCastType: FluidRaycastTypes): LuaMultiReturn<[LuaTable,Vector3,string]>
    block(this: void,startpos: Vector3,endX: number,endY: number,endZ: number,blockCastType: BlockRayCastTypes,fluidCastType: FluidRaycastTypes): LuaMultiReturn<[LuaTable,Vector3,string]>
    block(this: void,startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,blockCastType: BlockRayCastTypes,fluidCastType: FluidRaycastTypes): LuaMultiReturn<[LuaTable,Vector3,string]>
    entity(this: void,startpos: Vector3,endpos: Vector3,predicate: (entity: EntityAPI) => boolean): LuaMultiReturn<[EntityAPI,Vector3]>
    entity(this: void,startX: number,startY: number,startZ: number,endpos: Vector3,predicate: (entity: EntityAPI) => boolean): LuaMultiReturn<[EntityAPI,Vector3]>
    entity(this: void,startpos: Vector3,endX: number,endY: number,endZ: number,predicate: (entity: EntityAPI) => boolean): LuaMultiReturn<[EntityAPI,Vector3]>
    entity(this: void,startX: number,startY: number,startZ: number,endX: number,endY: number,endZ: number,predicate: (entity: EntityAPI) => boolean): LuaMultiReturn<[EntityAPI,Vector3]>
}
declare const raycast: RaycastAPI