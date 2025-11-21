<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Stat } from './Stat.type.js';
	type $$Props = Stat;
	let componentName = 'stat';
	export let center = false;
	$: componentClass = {
		center: center == true
	};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps}>
	<div class="ui-stat-figure">
		<slot name="figure"></slot>
	</div>
	<div class="ui-stat-title">
		<slot name="title"></slot>
	</div>
	<div class="ui-stat-value">
		<slot name="value"></slot>
	</div>
	<div class="ui-stat-desc">
		<slot name="desc"></slot>
	</div>
	<div class="ui-stat-actions">
		<slot name="actions"></slot>
	</div>
</El>
<!-- </span> -->
