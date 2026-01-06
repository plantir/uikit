<script lang="ts">
	import './Stat.css';
	import El from '$lib/utils/El.svelte';
	import type { Stat } from './Stat.type.js';
	import type { Snippet } from 'svelte';

	let {
		center = false,
		figure,
		title,
		value,
		desc,
		actions,
		...others
	}: Stat & {
		figure?: Snippet;
		title?: Snippet;
		value?: Snippet;
		desc?: Snippet;
		actions?: Snippet;
	} = $props();

	let componentName = 'stat';
	let componentClass = $derived({
		center: center === true
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others}>
	<div class="ui-stat-figure">
		{#if figure}
			{@render figure()}
		{/if}
	</div>
	<div class="ui-stat-title">
		{#if title}
			{@render title()}
		{/if}
	</div>
	<div class="ui-stat-value">
		{#if value}
			{@render value()}
		{/if}
	</div>
	<div class="ui-stat-desc">
		{#if desc}
			{@render desc()}
		{/if}
	</div>
	<div class="ui-stat-actions">
		{#if actions}
			{@render actions()}
		{/if}
	</div>
</El>
<!-- </span> -->
