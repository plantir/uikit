<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	
	let isRegistered = false;
	
	onMount(() => {
		// register Swiper custom elements only after component is mounted
		try {
			register();
			isRegistered = true;
		} catch (error) {
			console.warn('Swiper registration error:', error);
		}
	});
	
	export let slidesPerView: string | number = '6';
	export let spaceBetween = '10';
	export let centered = false;
	export let breakpoints: any = null;
	export let navigation: boolean | any = false;
	export let pagination: boolean | any = false;
	export let loop = false;
	export let lazy = false;
	
	// Convert breakpoints to JSON string for Swiper only if provided
	$: breakpointsString = breakpoints ? JSON.stringify(breakpoints) : null;
	
	// Debug logging
	$: if (breakpoints) {
		console.log('Breakpoints provided:', breakpoints);
		console.log('Breakpoints string:', breakpointsString);
	}
	
	const onProgress = (e) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e) => {
		console.log('slide changed');
	};
</script>

{#if isRegistered}
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
{/if}
