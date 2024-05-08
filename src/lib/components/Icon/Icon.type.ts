import type polaris from './libraries/polaris.json'

import type { Base, GlobalSize } from '$lib/utils/El.types.js';

export interface Icon extends Base {
    name: keyof typeof polaris
    size: GlobalSize
}
