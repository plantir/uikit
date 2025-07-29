<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Divider/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Divider/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Divider/DefaultExample.svelte';
	import PositionExample from '$lib/DocsComponent/Samples/Divider/PositionExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Divider/ColorsExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Divider/SizesExample.svelte';
	import HorzintalExample from '$lib/DocsComponent/Samples/Divider/HorzintalExample.svelte';
	import DividerStartExample from '$lib/DocsComponent/Samples/Divider/DividerStartExample.svelte';
	import DividerEndExample from '$lib/DocsComponent/Samples/Divider/DividerEndExample.svelte';
	import DividerStartHorzintalExample from '$lib/DocsComponent/Samples/Divider/DividerStartHorzintalExample.svelte';
	import DividerEndHorzintalExample from '$lib/DocsComponent/Samples/Divider/DividerEndHorzintalExample.svelte';
</script>

<div>
	<div class="component-wrapper mb-4">
		<h1>Divider</h1>
		<p>Divider will be used to separate content vertically or horizontally.</p>
	</div>
	<ListOfProps />
	<Title id="Divider" title="Divider" />
	<DefaultExample />
	<Title id="start" title="Divider Start" />
	<DividerStartExample />
	<Title id="end" title="Divider End" />
	<DividerEndExample />
	<Title id="colors" title="Divider Colors" />
	<ColorsExample />
	<Title id="size" title="Sizes" />
	<SizesExample />
	<Title id="horizontal" title="Horizontal" />
	<HorzintalExample />
	<Title id="horizontal" title="Horizontal Start" />
	<DividerStartHorzintalExample />
	<Title id="horizontal" title="Horizontal End" />
	<DividerEndHorzintalExample />
	<div class="py-10"></div>
</div>
