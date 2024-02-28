import type { Base, GlobalColor, GlobalSize } from '@plantir/uikit/utils/El.types.js';
import type { HTMLInputTypeAttribute } from 'svelte/elements';

export type TextFieldSize = GlobalSize;
export type TextFieldColor = 'natural' | GlobalColor;
export type TextFieldInputMode =
	| 'none'
	| 'text'
	| 'tel'
	| 'url'
	| 'email'
	| 'numeric'
	| 'decimal'
	| 'search'
	| undefined;
export interface TextField extends Base {
	label?: string | undefined;
	placeholder?: string | undefined;
	value?: string;
	type?: HTMLInputTypeAttribute;
	inputmode?: TextFieldInputMode;
	name?: string;
	size?: TextFieldSize;
	color?: TextFieldColor;
	disabled?: boolean;
	bordered?: boolean;
}
