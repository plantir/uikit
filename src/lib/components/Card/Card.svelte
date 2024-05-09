<script lang="ts">
	import Loading from '../Loading/Loading.svelte';
	import El from '$lib/utils/El.svelte';
	import type { Card } from './Card.type.ts';
	import './Card.scss';
	
	type $$Props = Card;
	let componentName = 'card';
    
	$: componentClass = {
        
	};
</script>

<El
	{componentName}
	{componentClass}
	{...$$restProps}>
    <slot />
</El>
