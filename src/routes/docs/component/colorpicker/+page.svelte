<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/ColorPicker/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/ColorPicker/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/ColorPicker/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/ColorPicker/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/ColorPicker/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/ColorPicker/SizesExample.svelte';
	import ShapeExample from '$lib/DocsComponent/Samples/ColorPicker/ShapeExample.svelte';
	import VariantExample from '$lib/DocsComponent/Samples/ColorPicker/VariantExample.svelte';
	import WideExample from '$lib/DocsComponent/Samples/ColorPicker/WideExample.svelte';
</script>

<div >
	<div class="component-wrapper">
		<h1>ColorPicker</h1>
		<p>Use the ColorPicker component to pick a color in forms and others elements.</p>
	</div>
	<ListOfProps />
	<Title id="default-ColorPicker" title="ColorPicker" />
	<DefaultExample />
	<Title id="slots" title="ColorPicker Slots" />
	<ColorsExample />
	<div class="py-10"></div>
</div>
