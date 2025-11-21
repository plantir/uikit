import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
export interface Menu extends Base {
    size?: GlobalSize,
    horzintal?: boolean,
    title?: string
}
