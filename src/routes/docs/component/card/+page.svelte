<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import BorderExample from '$lib/DocsComponent/Samples/Card/BorderExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Card/ColorsExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Card/DefaultExample.svelte';
	import FullImageExample from '$lib/DocsComponent/Samples/Card/FullImageExample.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Card/ListOFProps.svelte';
	import SideImageExample from '$lib/DocsComponent/Samples/Card/SideImageExample.svelte';
	import SizeExample from '$lib/DocsComponent/Samples/Card/SizeExample.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>Card</h1>
	</div>
	<ListOfProps />
	<div class="pb-6"></div>
	<Title id="card" title="Card" />
	<DefaultExample />
	<Title id="card-size" title="Card Size" />
	<SizeExample />
	<Title id="card-border" title="Card Border" />
	<BorderExample />
	<Title id="full-image" title="Full Image" />
	<FullImageExample />
	<Title id="colors-card" title="Colors card" />
	<ColorsExample />
	<Title id="side-card" title="Side Image" />
	<SideImageExample />
</div>
