<script lang="ts">
	import './Navbar.css';
	import El from '../../utils/El.svelte';
	import type { Navbar } from './Navbar.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	type $$Props = Navbar;
	let componentName = 'navbar';
	export let custom: boolean = false;
	export let color: GlobalColor = undefined;
	$: componentClass = {
		color: color
	};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps} tag="nav">
	{#if custom}
		<slot></slot>
	{:else}
		<div class="ui-navbar-start">
			<slot name="start"></slot>
		</div>
		<div class="ui-navbar-center">
			<slot name="center"></slot>
		</div>
		<div class="ui-navbar-end">
			<slot name="end"></slot>
		</div>
	{/if}
</El>
<!-- </span> -->
