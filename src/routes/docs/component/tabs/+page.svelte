<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Tabs/ListOfProps.svelte';
	import SetupTabsExample from '$lib/DocsComponent/Samples/Tabs/SetupTabsExample.svelte';
	import DefaultTabsExample from '$lib/DocsComponent/Samples/Tabs/DefaultTabsExample.svelte';
	import ColorTabsExample from '$lib/DocsComponent/Samples/Tabs/ColorTabsExample.svelte';
	import VariantTabsExample from '$lib/DocsComponent/Samples/Tabs/VariantTabsExample.svelte';
	import SizeTabsExample from '$lib/DocsComponent/Samples/Tabs/SizeTabsExample.svelte';
	import TabsBoxesExample from '$lib/DocsComponent/Samples/Tabs/TabsBoxesExample.svelte';
	import TabsBorderExample from '$lib/DocsComponent/Samples/Tabs/TabsBorderExample.svelte';
	import TabsLiftedExample from '$lib/DocsComponent/Samples/Tabs/TabsLiftedExample.svelte';
	import TabsItemProps from '$lib/DocsComponent/Samples/Tabs/TabsItemProps.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Tabs</h1>
		<p>Tabs can be used to show a list of links in a tabbed format.</p>
	</div>
	<ListOfProps />
	<div class="component-wrapper">
		<h1>TabItem</h1>
	</div>
	<TabsItemProps />
	<Title id="default-tabs" title="Default Tabs" />
	<DefaultTabsExample />
	<Title id="tabs-color" title="Tabs Color" />
	<ColorTabsExample />
	<Title id="tabs-box" title="Tabs Box" />
	<TabsBoxesExample />
	<Title id="tabs-Border" title="Tabs Border" />
	<TabsBorderExample />
	<Title id="tabs-Lift" title="Tabs Lift" />
	<TabsLiftedExample />
	<Title id="tabs-sizes" title="Tabs Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">Tabs</span>. default size option for Tabs is
		<span class="badge">md</span>.
	</p>
	<SizeTabsExample />
	<div class="py-10"></div>
</div>
