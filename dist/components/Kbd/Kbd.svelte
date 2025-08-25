<script lang="ts">
	import './Kbd.css';
	import El from '../../utils/El.svelte';
	import type { Kbd, KbdSize } from './Kbd.type.js';
	type $$Props = Kbd;
	let componentName = 'kbd';
	export let size: KbdSize = 'md';
	$: componentClass = {
		size: size
	};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps} tag="kbd">
	<slot></slot>
</El>
<!-- </span> -->
