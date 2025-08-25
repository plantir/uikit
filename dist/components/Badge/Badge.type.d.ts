import type { Base, GlobalColor, GlobalSize } from '../../utils/El.types.js';
export type BadgeSize = GlobalSize;
export type BadgeColor = 'neutral' | GlobalColor;
export type BadgeVariant = 'ghost' | 'outline' | 'glass' | 'dot' | 'soft' | 'dash' | undefined;
export type BadgeShape = 'circle' | 'square' | undefined;
export interface Badge extends Base {
    size?: BadgeSize;
    color?: BadgeColor;
    disabled?: boolean;
    href?: string;
    loading?: boolean;
    wide?: boolean;
    active?: boolean;
    block?: boolean;
    variant?: BadgeVariant;
    shape?: BadgeShape;
    dismissable?: boolean;
}
