<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Status, StatusAnimate } from './Status.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	type $$Props = Status;
	let componentName = 'status';
	export let color: GlobalColor = undefined;
	export let size: GlobalSize = undefined;
	export let animate: StatusAnimate = undefined;
	$: componentClass = {
		color: color,
		size: size,
		animate: animate
	};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps}></El>
<!-- </span> -->
