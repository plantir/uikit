<script lang="ts">
	import type { Rating } from './Rating.type.js';
	import './Rating.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { GlobalColor, GlobalMask, GlobalSize } from '../../utils/El.types.js';
	import El from '../../utils/El.svelte';

	let {
		value = $bindable(0),
		size,
		color,
		mask = 'star',
		readonly = false,
		half = false,
		...others
	}: Rating = $props();

	let componentName = 'rating';
	let componentClass = $derived({
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg',
		xl: size === 'xl',
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		neutral: color === 'neutral',
		mask,
		half
	});
	let random = $state(Math.floor(Math.random() * 1000000));

	function changeVal(i: number) {
		value = (i + 1) / 2;
	}
</script>

<El {componentName} {componentClass} {...others}>
	{#if half}
		{#each { length: 10 } as i, index}
			<input
				type="radio"
				name="rating-{random}"
				onchange={() => changeVal(index)}
				checked={value === (index + 1) / 2}
				{readonly}
				class="half-{(index + 1) % 2}"
			/>
		{/each}
	{:else}
		{#each { length: 5 } as i, index}
			<input
				type="radio"
				name="rating-{random}"
				onchange={() => changeVal(index)}
				checked={value === index + 1}
				{readonly}
			/>
		{/each}
	{/if}
</El>
