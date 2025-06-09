import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
import type { Snippet } from 'svelte';

export interface Swap extends Base {
	value?: boolean;
	on?: string | Snippet;
	off?: string | Snippet;
	rotate?: boolean;
	flip?: boolean;
}
