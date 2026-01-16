<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Select/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Select/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Select/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Select/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Select/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Select/SizesExample.svelte';
	import BorderedExample from '$lib/DocsComponent/Samples/Select/BorderedExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Select</h1>
		<p>Select is used to pick a value from a list of options.</p>
	</div>
	<ListOfProps />
	<Title id="default-Select" title="Select" />
	<DefaultExample />
	<Title id="select-colors" title="Colors" />
	<ColorsExample />
	<!-- <Title id="select-bordered" title="Bordered" />
	<BorderedExample /> -->
	<Title id="Select-disabled" title="Disable" />
	<DisableExample />
	<Title id="Select-sizes" title="Select Sizes" />
	<SizesExample />
	<div class="py-10"></div>
</div>
