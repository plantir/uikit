<script lang="ts">
	import './Table.css';
	import type { Table, TableColor, TableSize } from './Table.type.js';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Snippet } from 'svelte';

	let {
		disabled = false,
		zebra = false,
		hover = false,
		size,
		pinHead = false,
		pinCols = false,
		class: className,
		children,
		...others
	}: Table & {
		children?: Snippet;
	} = $props();

	let componentName = 'table';
	let componentClass = $derived({
		size: size,
		disabled,
		zebra,
		hover,
		'pin-head': pinHead,
		'pin-cols': pinCols
	});
	let elClass = $derived(
		ClassMerge({ name: componentName, componentClass, staticClassess: className })
	);
</script>

<table class={elClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</table>
