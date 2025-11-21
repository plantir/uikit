import El from './El.svelte';
import type { ComponentProps, SvelteComponent } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
// HTML Tags
export type HTMLTags = keyof HTMLElementTagNameMap;
export type GlobalSize = 'xs'
	| 'sm' | 'md' | 'lg' | 'xl' | undefined;
export type GlobalColor =
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'success'
	| 'warning'
	| 'info'
	| 'error'
	| 'neutral'
	| undefined;
export type GlobalMask =
	'squircle'
	| 'heart'
	| 'hexagon'
	| 'hexagon-2'
	| 'decagon'
	| 'pentagon'
	| 'diamond'
	| 'square'
	| 'circle'
	| 'star'
	| 'star-2'
	| 'triangle'
	| 'triangle-2'
	| 'triangle-3'
	| 'triangle-4'
	| undefined;
export interface Base extends ComponentProps<El> {
	id?: string;
	class?: string;
	tag?: HTMLTags;
	element?: HTMLElement;
	componentName?: string;
	components?: SvelteComponent[];
	cssProps?: object;
	value?: unknown;
	title?: string;
	role?: string;
	style?: string;
	show?: boolean;
}
