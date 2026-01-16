<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Pagination/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Pagination/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Pagination/ColorsExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Pagination/SizesExample.svelte';
	import PaginationSlotsExample from '$lib/DocsComponent/Samples/Pagination/PaginationSlotsExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Pagination</h1>
		<p>
			Pagination is a group of buttons that allow the user to navigate between a set of related
			content
		</p>
	</div>
	<ListOfProps />
	<Title id="default-Pagination" title="Pagination" />
	<DefaultExample />
	<Title id="Pagination-colors" title="Pagination Colors" />
	<ColorsExample />
	<Title id="Pagination-size" title="Pagination Sizes" />
	<SizesExample />
	<Title id="Pagination-slots" title="Pagination Slots" />
	<PaginationSlotsExample />
	<div class="py-10"></div>
</div>
