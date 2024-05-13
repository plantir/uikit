import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type CheckboxSize = GlobalSize;
export type CheckboxColor = 'natural' | GlobalColor;
export interface Checkbox extends Base {
	checked?: boolean;
	label?: string | undefined;
	value?: string | number;
	name?: string;
	size?: CheckboxSize;
	color?: CheckboxColor;
	disabled?: boolean;
	indeterminate?: boolean;
}
