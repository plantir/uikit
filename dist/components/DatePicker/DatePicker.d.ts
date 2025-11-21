import type { Base, GlobalColor, GlobalSize } from '../../utils/El.types.js';
export type DatePickerSize = GlobalSize;
export type DatePickerColor = 'natural' | GlobalColor;
export type DatePicker = Base & ({
    label?: string | undefined;
    placeholder?: string | undefined;
    value?: string;
    formattedValue?: string;
    dateFormat?: string;
    name?: string;
    size?: DatePickerSize;
    color?: DatePickerColor;
    disabled?: boolean;
    bordered?: boolean;
    range?: false;
} | {
    label?: string | undefined;
    placeholder?: string | undefined;
    value?: string[];
    formattedValue?: string[];
    dateFormat?: string;
    name?: string;
    size?: DatePickerSize;
    color?: DatePickerColor;
    disabled?: boolean;
    bordered?: boolean;
    range: true;
});
