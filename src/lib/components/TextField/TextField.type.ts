import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
import type { HTMLInputTypeAttribute } from 'svelte/elements';

export type TextFieldSize = GlobalSize;
export type TextFieldColor = GlobalColor;
export type TextFieldInputMode =
	'text'
	| 'tel'
	| 'url'
	| 'email'
	| 'numeric'
	| 'decimal'
	| 'search'
	| 'date'
	| 'time'
	| 'datetime-local'
	| undefined;
export interface TextField extends Base {
	label?: string | undefined;
	placeholder?: string | undefined;
	value?: string;
	type?: HTMLInputTypeAttribute;
	name?: string;
	size?: TextFieldSize;
	color?: TextFieldColor;
	disabled?: boolean;
	readonly?: boolean;
	ghost?: boolean;
	inputClass?: string;
	hint?: string;
	state?: 'invalid' | 'valid'
	suggestions?: string[] | undefined
	node?: any
	pattern?: any
	minlength?: any
	maxlength?: any
	required?: boolean
}
