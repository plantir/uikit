<script lang="ts">
    import type { Icon } from './Icon.type.js';
    import './Icon.scss';
	
    import polaris from './libraries/polaris.json'
	import El from '$lib/utils/El.svelte';
	import type { GlobalSize } from '$lib/utils/El.types.js';
    
    type $$Props = Icon
    
    let componentName = 'icon';
	
    export let name: keyof typeof polaris;
    export let size: GlobalSize = undefined;

	$: componentClass = {
        xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg'
	};

</script>

<El tag="span" {componentName} {componentClass} {...$$restProps}>
    {@html polaris[name]}
</El>