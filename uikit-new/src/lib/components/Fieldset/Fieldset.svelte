<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Fieldset } from './Fieldset.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	type $$Props = Fieldset;
	let componentName = 'fieldset';
	export let title: string = '';
	$: componentClass = {};
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps} tag="fieldset">
	{#if title}
		<legend class="ui-fieldset-title">{title}</legend>
	{/if}
	<slot></slot>
</El>
<!-- </span> -->
