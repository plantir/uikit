<script lang="ts">
	import type { Swap } from './Swap.type.js';
	import './Swap.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Snippet } from 'svelte';
	type $$Props = Swap;
	let componentName = 'swap';
	export let value: boolean = false;
	export let disabled: boolean = false;
	export let on: string | Snippet = '';
	export let off: string | Snippet = '';
	export let rotate: boolean = false;
	export let flip: boolean = false;
	$: componentClass = {
		disabled: disabled,
		rotate: rotate,
		flip: flip
	};
	$: wrapperClass = ClassMerge({
		name: `${componentName}-wrapper`,
		componentClass,
		staticClassess: $$props.class
	});
	$: elClassOn = ClassMerge({ name: `${componentName}-on` });
	$: elClassOff = ClassMerge({ name: `${componentName}-off` });
</script>

<label class={wrapperClass}>
	<input type="checkbox" bind:checked={value} />
	{#if typeof on === 'string'}
		<div class=" {elClassOn}">{on}</div>
	{:else}
		<div class=" {elClassOn}">
			{@render on()}
		</div>
	{/if}
	{#if typeof off === 'string'}
		<div class=" {elClassOff}">{off}</div>
	{:else}
		<div class=" {elClassOff}">
			{@render off()}
		</div>
	{/if}
</label>
