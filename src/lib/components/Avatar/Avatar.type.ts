import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type AvatarSize = GlobalSize;
export type AvatarColor = 'natural' | GlobalColor;
export type AvatarShape = 'circle' | 'square' | 'rounded' | '' | undefined;
export type AvatarMask =
	| 'squircle'
	| 'decagon'
	| 'diamond'
	| 'heart'
	| 'hexagon'
	| 'hexagon-2'
	| 'circle'
	| 'parallelogram'
	| 'parallelogram-2'
	| 'parallelogram-3'
	| 'parallelogram-4'
	| 'pentagon'
	| 'square'
	| 'star'
	| 'star-2'
	| 'triangle'
	| 'triangle-2'
	| 'triangle-3'
	| 'triangle-4'
	| undefined;
export interface Avatar extends Base {
	color?: AvatarColor;
	size?: AvatarSize;
	shape?: AvatarShape;
	mask?: AvatarMask;
	ring?: boolean;
	text?: boolean;
	online?: boolean;
	offline?: boolean;
}
