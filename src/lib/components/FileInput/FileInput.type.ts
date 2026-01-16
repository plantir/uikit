import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

export interface FileInput extends Base {
    value?: any
    size?: GlobalSize
    color?: GlobalColor
    label?: string
    custom?: boolean
    multiple?: boolean
    placeholder?: string
    accept?: string
}
