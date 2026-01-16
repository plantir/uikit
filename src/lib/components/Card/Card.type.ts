import type { Base } from '$lib/utils/El.types.js';

export interface Card extends Base {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error' | 'neutral';
    border?: boolean;
    dashed?: boolean;
    fullImage?: boolean;
    side?: boolean
}
