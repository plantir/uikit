import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type RangeSize = GlobalSize;
export type RangeColor = 'natural' | GlobalColor;
export interface Range extends Base {
	label?: string | undefined;
	value?: string;
	name?: string;
	size?: RangeSize;
	color?: RangeColor;
	disabled?: boolean;
	readonly?: boolean;
	min?: string | number;
	max?: string | number;
	step?: string | number;
}
