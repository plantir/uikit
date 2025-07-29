<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Drawer/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Drawer/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Drawer/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Drawer/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Drawer/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Drawer/SizesExample.svelte';
	import StepExample from '$lib/DocsComponent/Samples/Drawer/StepExample.svelte';
	import PositionExample from '$lib/DocsComponent/Samples/Drawer/PositionExample.svelte';
	import BackdropExample from '$lib/DocsComponent/Samples/Drawer/BackdropExample.svelte';
	import ClickOutsideExample from '$lib/DocsComponent/Samples/Drawer/ClickOutsideExample.svelte';
	import DrawerTransitionsExample from '$lib/DocsComponent/Samples/Drawer/DrawerTransitionsExample.svelte';
</script>

<div>
	<div class="component-wrapper mb-4">
		<h1>Drawer</h1>
		<p>
			Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.
		</p>
	</div>
	<ListOfProps />
	<Title id="default-Drawer" title="Drawer" />
	<DefaultExample />
	<Title id="Position" title="Drawer Position" />
	<PositionExample />
	<Title id="backdrop" title="Drawer Backdrop" />
	<BackdropExample />
	<Title id="clickOutside" title="Drawer click Outside" />
	<ClickOutsideExample />
	<Title id="transitions" title="Drawer transitions" />
	<DrawerTransitionsExample />
	<div class="py-10"></div>
</div>
