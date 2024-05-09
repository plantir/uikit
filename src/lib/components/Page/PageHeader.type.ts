import type { Base } from '$lib/utils/El.types.js';

export interface PageHeader extends Base {
	title?: string;
	subtitle?: string;
	back?: boolean;
}
