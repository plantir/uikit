import type { Base } from '$lib/utils/El.types.js';
import type { Placement } from '@floating-ui/dom';

export type TooltipPlacement = Placement;

export interface Tooltip extends Base {
	placement?: TooltipPlacement;
    open?: boolean;
    offset?: number;
}
