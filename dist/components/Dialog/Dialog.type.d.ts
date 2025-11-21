import type { Base } from '../../utils/El.types.js';
export type dialogPlacement = 'top' | 'middle' | 'bottom' | 'start' | 'end';
export interface Dialog extends Base {
    open?: boolean;
    placement?: dialogPlacement;
}
