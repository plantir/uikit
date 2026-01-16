import type { Base, GlobalColor } from '../../utils/El.types.js';
export type ChatColor = 'neutral' | GlobalColor;
export type ChatShape = 'circle' | 'square' | undefined;
export interface Chat extends Base {
    color?: ChatColor;
    start?: boolean;
    end?: boolean;
}
