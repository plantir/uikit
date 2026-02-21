import type { Snippet } from 'svelte';
type $$ComponentProps = {
    slidesPerView?: string | number;
    spaceBetween?: string;
    centered?: boolean;
    breakpoints?: any;
    navigation?: boolean | any;
    pagination?: boolean | any;
    loop?: boolean;
    lazy?: boolean;
    children?: Snippet;
};
declare const Swiper: import("svelte").Component<$$ComponentProps, {}, "">;
type Swiper = ReturnType<typeof Swiper>;
export default Swiper;
