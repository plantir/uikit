<script lang="ts">
	import './Diff.css';
	import El from '$lib/utils/El.svelte';
	import type { Aspect, Diff } from './Diff.type.js';
	type $$Props = Diff;
	let componentName = 'diff';
	export let aspect: Aspect = '16/9';
	$: componentClass = {
		aspect_16: aspect == '16/9',
		aspect_4: aspect == '4/3',
		'aspect-square': aspect == '1/1',
	};
</script>

<!-- <span transition:fade> -->
<El
	{componentName}
	{componentClass}
	class="aspect-{aspect}"
	{...$$restProps}
	tabindex={0}
	tag="figure"
>
	<div class="item-1">
		<slot name="item-1" />
	</div>
	<div class="item-2">
		<slot name="item-2" />
	</div>
	<div class="ui-diff-resizer"></div>
</El>
<!-- </span> -->
