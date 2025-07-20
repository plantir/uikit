<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Loading/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Loading/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Loading/ColorsExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Loading/SizesExample.svelte';
	import LoadingDotsExample from '$lib/DocsComponent/Samples/Loading/LoadingDotsExample.svelte';
	import LoadingRingExample from '$lib/DocsComponent/Samples/Loading/LoadingRingExample.svelte';
	import LoadingBallExample from '$lib/DocsComponent/Samples/Loading/LoadingBallExample.svelte';
	import LoadingBarsExample from '$lib/DocsComponent/Samples/Loading/LoadingBarsExample.svelte';
	import LoadingInfinityExample from '$lib/DocsComponent/Samples/Loading/LoadingInfinityExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Loading</h1>
		<p>Loading shows an animation to indicate that something is loading.</p>
	</div>
	<ListOfProps />
	<Title id="Loading" title="Loading" />
	<DefaultExample />
	<Title id="colors" title="Loading Colors" />
	<ColorsExample />
	<Title id="Loading-size" title="Loading Sizes" />
	<SizesExample />
	<Title id="Loading-dots" title="Loading Dots" />
	<LoadingDotsExample />
	<Title id="Loading-ring" title="Loading ring" />
	<LoadingRingExample />
	<Title id="Loading-ball" title="Loading ball" />
	<LoadingBallExample />
	<Title id="Loading-bars" title="Loading bars" />
	<LoadingBarsExample />
	<Title id="Loading-infinity" title="Loading infinity" />
	<LoadingInfinityExample />
	<div class="py-10"></div>
</div>
