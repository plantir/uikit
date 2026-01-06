<script lang="ts">
	import './Diff.css';
	import El from '$lib/utils/El.svelte';
	import type { Aspect, Diff } from './Diff.type.js';
	import type { Snippet } from 'svelte';

	let {
		aspect = '16/9',
		item1,
		item2,
		...others
	}: Diff & {
		item1?: Snippet;
		item2?: Snippet;
	} = $props();

	let componentName = 'diff';
	let componentClass = $derived({
		aspect_16: aspect === '16/9',
		aspect_4: aspect === '4/3',
		'aspect-square': aspect === '1/1'
	});
</script>

<!-- <span transition:fade> -->
<El
	{componentName}
	{componentClass}
	class="aspect-{aspect}"
	{...others}
	tabindex={0}
	tag="figure"
>
	<div class="item-1">
		{#if item1}
			{@render item1()}
		{/if}
	</div>
	<div class="item-2">
		{#if item2}
			{@render item2()}
		{/if}
	</div>
	<div class="ui-diff-resizer"></div>
</El>
<!-- </span> -->
