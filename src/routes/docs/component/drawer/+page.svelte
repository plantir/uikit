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
</script>

<div class="component-wrapper">
	<h1>Drawer</h1>
	<p>
		The Drawer component can be used as a hidden off-canvas sidebar for navigation and to show other
		information based on multiple styles and placements
	</p>
	<div class="line"></div>
	<p>
		Use the Drawer component (or “off-canvas”) to show a fixed element relative to the document page
		from any side for navigation, contact forms, informational purposes or other user actions.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Drawer component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-Drawer" title="Default" />
	<DefaultExample />
	<Title id="Position" title="Position" />
	<p>
		the default position of drawer is left if you want to change the position you can pass thesee
		three props :
		<span class="badge">top</span>,
		<span class="badge">right</span>,
		<span class="badge">bottom</span>
	</p>
	<p>
		<span class="badge text-sm">bottom and top position doesn't have min height</span>
	</p>
	<PositionExample />
	<Title id="backdrop" title="Backdrop" />
	<p>
		The backdrop element can be used to dim out the background elements when the drawer is visible
		and also automatically hide the component when clicking outside of it.
	</p>
	<BackdropExample />
	<Title id="clickOutside" title="click Outside" />
	<p>
		As the default, the drawer closes when you click the outside of the drawer. However sometimes
		you don’t want that. Set clickOutside to false to disable it.
	</p>
	<ClickOutsideExample />
	<Title id="props" title="Props" />
	<p>this is the list of the props that Drawer can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
