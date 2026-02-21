import { type Snippet } from 'svelte';
import { type Writable } from 'svelte/store';
interface CheckboxCtxType {
    join?: boolean;
    disabled?: Writable<boolean>;
    selected: Writable<(string | number)[]>;
}
export declare function getCheckboxGroupContext(): CheckboxCtxType | undefined;
export declare function setCheckboxGroupContext(value: CheckboxCtxType): CheckboxCtxType;
import './CheckboxGroup.css';
type $$ComponentProps = {
    value?: any;
    inline?: boolean;
    join?: boolean;
    column?: boolean;
    disabled?: boolean;
    children?: Snippet;
    onChange?: any;
};
declare const CheckboxGroup: import("svelte").Component<$$ComponentProps, {}, "value">;
type CheckboxGroup = ReturnType<typeof CheckboxGroup>;
export default CheckboxGroup;
