import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
import type { Writable } from 'svelte/store';

export type StepItemSize = GlobalSize;
export type StepItemColor = 'natural' | GlobalColor;
export interface StepItem extends Base {
	size?: StepItemSize;
	color?: StepItemColor;
	value: string | undefined;
	title?: string | undefined;
}

export interface TabCtxType {
	selected: Writable<string>;
}
