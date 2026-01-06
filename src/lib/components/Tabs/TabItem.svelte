<script lang="ts">
	import { writable } from 'svelte/store';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import El from '$lib/utils/El.svelte';
	import { getTabsContext } from './Tabs.svelte';

	import type { TabItem, TabItemColor, TabItemSize } from './TabItem.type.js';
	import './TabItem.css';
	import type { Snippet } from 'svelte';

	let {
		value,
		title,
		titleSnippet,
		children,
		...others
	}: TabItem & {
		titleSnippet?: Snippet;
		children?: Snippet;
	} = $props();

	let componentName = 'tab-item';

	const ctx = getTabsContext();

	const selected = ctx?.selected ?? writable<string | number>();

	let active = $derived($selected === value);
	let componentClass = $derived({
		active
	});
	let tabContentClass = $derived(ClassMerge({ name: `${componentName}-content` }));

	const onClick = () => {
		if (value !== undefined) {
			selected.set(value);
		}
	};
</script>

<El
	{componentName}
	{componentClass}
	{...others}
	onblur
	onclick={onClick}
	oncontextmenu
	onfocus
	onkeydown
	onkeypress
	onkeyup
	onmouseenter
	onmouseleave
	onmouseover
>
	{#if titleSnippet}
		{@render titleSnippet()}
	{:else if title}
		{title}
	{/if}
</El>
{#if active}
	<div class={tabContentClass}>
		<div>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
{/if}
