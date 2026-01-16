import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export type AccordionIcon = '' | 'arrow' | 'plus';
export interface Accordion extends Base {
	icon?: AccordionIcon;
	open?: boolean;
	join?: boolean;
	name?: string;
}
