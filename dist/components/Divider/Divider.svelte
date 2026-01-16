<script lang="ts">
	import type { Divider, DividerColor, DividerSize } from './Divider.type.js';
	import './Divider.css';
	import El from '../../utils/El.svelte';
	type $$Props = Divider;
	let componentName = 'divider';
	export let size: DividerSize = 'md';
	export let color: DividerColor = undefined;
	export let start: boolean = false;
	export let end: boolean = false;
	export let horizontal: boolean = false;
	$: componentClass = {
		size,
		color,
		start,
		end,
		horizontal
	};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
