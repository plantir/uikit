<script lang="ts">
	import El from '$lib/utils/El.svelte';
    import type { Page } from './Page.type.ts'
    import './Page.scss'

    type $$Props = Page

    export let container: boolean | undefined = true;

    let componentName = 'page'

    $: componentClass = {
        container
    }
</script>

<El {componentClass} {componentName} {...$$restProps}>
    <slot/>
</El>