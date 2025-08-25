import type { Base, GlobalColor, GlobalMask, GlobalSize } from '../../utils/El.types.js';
export interface Rating extends Base {
    size?: GlobalSize;
    color?: GlobalColor;
    value?: number;
    mask?: GlobalMask;
    readonly?: boolean;
    half?: boolean;
}
