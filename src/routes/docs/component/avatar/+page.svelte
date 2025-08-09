<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Avatar/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Avatar/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Avatar/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Avatar/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Avatar/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Avatar/SizesExample.svelte';
	import DotsExample from '$lib/DocsComponent/Samples/Avatar/DotsExample.svelte';
	import OutlineExample from '$lib/DocsComponent/Samples/Avatar/OutlineExample.svelte';
	import GhostExample from '$lib/DocsComponent/Samples/Avatar/GhostExample.svelte';
	import ShapesExample from '$lib/DocsComponent/Samples/Avatar/ShapesExample.svelte';
	import MaskExample from '$lib/DocsComponent/Samples/Avatar/MaskExample.svelte';
	import RingExample from '$lib/DocsComponent/Samples/Avatar/RingExample.svelte';
	import OnlineExample from '$lib/DocsComponent/Samples/Avatar/OnlineExample.svelte';
	import OfflineExample from '$lib/DocsComponent/Samples/Avatar/OfflineExample.svelte';
	import GroupsExample from '$lib/DocsComponent/Samples/Avatar/GroupsExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Avatar</h1>
		<p>
			Avatars are used to show a thumbnail representation of an individual or business in the
			interface.
		</p>
	</div>
	<div class="my-4">
		<ListOfProps />
	</div>

	<Title id="default" title="Avatar" />
	<DefaultExample />
	<Title id="colors" title="Avatar Colors" />
	<ColorsExample />
	<Title id="size" title="Avatar Sizes" />
	<SizesExample />
	<Title id="Shapes" title="Avatar Shapes" />
	<ShapesExample />
	<Title id="Masks" title="Avatar Masks" />
	<MaskExample />
	<Title id="Ring" title="Avatar Ring" />
	<RingExample />
	<Title id="Online" title="Avatar Online" />
	<OnlineExample />
	<Title id="Offline" title="Avatar Offline" />
	<OfflineExample />
	<Title id="Groups" title="Avatar Groups" />
	<GroupsExample />
	<div class="py-10"></div>
</div>
