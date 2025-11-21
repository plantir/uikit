import type { Base, GlobalColor, GlobalSize } from '../../utils/El.types.js';
export type TabSize = GlobalSize;
export type TabColor = 'natural' | GlobalColor;
export type TabVariant = 'border' | 'lift' | 'box' | undefined;
export interface Tab extends Base {
    size?: TabSize;
    color?: TabColor;
    active?: boolean;
    variant?: TabVariant;
    selected?: undefined | string | number;
}
