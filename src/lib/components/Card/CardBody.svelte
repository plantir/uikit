<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { CardBody } from './CardBody.type.ts';
	// import './CardBody.css';
	type $$Props = CardBody;
	let componentName = 'card-body';
    
	$: componentClass = {
        
	};
</script>

<El
	{componentName}
	{componentClass}
	{...$$restProps}>
    <slot />
</El>
