import { type Writable } from 'svelte/store';
interface CheckboxCtxType {
    join?: boolean;
    disabled?: Writable<boolean>;
    selected: Writable<(string | number)[]>;
}
export declare function getCheckboxGroupContext(): CheckboxCtxType | undefined;
export declare function setCheckboxGroupContext(value: CheckboxCtxType): CheckboxCtxType;
import './CheckboxGroup.css';
import type { CheckboxGroup } from './CheboxGroup.type.js';
declare const CheckboxGroup: any;
type CheckboxGroup = InstanceType<typeof CheckboxGroup>;
export default CheckboxGroup;
