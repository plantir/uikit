import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type AlertType = 'outline' | 'dash' | 'soft' | undefined
export type AlertColor = 'info' | 'warning' | 'error' | 'success' | undefined
export interface Alert extends Base {
	color?: AlertColor;
	type?: AlertType
}
