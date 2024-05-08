<script lang="ts">
	import { getContext, onMount } from "svelte";

    const ctx = getContext<any>('TABLE')

    export let name: string | undefined = undefined
    export let footer: string | (() => string) | undefined = undefined
    
    onMount(() => {
        ctx.register({name, footer})
    })
</script>

<td {...$$restProps}>
    <slot/>
</td>