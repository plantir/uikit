import { type Writable } from 'svelte/store';
export interface RadioCtxType {
    join: boolean;
    selected: Writable<string | number | null>;
    disabled: Writable<boolean>;
}
export declare function getRadioGroupContext(): RadioCtxType;
export declare function setRadioGroupContext(value: RadioCtxType): RadioCtxType;
import type { RadioGroup } from './RadioGroup.type.js';
import './RadioGroup.css';
declare const RadioGroup: any;
type RadioGroup = InstanceType<typeof RadioGroup>;
export default RadioGroup;
