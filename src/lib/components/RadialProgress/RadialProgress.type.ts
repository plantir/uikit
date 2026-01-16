import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type ProgressColor = GlobalColor;
export interface RadialProgress extends Base {
	value?: string;
	color?: ProgressColor;
	size?: string;
	tick?: string
}
