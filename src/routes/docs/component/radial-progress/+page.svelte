<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Progress/ListOfProps.svelte';
	import RadialProgressDefaultExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressDefaultExample.svelte';
	import RadialProgressColorsExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressColorsExample.svelte';
	import RadialProgressSizeExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressSizeExample.svelte';
	import RadialProgressTickExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressTickExample.svelte';
	import RadialProgressProps from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressProps.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Radial progress</h1>
		<p>
			Radial progress can be used to show the progress of a task or to show the passing of time.
		</p>
	</div>
	<RadialProgressProps />
	<Title id="default" title="Radial Progress" />
	<RadialProgressDefaultExample />
	<Title id="colors" title="Radial Progress Colors" />
	<RadialProgressColorsExample />
	<Title id="sizes" title="Radial Progress Sizes" />
	<RadialProgressSizeExample />
    <Title id="tick" title="Radial Progress Tick" />
	<RadialProgressTickExample />
</div>
