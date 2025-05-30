<script lang="ts">
	import El from '../../utils/El.svelte';
    import type {DialogHeader} from './DialogHeader.type.js'
    import './DialogHeader.css'
	import { ClassMerge } from '../../utils/ClassMerge.js';

    let componentName = 'dialog-header'
    type $$Props = DialogHeader
    export let title: $$Props['title'] = undefined;

    $: titleClass = ClassMerge({name: `${componentName}-title`})
    $: componentClass = {}
</script>

<El {componentName} {componentClass} {...$$restProps}>
    <slot>
        {#if title}
            <h3 class={titleClass}>{title}</h3>
        {/if}
    </slot>
</El>