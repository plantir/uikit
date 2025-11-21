import type { Base, GlobalColor } from '$lib/utils/El.types.js';
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

export type DrawerColor = 'natural' | GlobalColor;
export type DrawerShape = 'circle' | 'square' | undefined;
export interface Drawer extends Base {
	color?: DrawerColor;
	open?: boolean;
	left?: boolean;
	right?: boolean;
	top?: boolean;
	bottom?: boolean;
	backdrop?: boolean;
	clickOutside?: boolean;
	id?: string;
	transitionType?: DrawerTransitionTypes;
	transitionParams?: DrawerTransitionParamTypes;
}
