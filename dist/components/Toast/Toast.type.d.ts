import type { Base } from '../../utils/El.types.js';
export type Toastplacement = 'bottom-end' | 'bottom-center' | 'bottom-start' | 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end';
export interface Toast extends Base {
    placement?: Toastplacement;
}
