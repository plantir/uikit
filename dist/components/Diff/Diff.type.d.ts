import type { Base } from '../../utils/El.types.js';
export type Aspect = '16/9' | '4/3' | '1/1' | any;
export interface Diff extends Base {
    aspect?: Aspect;
}
