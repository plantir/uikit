import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
import type { Writable } from 'svelte/store';

export type TabItemSize = GlobalSize;
export type TabItemColor = 'natural' | GlobalColor;
export interface TabItem extends Base {
	size?: TabItemSize;
	color?: TabItemColor;
	value: string | undefined;
	title?: string | undefined;
}
