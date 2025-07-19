<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import DockProps from '$lib/DocsComponent/Samples/Dock/DockProps.svelte';
	import MenuActiveExample from '$lib/DocsComponent/Samples/Menu/MenuActiveExample.svelte';
	import MenuDefaultExample from '$lib/DocsComponent/Samples/Menu/MenuDefaultExample.svelte';
	import MenuDisableExample from '$lib/DocsComponent/Samples/Menu/MenuDisableExample.svelte';
	import MenuSizesExample from '$lib/DocsComponent/Samples/Menu/MenuSizesExample.svelte';
	import MenuSubmenuCollapsableExample from '$lib/DocsComponent/Samples/Menu/MenuSubmenuCollapsableExample.svelte';
	import MenuSubmenuExample from '$lib/DocsComponent/Samples/Menu/MenuSubmenuExample.svelte';
	import MenuTitleExample from '$lib/DocsComponent/Samples/Menu/MenuTitleExample.svelte';
	import MenuVerticalExample from '$lib/DocsComponent/Samples/Menu/MenuVerticalExample.svelte';
	import NavbarColorsExample from '$lib/DocsComponent/Samples/Navbar/NavbarColorsExample.svelte';
	import NavbarDefaultExample from '$lib/DocsComponent/Samples/Navbar/NavbarDefaultExample.svelte';
	import NavbarProps from '$lib/DocsComponent/Samples/Navbar/NavbarProps.svelte';
	import NavbarSlotsExample from '$lib/DocsComponent/Samples/Navbar/NavbarSlotsExample.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>Navbar</h1>
	</div>
	<NavbarProps />
	<Title id="Navbar" title="Navbar" />
	<NavbarDefaultExample />
	<Title id="Navbar-custom" title="Navbar Custom" />
	<NavbarSlotsExample />
	<Title id="navbar-colors" title="Navbar Colors" />
	<NavbarColorsExample />
	<div class="py-10"></div>
</div>
