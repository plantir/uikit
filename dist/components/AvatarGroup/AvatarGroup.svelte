<script lang="ts">
	import type { AvatarGroup } from './AvatarGroup.type.js';
	import './AvatarGroup.css';
	import El from '../../utils/El.svelte';
	let {
		children,
		...others
	}: {
		children: any;
	} = $props();
	let componentName = 'avatar-group';
	let componentClass = $derived({});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
