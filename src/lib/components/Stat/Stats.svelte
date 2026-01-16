<script lang="ts">
	import './Stats.css';
	import El from '$lib/utils/El.svelte';
	import type { Stats } from './Stats.type.js';
	type $$Props = Stats;
	let componentName = 'stats';
	export let vertical = false;
	$: componentClass = {
		vertical: vertical == true
	};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps}>
	<slot></slot>
</El>
<!-- </span> -->
