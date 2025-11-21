<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Menu } from './Menu.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	type $$Props = Menu;
	let componentName = 'menu';
	export let size: GlobalSize = undefined;
	export let horzintal: boolean = false;
	export let title: string = '';
	$: componentClass = {
		size: size,
		horzintal
	};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps} tag="ul">
	{#if title}
		<li class="menu-title">{title}</li>
	{/if}
	<slot></slot>
</El>
<!-- </span> -->
