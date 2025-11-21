<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Loading, LoadingColor, LoadingSize, LoadingType } from './Loading.types.js';

	type $$Props = Loading;
	let componentName = 'loading';
	export let type: LoadingType = 'spinner';
	export let size: LoadingSize = undefined;
	export let color: LoadingColor = undefined;
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		xl: size == 'xl',
		spinner: type == 'spinner',
		dots: type == 'dots',
		ring: type == 'ring',
		ball: type == 'ball',
		bars: type == 'bars',
		infinity: type == 'infinity',
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		warning: color == 'warning',
		info: color == 'info',
		error: color == 'error',
		neutral: color == 'neutral'
	};
</script>

<El {componentClass} {componentName} {...$$restProps}></El>
