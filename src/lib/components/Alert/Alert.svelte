<script lang="ts">
	import type { Alert, AlertType } from './Alert.type.js';
	import './Alert.css';
	import El from '$lib/utils/El.svelte';
	import type { GlobalColor } from '$lib/utils/El.types.js';
	let {
		color,
		type,
		children,
		...others
	}: {
		color: GlobalColor;
		type: AlertType;
		children: any;
	} = $props();
	let componentName = 'alert';
	let componentClass = $derived({
		type,
		color
	});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
