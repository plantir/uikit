import type { Base, GlobalColor } from '../../utils/El.types.js';
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface Tooltip extends Base {
    placement?: TooltipPlacement;
    title?: string;
    color?: GlobalColor;
}
