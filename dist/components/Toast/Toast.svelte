<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { Toast, Toastplacement } from './Toast.type.js';
	import './Toast.css';
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
