import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type SwitchSize = GlobalSize;
export type SwitchColor = GlobalColor;
export interface Switch extends Base {
	label?: string | undefined;
	value?: boolean;
	name?: string;
	size?: SwitchSize;
	color?: SwitchColor;
	disabled?: boolean;
}
