<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { CardTitle } from './CardTitle.type.js';
	import './CardTitle.css';
	type $$Props = CardTitle;
	let componentName = 'card-title';
    
	$: componentClass = {
        
	};
</script>

<El
	tag="h2"
	{componentName}
	{componentClass}
	{...$$restProps}>
    <slot />
</El>
