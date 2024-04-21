import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
import type { HTMLInputTypeAttribute } from 'svelte/elements';

export type TextAreaSize = GlobalSize;
export type TextAreaColor = 'natural' | GlobalColor;
export type TextAreaInputMode =
	| 'none'
	| 'text'
	| 'tel'
	| 'url'
	| 'email'
	| 'numeric'
	| 'decimal'
	| 'search'
	| undefined;
export interface TextArea extends Base {
	label?: string | undefined;
	placeholder?: string | undefined;
	value?: string;
	type?: HTMLInputTypeAttribute;
	inputmode?: TextAreaInputMode;
	name?: string;
	size?: TextAreaSize;
	color?: TextAreaColor;
	disabled?: boolean;
	bordered?: boolean;
}
