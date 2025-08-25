import type { Base, GlobalColor, GlobalSize } from '../../utils/El.types.js';
export type ProgressSize = GlobalSize;
export type ProgressColor = GlobalColor;
export interface Progress extends Base {
    value?: string;
    color?: ProgressColor;
    max?: string | number;
}
