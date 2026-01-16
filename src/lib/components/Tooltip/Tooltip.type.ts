import type { Base, GlobalColor } from '$lib/utils/El.types.js';
import type { Placement } from '@floating-ui/dom';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface Tooltip extends Base {
    placement?: TooltipPlacement;
    title?: string
    color?: GlobalColor
}
