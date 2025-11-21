<script lang="ts">
	import type { Swap } from './Swap.type.js';
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
		'opacity-50 cursor-not-allowed': disabled,
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
	{#if $$slots.on}
		<div class=" {elClassOn}">
			<slot name="on" />
		</div>
	{:else}
		<div class=" {elClassOn}">{on}</div>
	{/if}
	{#if $$slots.off}
		<div class=" {elClassOff}">
			<slot name="off" />
		</div>
	{:else}
		<div class=" {elClassOff}">{off}</div>
	{/if}
</label>
