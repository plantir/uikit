<script lang="ts">
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
	export let slidesPerView: string | number = '6';
	export let spaceBetween = '10';
	export let centered = false;
	export let breakpoints = {
		320: {
			slidesPerView: Math.round(+slidesPerView / 5)
		},
		640: {
			slidesPerView: Math.round(+slidesPerView / 3)
		},
		768: {
			slidesPerView: Math.round(+slidesPerView / 2)
		},
		1024: {
			slidesPerView: +slidesPerView
		}
	};
	export let navigation: boolean | any = false;
	export let pagination: boolean | any = false;
	export let loop = false;
	export let lazy = false;
	const onProgress = (e) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e) => {
		console.log('slide changed');
	};
</script>

<!-- {pagination}
{navigation}
{breakpoints}
{lazy} -->

<swiper-container
	slides-per-view={slidesPerView}
	space-between={spaceBetween}
	centered-slides={centered}
	{pagination}
	{navigation}
	{lazy}
	{loop}
	{breakpoints}
	on:swiperprogress
	on:swiperslidechange
>
	<slot />
</swiper-container>
