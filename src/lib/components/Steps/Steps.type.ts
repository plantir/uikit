import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type StapSize = GlobalSize;
export type StapColor = 'natural' | GlobalColor;
export type StapVariant = 'border' | 'lift' | 'box' | undefined;
export interface Stap extends Base {
	size?: StapSize;
	color?: StapColor;
	active?: boolean;
	variant?: StapVariant;
	selected?: undefined | string;
}
