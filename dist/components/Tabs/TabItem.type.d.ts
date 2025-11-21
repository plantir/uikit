import type { Base, GlobalColor, GlobalSize } from '../../utils/El.types.js';
export type TabItemSize = GlobalSize;
export type TabItemColor = 'natural' | GlobalColor;
export interface TabItem extends Base {
    size?: TabItemSize;
    color?: TabItemColor;
    value: string | undefined;
    title?: string | undefined;
}
