<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Pagination/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Pagination/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Pagination/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Pagination/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Pagination/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Pagination/SizesExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Pagination</h1>
	<p>
		Use the Tailwind CSS pagination element to indicate a series of content across various pages
	</p>
	<div class="line"></div>
	<p>
		The pagination component can be used to navigate across a series of content and data sets for
		various pages such as blog posts, products, and more. You can use multiple variants of this
		component with or without icons and even for paginating table data entries.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Pagination component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-Pagination" title="Default" />
	<p>
		Use the following list of pagination items to indicate a series of content for your website.
	</p>
	<DefaultExample />
	<Title id="Pagination-colors" title="Colors" />
	<p>
		Use these default Pagination styles with multiple colors to indicate an action or link within
		your website. The default <span class="badge"> color </span>
		is set to <span class="badge">Pagination</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="Pagination-size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">Pagination</span>. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="props" title="Props" />
	<p>this is the list of the props that pagination can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
