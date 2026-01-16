import type { Base } from '../../utils/El.types.js';
export interface CheckboxGroup extends Base {
    value?: any[];
    inline?: boolean;
    column?: boolean;
    join?: boolean;
    disabled?: boolean;
}
