<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import DockProps from '$lib/DocsComponent/Samples/Dock/DockProps.svelte';
	import MenuActiveExample from '$lib/DocsComponent/Samples/Menu/MenuActiveExample.svelte';
	import MenuDefaultExample from '$lib/DocsComponent/Samples/Menu/MenuDefaultExample.svelte';
	import MenuDisableExample from '$lib/DocsComponent/Samples/Menu/MenuDisableExample.svelte';
	import MenuItemProps from '$lib/DocsComponent/Samples/Menu/MenuItemProps.svelte';
	import MenuProps from '$lib/DocsComponent/Samples/Menu/MenuProps.svelte';
	import MenuSizesExample from '$lib/DocsComponent/Samples/Menu/MenuSizesExample.svelte';
	import MenuSubmenuCollapsableExample from '$lib/DocsComponent/Samples/Menu/MenuSubmenuCollapsableExample.svelte';
	import MenuSubmenuExample from '$lib/DocsComponent/Samples/Menu/MenuSubmenuExample.svelte';
	import MenuTitleExample from '$lib/DocsComponent/Samples/Menu/MenuTitleExample.svelte';
	import MenuVerticalExample from '$lib/DocsComponent/Samples/Menu/MenuVerticalExample.svelte';
	import SubMenuProps from '$lib/DocsComponent/Samples/Menu/SubMenuProps.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>Menu</h1>
	</div>
	<MenuProps />
	<div class="component-wrapper">
		<h1>MenuItem</h1>
	</div>
	<MenuItemProps />
	<div class="component-wrapper">
		<h1>Submenu</h1>
	</div>
	<SubMenuProps />
	<Title id="Menu" title="Menu" />
	<MenuDefaultExample />
	<Title id="menu-horzintal" title="Menu Horzintal" />
	<MenuVerticalExample />
	<Title id="Menu-active" title="Menu Active" />
	<MenuActiveExample />
	<Title id="menu-sizes" title="Menu Sizes" />
	<MenuSizesExample />
    <Title id="menu-disabled" title="Menu Disabled" />
	<MenuDisableExample />
	<Title id="menu-title" title="Menu Title" />
	<MenuTitleExample />
	<Title id="menu-submenu" title="Menu Submenu" />
	<MenuSubmenuExample />
	<Title id="menu-collapse" title="Menu Collapse" />
	<MenuSubmenuCollapsableExample />
	<div class="py-10"></div>
</div>
