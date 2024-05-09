import type { Base, GlobalColor } from '$lib/utils/El.types.js';
import type { Placement } from '@floating-ui/dom';
export interface DrawerTransitionParamTypes {
	amount?: number;
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	opacity?: number;
	x?: number;
	y?: number;
}
export type DrawerTransitionTypes =
	| 'fade'
	| 'fly'
	| 'slide'
	| 'blur'
	| 'in:fly'
	| 'out:fly'
	| 'in:slide'
	| 'out:slide'
	| 'in:fade'
	| 'out:fade'
	| 'in:blur'
	| 'out:blur'
	| undefined;

export type PopupPlacement = Placement;
export interface Popup extends Base {
	placement?: PopupPlacement;
    open?: boolean;
    offset?: number;
}
