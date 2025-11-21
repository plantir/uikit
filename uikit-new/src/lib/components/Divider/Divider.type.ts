import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type DividerSize = GlobalSize;
export type DividerColor = 'natural' | GlobalColor;

export interface Divider extends Base {
	color?: DividerColor;
	size?: DividerSize;
	start?: boolean;
	end?: boolean;
	horizontal?: boolean;
	vertical?: boolean;
}
