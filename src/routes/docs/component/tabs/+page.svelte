<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Tabs/ListOfProps.svelte';
	import SetupTabsExample from '$lib/DocsComponent/Samples/Tabs/SetupTabsExample.svelte';
	import DefaultTabsExample from '$lib/DocsComponent/Samples/Tabs/DefaultTabsExample.svelte';
	import ColorTabsExample from '$lib/DocsComponent/Samples/Tabs/ColorTabsExample.svelte';
	import VariantTabsExample from '$lib/DocsComponent/Samples/Tabs/VariantTabsExample.svelte';
	import SizeTabsExample from '$lib/DocsComponent/Samples/Tabs/SizeTabsExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Tabs</h1>
	<p>
		Use these responsive tabs components to create a secondary navigational hierarchy for your
		website or toggle content inside a container
	</p>
	<div class="line"></div>
	<p>
		The tabs component can be used either as an extra navigational hierarchy complementing the main
		navbar or you can also use it to change content inside a container just below the tabs using the
		data attributes from UIkit.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Tab components in the script tag and use it.</p>
	<SetupTabsExample />
	<Title id="default-tabs" title="Default Tabs" />
	<p>
		Use the following default tabs component example to show a dynamic content in your webpage. If
		your tab <span class="badge">title</span> is a simple string set the
		<span class="badge">title</span>
		property on TabItem, otherwise when more control is needed overwrite the
		<span class="badge">title</span>
		slot.
	</p>
	<p>
		<span class="badge">value</span> option is <span class="badge">required</span>
	</p>
	<DefaultTabsExample />
	<Title id="tabs-color" title="Tabs Color" />
	<p>
		Use these default tabs styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">tabs</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<p>
		colors prop only work with variant <span class="badge">box</span>.
	</p>
	<ColorTabsExample />
	<Title id="tabs-variant" title="Tabs Variant" />
	<p>
		Use <span class="badge">variant</span> prop to change type of a
		<span class="badge">tab</span>. The default <span class="badge"> variant </span> prop is
		<span class="badge">border</span>. You can change it by using the
		<span class="badge"> variant </span> prop.
	</p>
	<p>
		avalable options are : <span class="badge">border</span><span class="badge">box</span><span
			class="badge">lift</span
		>
	</p>
	<VariantTabsExample />
	<Title id="tabs-sizes" title="Tabs Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">Tabs</span>. default size option for Tabs is
		<span class="badge">md</span>.
	</p>
	<SizeTabsExample />
	<Title id="tabs-props" title="Props" />
	<p>this is the list of the props that Tabs can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
