import type { Writable } from 'svelte/store';
interface TabCtxType {
    selected: Writable<string | number>;
}
export declare function setTabsContext(value: TabCtxType): TabCtxType;
export declare function getTabsContext(): TabCtxType;
import type { Tab } from './Tabs.type.js';
import './Tabs.css';
import type { Snippet } from 'svelte';
type $$ComponentProps = Tab & {
    children?: Snippet;
};
declare const Tabs: import("svelte").Component<$$ComponentProps, {}, "selected">;
type Tabs = ReturnType<typeof Tabs>;
export default Tabs;
