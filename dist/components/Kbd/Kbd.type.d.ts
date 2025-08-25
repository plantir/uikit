import type { Base, GlobalSize } from '../../utils/El.types.js';
export type KbdSize = GlobalSize | 'xl';
export interface Kbd extends Base {
    size?: KbdSize;
}
