<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { CardActions } from './CardActions.type.js';
	type $$Props = CardActions;

	let componentName = 'card-actions';
	$: componentClass = {
        
	};
</script>

<El
	{componentName}
	{componentClass}
	{...$$restProps}>
    <slot />
</El>
