<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { CardActions } from './CardActions.type.ts';
	import './CardActions.scss';
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
