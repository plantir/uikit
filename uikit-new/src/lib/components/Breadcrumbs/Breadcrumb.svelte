<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Breadcrumbs } from './Breadcrumbs.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	type $$Props = Breadcrumbs;
	let componentName = 'breadcrumb';
	$: componentClass = {};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps} tag="li">
	<slot></slot>
</El>
<!-- </span> -->
