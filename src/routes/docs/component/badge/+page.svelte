<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Badge/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Badge/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Badge/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Badge/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Badge/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Badge/SizesExample.svelte';
	import DotsExample from '$lib/DocsComponent/Samples/Badge/DotsExample.svelte';
	import OutlineExample from '$lib/DocsComponent/Samples/Badge/OutlineExample.svelte';
	import GhostExample from '$lib/DocsComponent/Samples/Badge/GhostExample.svelte';
	import SoftExample from '$lib/DocsComponent/Samples/Badge/SoftExample.svelte';
	import DashExample from '$lib/DocsComponent/Samples/Badge/DashExample.svelte';
</script>

<div >
	<div class="component-wrapper">
	<h1>Badge</h1>
	<p>
		Badges are used to inform the user of the status of specific data.
	</p>
	</div>
	<div class="my-4">
		<ListOfProps />
	</div>
	<Title id="default" title="Default" />
	<DefaultExample />
	<Title id="colors" title="Colors" />
	<ColorsExample />
	<Title id="Badge-size" title="Sizes" />
	<SizesExample />
	<Title id="Badge-disable" title="Dismissable" />
	<DisableExample />
	<Title id="Dots" title="Dots" />
	<DotsExample />
	<Title id="Outline" title="Outline" />
	<OutlineExample />
	<Title id="Soft" title="Soft" />
	<SoftExample />
	<Title id="Dash" title="Dash" />
	<DashExample />
	<Title id="Ghost" title="Ghost" />
	<GhostExample />
	<div class="py-10"></div>
</div>
