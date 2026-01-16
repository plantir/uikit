<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Progress/ListOfProps.svelte';
	import RadialProgressDefaultExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressDefaultExample.svelte';
	import RadialProgressColorsExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressColorsExample.svelte';
	import RadialProgressSizeExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressSizeExample.svelte';
	import RadialProgressTickExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressTickExample.svelte';
	import RadialProgressProps from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressProps.svelte';
	import SkeletonDefaultExample from '$lib/DocsComponent/Samples/Skeleton/SkeletonDefaultExample.svelte';
	import SkeletonCardExample from '$lib/DocsComponent/Samples/Skeleton/SkeletonCardExample.svelte';
	import ToastDefaultExample from '$lib/DocsComponent/Samples/Toast/ToastDefaultExample.svelte';
	import ToastTopStartExample from '$lib/DocsComponent/Samples/Toast/ToastTopStartExample.svelte';
	import ToastTopCenterExample from '$lib/DocsComponent/Samples/Toast/ToastTopCenterExample.svelte';
	import ToastTopEndExample from '$lib/DocsComponent/Samples/Toast/ToastTopEndExample.svelte';
	import ToastMiddleStartExample from '$lib/DocsComponent/Samples/Toast/ToastMiddleStartExample.svelte';
	import ToastMiddleCenterExample from '$lib/DocsComponent/Samples/Toast/ToastMiddleCenterExample.svelte';
	import ToastMiddleEndExample from '$lib/DocsComponent/Samples/Toast/ToastMiddleEndExample.svelte';
	import ToastBottomStartExample from '$lib/DocsComponent/Samples/Toast/ToastBottomStartExample.svelte';
	import ToastBottomCenterExample from '$lib/DocsComponent/Samples/Toast/ToastBottomCenterExample.svelte';
	import ToastBottomEndExample from '$lib/DocsComponent/Samples/Toast/ToastBottomEndExample.svelte';
    import TooltipDefaultExample from '$lib/DocsComponent/Samples/Tooltip/TooltipDefaultExample.svelte'
	import ToastProps from '$lib/DocsComponent/Samples/Toast/ToastProps.svelte';
	import TooltipCustomExample from '$lib/DocsComponent/Samples/Tooltip/TooltipCustomExample.svelte';
	import TooltipPlacementExample from '$lib/DocsComponent/Samples/Tooltip/TooltipPlacementExample.svelte';
	import TooltipColorsExample from '$lib/DocsComponent/Samples/Tooltip/TooltipColorsExample.svelte';
	import TooltipProps from '$lib/DocsComponent/Samples/Tooltip/TooltipProps.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Tooltip</h1>
		<p>Tooltip can be used to show a message when hovering over an element.</p>
	</div>
	<TooltipProps />
	<Title id="default" title="Tooltip" />
	<TooltipDefaultExample />
	<Title id="custom-content" title="Tooltip custom content" />
	<TooltipCustomExample />
	<Title id="placement" title="Tooltip placement" />
	<TooltipPlacementExample />
	<Title id="colors" title="Tooltip Colors" />
	<TooltipColorsExample />
	<div class="py-10"></div>
</div>
