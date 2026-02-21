<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import DefaultButtonExample from '$lib/DocsComponent/Samples/Button/DefaultButtonExample.svelte';
	import ButtonSimpleExample from '$lib/DocsComponent/Samples/Button/SimpleExample.svelte';
	import SizeButtonExample from '$lib/DocsComponent/Samples/Button/SizeButtonExample.svelte';
	import VariantButtonExample from '$lib/DocsComponent/Samples/Button/VariantButtonExample.svelte';
	import ShapeButtonExample from '$lib/DocsComponent/Samples/Button/ShapeButtonExample.svelte';
	import LinkButtonExample from '$lib/DocsComponent/Samples/Button/LinkButtonExample.svelte';
	import DisabledButtonExample from '$lib/DocsComponent/Samples/Button/DisabledButtonExample.svelte';
	import LoadingButtonExample from '$lib/DocsComponent/Samples/Button/LoadingButtonExample.svelte';
	import WideButtonExample from '$lib/DocsComponent/Samples/Button/WideButtonExample.svelte';
	import ActiveButtonExample from '$lib/DocsComponent/Samples/Button/ActiveButtonExample.svelte';
	import BlockButtonExample from '$lib/DocsComponent/Samples/Button/BlockButtonExample.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Button/ListOfProps.svelte';
	import GlassButtonColorExample from '$lib/DocsComponent/Samples/Button/GlassButtonColorExample.svelte';
	import OutlineButtonColorExample from '$lib/DocsComponent/Samples/Button/OutlineButtonColorExample.svelte';
	import DashedButtonColorExample from '$lib/DocsComponent/Samples/Button/DashedButtonColorExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Button</h1>
	<p>Import a button component in the script tag and use it.</p>
	<div class="my-4">
		<ListOfProps />
	</div>
	<ButtonSimpleExample />
	<Title id="colors-button" title="Colors button" />
	<DefaultButtonExample />
	<Title id="button-variant" title="Button Variant" />
	<VariantButtonExample />
	<Title id="glass-button-color" title="Glass button color" />
	<GlassButtonColorExample />
	<Title id="outline-button-color" title="Outline button color" />
	<OutlineButtonColorExample />
	<Title id="dashed-button-color" title="Dashed button color" />
	<DashedButtonColorExample />
	<Title id="button-size" title="Button Size" />
	<SizeButtonExample />
	<Title id="button-shape" title="Button Shape" />
	<ShapeButtonExample />
	<Title id="button-link" title="Button Link" />
	<LinkButtonExample />
	<Title id="button-disabled" title="Button Disable" />
	<DisabledButtonExample />
	<Title id="button-loading" title="Button Loading" />
	<LoadingButtonExample />
	<Title id="button-wide" title="Button Wide" />
	<WideButtonExample />
	<Title id="button-active" title="Button Active" />
	<ActiveButtonExample />
	<Title id="button-block" title="Button Block" />
	<BlockButtonExample />
	<div class="py-10"></div>
</div>
