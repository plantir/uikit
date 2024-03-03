import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type ButtonSize = GlobalSize;
export type ButtonColor = 'natural' | GlobalColor;
export type ButtonVariant = 'ghost' | 'link' | 'outline' | 'glass' | undefined;
export type ButtonShape = 'circle' | 'square' | undefined;
export interface Button extends Base {
	size?: ButtonSize;
	color?: ButtonColor;
	disabled?: boolean;
	href?: string;
	loading?: boolean;
	wide?: boolean;
	active?: boolean;
	block?: boolean;
	variant?: ButtonVariant;
	shape?: ButtonShape;
}
