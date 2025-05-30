import type { Base } from '../../utils/El.types.js';
import type { Placement } from '@floating-ui/dom';
export type DropdownPlacement = Placement;
export interface Dropdown extends Base {
    placement?: DropdownPlacement;
    open?: boolean;
    offset?: number;
}
