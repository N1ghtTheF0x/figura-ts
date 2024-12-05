/** @noSelf **/
declare namespace math
{
    export const playerScale: number
    export const worldScale: number
    export function lerp<T extends FiguraVector | FiguraMatrices | number>(this: void,a: T,b: T,t: number): T
    export function clamp(this: void,value: number,min: number,max: number): number
    export function round(this: void,value: number): number
    export function map(this: void,value: number,oldMin: number,oldMax: number,newMin: number,newMax: number): number
    export function shortAngle(this: void,from: number,to: number): number
    export function lerpAngle(this: void,a: number,b: number,t: number): number
    export function sign(this: void,value: number): 0 | 1 | -1
}