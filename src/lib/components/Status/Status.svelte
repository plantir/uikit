<script lang="ts">
	import './Status.css';
	import El from '$lib/utils/El.svelte';
	import type { Status, StatusAnimate } from './Status.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';

	let {
		color,
		size,
		animate,
		...others
	}: Status = $props();

	let componentName = 'status';
	let componentClass = $derived({
		color: color,
		size: size,
		animate: animate
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others}></El>
<!-- </span> -->
