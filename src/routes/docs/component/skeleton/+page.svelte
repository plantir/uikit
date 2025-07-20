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
</script>

<div>
	<div class="component-wrapper">
		<h1>Skeleton</h1>
		<p>Skeleton is a component that can be used to show a loading state of a component.</p>
	</div>
	<Title id="default" title="Skeleton" />
	<SkeletonDefaultExample />
	<Title id="colors" title="Skeleton example" />
	<SkeletonCardExample />
</div>
