import type { Base } from '$lib/utils/El.types.js';

export interface CheckboxGroup extends Base {
	value?: any[];
	inline?: boolean;
	column?: boolean;
	join?: boolean;
}
