<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Table/ListOfProps.svelte';
	import SetupTableExample from '$lib/DocsComponent/Samples/Table/SetupTableExample.svelte';
	import DefaultTableExample from '$lib/DocsComponent/Samples/Table/DefaultTableExample.svelte';
	import ZebraTableExample from '$lib/DocsComponent/Samples/Table/ZebraTableExample.svelte';
	import PinTableExample from '$lib/DocsComponent/Samples/Table/PinTableExample.svelte';
	import SizeTableExample from '$lib/DocsComponent/Samples/Table/SizeTableExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Table</h1>
	<p>
		Use the table component to show text, images, links, and other elements inside a structured set
		of data made up of rows and columns of table cells
	</p>
	<div class="line"></div>
	<p>
		The table component represents a set of structured elements made up of rows and columns as table
		cells that can be used to show data sets to your website users.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Table component in the script tag and use it.</p>
	<SetupTableExample />
	<Title id="default-Table" title="Default Table" />
	<p>
		Use the following example of a responsive table component to show multiple rows and columns of
		text data.
	</p>
	<DefaultTableExample />
	<Title id="table-zebra" title="Table Zebra" />
	<p>
		use <span class="badge">zebra</span> prop to highlight even rows
	</p>
	<ZebraTableExample />
	<Title id="table-pin" title="Table Pin Header" />
	<p>
		Use <span class="badge">pinHead</span> prop to pin
		<span class="badge">header</span>.
	</p>
	<PinTableExample />
	<Title id="Table-sizes" title="Table Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">Table</span>. default size option for Table is
		<span class="badge">md</span>.
	</p>
	<SizeTableExample />
	<Title id="tabs-props" title="Props" />
	<p>this is the list of the props that Table can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
