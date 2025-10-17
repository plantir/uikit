<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Autocomplete/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Autocomplete/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Autocomplete/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Autocomplete/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Autocomplete/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Autocomplete/SizesExample.svelte';
	import BorderedExample from '$lib/DocsComponent/Samples/Autocomplete/BorderedExample.svelte';
	import FetchExample from '$lib/DocsComponent/Samples/Autocomplete/FetchExample.svelte';
	import MultipleExample from '$lib/DocsComponent/Samples/Autocomplete/MultipleExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Autocomplete</h1>
		<p>Autocomplete is used to pick a value from a list of options.</p>
	</div>
	<ListOfProps />
	<Title id="default-Autocomplete" title="Autocomplete" />
	<DefaultExample />
	<Title id="fetch-Autocomplete" title="Fetch items" />
	<FetchExample />
	<Title id="multiple-Autocomplete" title="Multiple items" />
	<MultipleExample />
	<Title id="select-colors" title="Colors" />
	<ColorsExample />
	<!-- <Title id="select-bordered" title="Bordered" />
	<BorderedExample /> -->
	<Title id="Autocomplete-disabled" title="Disable" />
	<DisableExample />
	<Title id="Autocomplete-sizes" title="Autocomplete Sizes" />
	<SizesExample />
	<div class="py-10"></div>
</div>
