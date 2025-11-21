import type { Base, GlobalColor, GlobalSize } from '../../utils/El.types.js';
export type StatusAnimate = 'ping' | 'bounce' | undefined;
export interface Status extends Base {
    color?: GlobalColor;
    size?: GlobalSize;
    animate?: StatusAnimate;
}
