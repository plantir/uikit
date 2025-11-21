<script lang="ts">
	import El from '$lib/utils/El.svelte';
    import type {DialogBody} from './DialogBody.type.js'

    let componentName = 'dialog-body'
    type $$Props = DialogBody

    $: componentClass = {}
</script>

<El {componentName} {componentClass} {...$$restProps}>
    <slot />
</El>