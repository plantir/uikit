<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import type { Snippet } from 'svelte';

	let isRegistered = $state(false);

	onMount(() => {
		// register Swiper custom elements only after component is mounted
		try {
			register();
			isRegistered = true;
		} catch (error) {
			console.warn('Swiper registration error:', error);
		}
	});

	let {
		slidesPerView = '6',
		spaceBetween = '10',
		centered = false,
		breakpoints = null,
		navigation = false,
		pagination = false,
		loop = false,
		lazy = false,
		children,
		...others
	}: {
		slidesPerView?: string | number;
		spaceBetween?: string;
		centered?: boolean;
		breakpoints?: any;
		navigation?: boolean | any;
		pagination?: boolean | any;
		loop?: boolean;
		lazy?: boolean;
		children?: Snippet;
	} = $props();

	// Convert breakpoints to JSON string for Swiper only if provided
	let breakpointsString = $derived(breakpoints ? JSON.stringify(breakpoints) : null);

	// Debug logging
	$effect(() => {
		if (breakpoints) {
			console.log('Breakpoints provided:', breakpoints);
			console.log('Breakpoints string:', breakpointsString);
		}
	});

	const onProgress = (e: any) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e: any) => {
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
		onswiperprogress={onProgress}
		onswiperslidechange={onSlideChange}
		{...others}
	>
		{#if children}
			{@render children()}
		{/if}
	</swiper-container>
{/if}
