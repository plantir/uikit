<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import SampleWrapper from '$lib/DocsComponent/Samples/SampleWrapper.svelte';
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { Button, Dropdown } from '$lib/index.js';
	import ListOfProps from '$lib/DocsComponent/Samples/DropDown/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/DropDown/DefaultExample.svelte';
	import PlacementExample from '$lib/DocsComponent/Samples/DropDown/PlacementExample.svelte';
	import TopAlignmentExample from '$lib/DocsComponent/Samples/DropDown/TopAlignmentExample.svelte';
	import BottomAlignmentExample from '$lib/DocsComponent/Samples/DropDown/BottomAlignmentExample.svelte';
	import LeftAlignmentExample from '$lib/DocsComponent/Samples/DropDown/leftAlignmentExample.svelte';
	import RightAlignmentExample from '$lib/DocsComponent/Samples/DropDown/rightAlignmentExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Dropdown</h1>
	<p>
		The Dropdown component show some extra contents when some other action is done e.g a button is
		clicked.
	</p>
	<div class="my-4">
		<ListOfProps />
	</div>
	<Title id="default" title="Default" />
	<DefaultExample />
	<Title id="placement" title="Placement" />
	<PlacementExample />
	<Title id="top-alignment" title="Top Alignment" />
	<TopAlignmentExample />
	<Title id="bottom-alignment" title="Bottom Alignment" />
	<BottomAlignmentExample />
	<Title id="left-alignment" title="Left Alignment" />
	<LeftAlignmentExample />
	<Title id="right-alignment" title="Right Alignment" />
	<RightAlignmentExample />
</div>
