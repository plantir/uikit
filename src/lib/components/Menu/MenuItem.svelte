<script lang="ts">
	import './MenuItem.css';
	import El from '$lib/utils/El.svelte';
	import type { MenuItem } from './MenuItem.type.js';
	type $$Props = MenuItem;
	let componentName = 'menu-item';
	export let active: boolean = false;
	export let disabled: boolean = false;
	$: componentClass = {
		active,
        disabled
	};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps} tag="li">
	<slot></slot>
</El>
<!-- </span> -->
