<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { DialogFooter } from './DialogFooter.type.js';
	import './DialogFooter.scss';

	let componentName = 'dialog-footer';
	type $$Props = DialogFooter;
	export let title: $$Props['title'] = undefined;

	$: componentClass = {};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
