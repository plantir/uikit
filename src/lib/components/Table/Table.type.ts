import type { Base, GlobalColor, GlobalSize } from '@plantir/uikit/utils/El.types.js';

export type TableSize = GlobalSize;
export type TableColor = 'natural' | GlobalColor;
export interface Table extends Base {
	label?: string | undefined;
	value?: string;
	name?: string;
	size?: TableSize;
	color?: TableColor;
	disabled?: boolean;
	zebra?: boolean;
	hover?: boolean;
	pinHead?: boolean;
}
