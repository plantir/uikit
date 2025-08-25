<script lang="ts">
	import type { Alert, AlertType } from './Alert.type.js';
	import './Alert.css';
	import El from '../../utils/El.svelte';
	import type { GlobalColor } from '../../utils/El.types.js';
	type $$Props = Alert;
	let componentName = 'alert';
	export let color: GlobalColor = undefined;
	export let type: AlertType = undefined;
	$: componentClass = {
		type,
		color
	};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
