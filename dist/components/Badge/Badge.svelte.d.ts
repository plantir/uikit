import type { Badge, BadgeColor, BadgeSize, BadgeVariant } from './Badge.type.js';
import './Badge.css';
import type { Snippet } from 'svelte';
type $$ComponentProps = {
    disabled?: boolean;
    size?: BadgeSize;
    color?: BadgeColor;
    variant?: BadgeVariant;
    dismissable?: boolean;
    children?: any;
    close_snippet?: Snippet;
    onClose?: any;
};
declare const Badge: import("svelte").Component<$$ComponentProps, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
