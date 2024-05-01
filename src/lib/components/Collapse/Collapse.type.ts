import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type CollapseSize = GlobalSize;
export type CollapseColor = 'natural' | GlobalColor;
export type CollapseVariant = 'ghost' | 'link' | 'outline' | 'glass' | 'dot' | undefined;
export type CollapseShape = 'circle' | 'square' | undefined;
export interface Collapse extends Base {
	color?: CollapseColor;
	size?: CollapseSize;
	disabled?: boolean;
	open?: boolean;
	arrow?: boolean;
	plus?: boolean;
}
