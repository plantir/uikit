import type { Base, GlobalColor, GlobalSize } from '@plantir/uikit/utils/El.types.js';

export type SelectSize = GlobalSize;
export type SelectColor = 'natural' | GlobalColor;
export interface Select extends Base {
	label?: string | undefined;
	items?: any[];
	value?: string;
	name?: string;
	size?: SelectSize;
	color?: SelectColor;
	disabled?: boolean;
	bordered?: boolean;
}
