<script lang="ts">
	import type { PageHeader } from './PageHeader.type.js';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import El from '../../utils/El.svelte';
	import Icon from '../Icon/Icon.svelte';
	import './PageHeader.css';
	import type { Snippet } from 'svelte';

	let {
		back = false,
		title,
		subtitle,
		children,
		...others
	}: PageHeader & {
		children?: Snippet;
	} = $props();

	let componentName = 'page-header';

	function onBack() {
		history.back();
	}

	let componentClass = $derived({});

	let actionsClass = $derived(
		ClassMerge({
			name: `${componentName}-actions`
		})
	);

	let backClass = $derived(
		ClassMerge({
			name: `${componentName}-back`
		})
	);

	let subtitleClass = $derived(
		ClassMerge({
			name: `${componentName}-subtitle`
		})
	);

	let innerClass = $derived(
		ClassMerge({
			name: `${componentName}-inner`
		})
	);

	let titleWrapperClass = $derived(
		ClassMerge({
			name: `${componentName}-title-wrapper`
		})
	);
</script>

<El {componentClass} {componentName} {...others}>
	<div class={innerClass}>
		<div class={titleWrapperClass}>
			{#if back}
				<button type="button" onclick={onBack} class={backClass}>
					<Icon name="ArrowLeftMinor" />
				</button>
			{/if}
			{#if title}
				<h1>{title}</h1>
			{/if}
		</div>
		{#if children}
			<div class={actionsClass}>
				{@render children()}
			</div>
		{/if}
	</div>
	{#if subtitle}
		<p class={subtitleClass}>{subtitle}</p>
	{/if}
</El>

