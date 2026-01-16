<script lang="ts">
	import './Dock.css';
	import El from '../../utils/El.svelte';
	import type { Dock } from './Dock.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	type $$Props = Dock;
	let componentName = 'dock';
	export let size: GlobalSize = 'md';
	export let color: GlobalColor = undefined;
	$: componentClass = {
		size,
		color
	};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps} >
	<slot></slot>
</El>
<!-- </span> -->
