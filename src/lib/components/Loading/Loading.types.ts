import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type LoadingType = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity' | undefined;
export type LoadingSize = GlobalSize;
export type LoadingColor = GlobalColor;
export interface Loading extends Base {
	type?: LoadingType;
	size?: LoadingSize;
	color?: LoadingColor;
}
