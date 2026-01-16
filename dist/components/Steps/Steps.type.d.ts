import type { Base, GlobalColor, GlobalSize } from '../../utils/El.types.js';
export type StepSize = GlobalSize;
export type StepColor = 'natural' | GlobalColor;
export type StepVariant = 'border' | 'lift' | 'box' | undefined;
export interface StepItem {
    title: string;
    value: string;
}
export interface Step extends Base {
    size?: StepSize;
    color?: StepColor;
    active?: boolean;
    variant?: StepVariant;
    selected?: undefined | string;
    vertical?: boolean;
    horizontal?: boolean;
    items?: string[] | StepItem[];
}
