import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
export type KbdSize = GlobalSize | 'xl'
export interface Kbd extends Base {
    size?: KbdSize
}
