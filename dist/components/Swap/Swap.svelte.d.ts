import type { Swap } from './Swap.type.js';
import './Swap.css';
import type { Snippet } from 'svelte';
type $$ComponentProps = {
    value?: boolean;
    disabled?: boolean;
    on?: Snippet;
    off?: Snippet;
    rotate?: boolean;
    flip?: boolean;
    class?: string;
};
declare const Swap: import("svelte").Component<$$ComponentProps, {}, "value">;
type Swap = ReturnType<typeof Swap>;
export default Swap;
