<script lang="ts">
    import type { PageHeader } from './PageHeader.type.js'
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import El from '../../utils/El.svelte';
	import Icon from '../Icon/Icon.svelte';
    // import './PageHeader.css'
    
    type $$Props = PageHeader

    export let back: boolean | undefined = false;
    export let title: string | undefined = undefined;
    export let subtitle: string | undefined = undefined;
    
    let componentName = 'page-header'
    
    function onBack() {
        history.back()
    }
    
    $: componentClass = {}

	$: actionsClass = ClassMerge({
        name: `${componentName}-actions`,
	});

	$: backClass = ClassMerge({
        name: `${componentName}-back`,
	});

	$: subtitleClass = ClassMerge({
        name: `${componentName}-subtitle`,
	});

    $: innerClass = ClassMerge({
        name: `${componentName}-inner`
    })

    $: titleWrapperClass = ClassMerge({
        name: `${componentName}-title-wrapper`,
    })
</script>

<El {componentClass} {componentName} {...$$restProps}>
    <div class={innerClass}>
		<div class={titleWrapperClass}>
            {#if back}
                <button type="button" on:click={onBack} class={backClass}>
                    <Icon name="ArrowLeftMinor" />
                </button>
            {/if}
            {#if title}
                <h1>{title}</h1>
            {/if}
		</div>
        {#if $$slots.default}
            <div class={actionsClass}>
                <slot />
            </div>
        {/if}
	</div>
    {#if subtitle}
        <p class={subtitleClass}>{subtitle}</p>
    {/if}
</El>

