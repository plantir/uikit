<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Range/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Range/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Range/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Range/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Range/SizesExample.svelte';
	import MinMaxExample from '$lib/DocsComponent/Samples/Range/MinMaxExample.svelte';
	import StepExample from '$lib/DocsComponent/Samples/Range/StepExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Range slider</h1>
		<p>Range slider is used to select a value by sliding a handle.</p>
	</div>
	<ListOfProps />
	<Title id="default" title="Range" />
	<DefaultExample />
	<Title id="min-max" title="Min and Max" />
	<MinMaxExample />
	<Title id="steps" title="Step" />
	<StepExample />
	<Title id="range-colors" title="Colors" />
	<ColorsExample />
	<Title id="range-size" title="Sizes" />
	<SizesExample />
	<Title id="range-disable" title="Disabled" />
	<DisableExample />
	<div class="py-10"></div>
</div>
