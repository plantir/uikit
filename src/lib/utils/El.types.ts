import El from './El.svelte';
import type { ComponentProps, SvelteComponent } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
// HTML Tags
export type HTMLTags = keyof HTMLElementTagNameMap;
export type GlobalSize = 'xs' | 'sm' | 'md' | 'lg' | undefined;
export type GlobalColor =
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'success'
	| 'warning'
	| 'info'
	| 'error'
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
