<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Table/ListOfProps.svelte';
	import DefaultTableExample from '$lib/DocsComponent/Samples/Table/DefaultTableExample.svelte';
	import ZebraTableExample from '$lib/DocsComponent/Samples/Table/ZebraTableExample.svelte';
	import PinTableExample from '$lib/DocsComponent/Samples/Table/PinTableExample.svelte';
	import SizeTableExample from '$lib/DocsComponent/Samples/Table/SizeTableExample.svelte';
	import PinColsTableExample from '$lib/DocsComponent/Samples/Table/PinColsTableExample.svelte';
	import HoverTableExample from '$lib/DocsComponent/Samples/Table/HoverTableExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Table</h1>
	</div>
	<ListOfProps />
	<Title id="default-Table" title="Table" />
	<DefaultTableExample />
	<Title id="table-zebra" title="Table Zebra" />
	<ZebraTableExample />
	<Title id="table-pin" title="Table Pin Header" />
	<PinTableExample />
	<Title id="table-pin-cols" title="Table Pin Cols" />
	<PinColsTableExample />
	<Title id="Table-sizes" title="Table Sizes" />
	<SizeTableExample />
	<Title id="Table-hover" title="Table Hover" />
	<HoverTableExample />
	<div class="py-10"></div>
</div>
