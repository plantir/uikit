import type { Base, GlobalColor, GlobalSize } from '@plantir/uikit/utils/El.types.js';

export type SwitchSize = GlobalSize;
export type SwitchColor = 'natural' | GlobalColor;
export interface Switch extends Base {
	label?: string | undefined;
	value?: string;
	name?: string;
	size?: SwitchSize;
	color?: SwitchColor;
	disabled?: boolean;
}
