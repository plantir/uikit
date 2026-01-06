<script lang="ts">
	import type { Icon } from './Icon.type.js';
	import './Icon.css';

	import polaris from './libraries/polaris.json';
	import El from '$lib/utils/El.svelte';
	import type { GlobalSize } from '$lib/utils/El.types.js';

	let {
		name,
		size,
		...others
	}: Icon = $props();

	let componentName = 'icon';

	let componentClass = $derived({
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg'
	});
</script>

<El tag="span" {componentName} {componentClass} {...others}>
	{#if name}
		{@html polaris[name]}
	{/if}
</El>