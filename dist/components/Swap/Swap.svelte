<script lang="ts">
	import type { Swap } from './Swap.type.js';
	import './Swap.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Snippet } from 'svelte';
	let componentName = 'swap';
	let {
		value = $bindable(false),
		disabled = false,
		on = defaultOnSnippet,
		off = defaultOffSnippet,
		rotate = false,
		flip = false,
		class: className
	}: {
		value?: boolean;
		disabled?: boolean;
		on?: Snippet;
		off?: Snippet;
		rotate?: boolean;
		flip?: boolean;
		class?: string;
	} = $props();
	let componentClass = $derived({
		'opacity-50 cursor-not-allowed': disabled,
		rotate: rotate,
		flip: flip
	});
	let wrapperClass = $derived(
		ClassMerge({
			name: `${componentName}-wrapper`,
			componentClass,
			staticClassess: className
		})
	);
	let elClassOn = $derived(ClassMerge({ name: `${componentName}-on` }));
	let elClassOff = $derived(ClassMerge({ name: `${componentName}-off` }));
</script>

{#snippet defaultOnSnippet()}
	On
{/snippet}
{#snippet defaultOffSnippet()}
	Off
{/snippet}
<label class={wrapperClass}>
	<input type="checkbox" bind:checked={value} />
	<div class=" {elClassOn}">
		{@render on()}
	</div>
	<div class=" {elClassOff}">
		{@render off()}
	</div>
</label>
