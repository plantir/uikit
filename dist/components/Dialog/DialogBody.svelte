<script lang="ts">
	import El from '../../utils/El.svelte';
    import type {DialogBody} from './DialogBody.type.js'
    // import './DialogBody.css'

    let componentName = 'dialog-body'
    type $$Props = DialogBody

    $: componentClass = {}
</script>

<El {componentName} {componentClass} {...$$restProps}>
    <slot />
</El>