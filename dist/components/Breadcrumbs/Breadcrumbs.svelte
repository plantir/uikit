<script lang="ts">
	import './Breadcrumbs.css';
	import El from '../../utils/El.svelte';
	import type { Breadcrumbs } from './Breadcrumbs.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	type $$Props = Breadcrumbs;
	let componentName = 'breadcrumbs';
	$: componentClass = {};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps}>
	<ul>
		<slot></slot>
	</ul>
</El>
<!-- </span> -->
