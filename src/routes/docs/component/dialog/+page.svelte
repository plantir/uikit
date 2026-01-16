<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Dialog/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Dialog/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Dialog/DefaultExample.svelte';
	import ConfirmExample from '$lib/DocsComponent/Samples/Dialog/DialogPartsExample.svelte';
	import PlacementExample from '$lib/DocsComponent/Samples/Dialog/PlacementExample.svelte';
</script>

<div>
	<div class="component-wrapper mb-4">
		<h1>Dialog</h1>
		<p>Dialog is used to show a dialog or a box when you click a button.</p>
	</div>
	<ListOfProps />
	<Title id="default-Dialog" title="Dialog" />
	<DefaultExample />
	<Title id="dialog-parts" title="Dialog Parts" />
	<ConfirmExample />
	<Title id="placement-Dialog" title="Dialog Placements" />
	<PlacementExample />
	<div class="py-10"></div>
</div>
