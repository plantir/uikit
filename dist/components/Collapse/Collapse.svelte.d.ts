import type { Collapse, CollapseColor, CollapseSize, CollapseVariant } from './Collapse.type.js';
import './Collapse.css';
import type { Snippet } from 'svelte';
type $$ComponentProps = {
    disabled?: boolean;
    size?: CollapseSize;
    color?: CollapseColor;
    variant?: CollapseVariant;
    dismissable?: boolean;
    open?: boolean;
    plus?: boolean;
    arrow?: boolean;
    children: Snippet;
    title: Snippet;
};
declare const Collapse: import("svelte").Component<$$ComponentProps, {}, "">;
type Collapse = ReturnType<typeof Collapse>;
export default Collapse;
