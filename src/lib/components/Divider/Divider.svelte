<script lang="ts">
	import type { Divider, DividerColor, DividerSize } from './Divider.type.js';
	import './Divider.scss';
	import El from '$lib/utils/El.svelte';
	type $$Props = Divider;
	let componentName = 'divider';
	export let size: DividerSize = undefined;
	export let color: DividerColor = undefined;
	export let start: boolean = false;
	export let end: boolean = false;
	export let horizontal: boolean = false;
	export let vertical: boolean = false;
	$: componentClass = {
		[size as string]: size,
		[color as string]: color,
		start,
		end,
		horizontal,
		vertical
	};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
