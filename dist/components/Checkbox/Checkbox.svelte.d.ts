import { type Snippet } from 'svelte';
import type { Checkbox, CheckboxColor, CheckboxSize } from './Checkbox.type.js';
import './Checkbox.css';
type $$ComponentProps = {
    checked?: boolean;
    label?: string;
    value?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    size?: CheckboxSize;
    color?: CheckboxColor;
    children?: Snippet;
    class?: string;
    labelSnippet?: Snippet;
    onchange?: any;
};
declare const Checkbox: import("svelte").Component<$$ComponentProps, {}, "checked">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
