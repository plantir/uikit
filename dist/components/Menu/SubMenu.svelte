<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { SubMenu } from './SubMenu.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	type $$Props = SubMenu;
	let componentName = 'sub-menu';
	export let collapse: boolean = false;
	export let title = '';
	$: componentClass = {};
</script>

<!-- <span transition:fade> -->
{#if collapse}
	<details open {...$$restProps}>
		{#if title}
			<summary>{title}</summary>
		{/if}
		<ul>
			<slot></slot>
		</ul>
	</details>
{:else}
	{#if title}
		<a>{title}</a>
	{/if}
	<El {componentName} {componentClass} {...$$restProps} tag="ul">
		<slot></slot>
	</El>
{/if}
<!-- </span> -->
