<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Switch/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Switch/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Switch/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Switch/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Switch/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Switch/SizesExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Switch</h1>
	</div>
	<ListOfProps />
	<Title id="default-switch" title="Switch" />
	<DefaultExample />
	<Title id="switch-colors" title="Switch Colors" />
	<ColorsExample />
	<Title id="switch-size" title="Switch Sizes" />
	<SizesExample />
	<Title id="switch-disable" title="Switch Disabled" />
	<DisableExample />

	<div class="py-10"></div>
</div>
