<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Loading/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Loading/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Loading/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Loading/ColorsExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Loading/SizesExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Loading</h1>
	<p>
		Use the Loading component as a loader indicator in your projects when fetching data based on an
		animated SVG
	</p>
	<div class="line"></div>
	<p>
		The loading component can be used as a loading indicator which comes in multiple colors, sizes,
		and styles separately or inside elements such as buttons to improve the user experience whenever
		data is being fetched from your server.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Loaindg component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default" title="Default" />
	<p>
		Use the following list of loading items to indicate a series of content for your website.
	</p>
	<DefaultExample />
	<Title id="colors" title="Colors" />
	<p>
		Use these default Loading styles with multiple colors to indicate an action or link within
		your website. The default <span class="badge"> color </span>
		is set to <span class="badge">Loading</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="Loading-size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">Loading</span>. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="props" title="Props" />
	<p>this is the list of the props that Loading can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
