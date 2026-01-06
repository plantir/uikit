<script lang="ts">
	import './Fieldset.css';
	import El from '$lib/utils/El.svelte';
	import type { Fieldset } from './Fieldset.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	import type { Snippet } from 'svelte';

	let {
		title = '',
		children,
		...others
	}: Fieldset & {
		children?: Snippet;
	} = $props();

	let componentName = 'fieldset';
	let componentClass = $derived({});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others} tag="fieldset">
	{#if title}
		<legend class="ui-fieldset-title">{title}</legend>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</El>
<!-- </span> -->
