import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
import type { AlignedPlacement, Placement } from '@floating-ui/dom'

export type AutocompleteSize = GlobalSize;
export type AutocompleteColor = 'neutral' | GlobalColor;
export interface Autocomplete extends Base {
    label?: string | any;
    items?: any[];
    value?: string | string[];
    name?: string;
    size?: AutocompleteSize;
    color?: AutocompleteColor;
    disabled?: boolean;
    multiple?: boolean;
    create?: boolean;
    readonly?: boolean;
    bordered?: boolean;
    dismissible?: boolean;
    placeholder?: string;
    oncreated?: any,
    onchanged?: any,
    hint?: string;
    state?: 'valid' | 'invalid'
    [key: string]: any
}


export interface AutocompleteMenu extends Base {
	placement?: Placement | AlignedPlacement
	popupOffset?: number
	autoClose?: boolean | 'inside' | 'outside'
	arrow?: boolean
	show?: boolean
}
