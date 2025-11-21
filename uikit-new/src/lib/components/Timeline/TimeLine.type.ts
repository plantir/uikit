import type { Base, GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
export type TimeLineItems = {
    title?: string,
    value: string | number,
    text?: string
}
export interface TimeLine extends Base {
    value?: any
    items: TimeLineItems[]
    color?: GlobalColor
    clickable?: boolean
    reverse?: boolean
    vertical?: boolean
    icon?: boolean
}
