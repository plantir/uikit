<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Toast, Toastplacement } from './Toast.type.js';
	type $$Props = Toast;
	let componentName = 'toast';
	export let placement: Toastplacement = 'bottom-end';
	$: componentClass = {
		placement: placement
	};
</script>

<El {componentClass} {componentName} {...$$restProps}>
	<slot></slot>
</El>
