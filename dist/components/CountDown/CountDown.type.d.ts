import type { Base, GlobalColor, GlobalSize } from '../../utils/El.types.js';
import type moment from 'moment';
export type CountDownValue = Date | moment.Moment | undefined;
export type CountDownType = 'colons' | 'clock' | 'box' | 'labels' | 'labels-under' | 'box-label';
export type CountDownSize = GlobalSize;
export type CountDownColors = GlobalColor | 'neutral';
export interface CountDown extends Base {
    value?: CountDownValue;
    type?: CountDownType;
    size?: CountDownSize;
    colors?: CountDownColors;
}
