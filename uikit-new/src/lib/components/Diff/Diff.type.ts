import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
export type Aspect = '16/9' | '4/3' | '1/1' | any;
export interface Diff extends Base {
    aspect?: Aspect;
}
