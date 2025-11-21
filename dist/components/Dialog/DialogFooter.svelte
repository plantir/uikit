<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { DialogFooter } from './DialogFooter.type.js';

	let componentName = 'dialog-footer';
	type $$Props = DialogFooter;
	export let title: $$Props['title'] = undefined;

	$: componentClass = {};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
