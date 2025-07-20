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
</script>

<div>
	<div class="component-wrapper">
		<h1>Toast</h1>
		<p>Toast is a wrapper to stack elements, positioned on the corner of page.</p>
	</div>
	<Title id="default" title="toast with alert inside" />
	<ToastDefaultExample />
	<Title id="top-start" title="Toast-top-start" />
	<ToastTopStartExample />
	<Title id="top-center" title="Toast-top-center" />
	<ToastTopCenterExample />
	<Title id="top-end" title="Toast-top-end" />
	<ToastTopEndExample />
	<Title id="middle-start" title="Toast-middle-start" />
	<ToastMiddleStartExample />
	<Title id="middle-center" title="Toast-middle-center" />
	<ToastMiddleCenterExample />
	<Title id="middle-end" title="Toast-middle-end" />
	<ToastMiddleEndExample />
	<Title id="bottom-start" title="Toast-bottom-start" />
	<ToastBottomStartExample />
	<Title id="bottom-center" title="Toast-bottom-center" />
	<ToastBottomCenterExample />
	<Title id="bottom-end" title="Toast-bottom-end(defualt)" />
	<ToastBottomEndExample />
	<div class="py-10"></div>
</div>
