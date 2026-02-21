import { type Snippet } from 'svelte';
import type { Dropdown, DropdownPlacement } from './Dropdown.type.js';
import './Dropdown.css';
type $$ComponentProps = {
    placement?: DropdownPlacement;
    open?: boolean;
    offset?: number;
    children?: Snippet;
    togglerSnippet?: Snippet;
    style?: string;
};
declare const Dropdown: import("svelte").Component<$$ComponentProps, {}, "">;
type Dropdown = ReturnType<typeof Dropdown>;
export default Dropdown;
