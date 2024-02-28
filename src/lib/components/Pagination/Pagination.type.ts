import type { Base, GlobalColor, GlobalSize } from '@plantir/uikit/utils/El.types.js';

export type PaginationType = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity' | undefined;
export type PaginationSize = GlobalSize;
export type PaginationColor = GlobalColor;
export interface Pagination extends Base {
	page: number;
	lastPage: number;
	type?: PaginationType;
	size?: PaginationSize;
	color?: PaginationColor;
}
