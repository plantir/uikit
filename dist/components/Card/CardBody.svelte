<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { CardBody } from './CardBody.type.js';

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
