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

<div class="component-wrapper">
	<h1>ColorPicker</h1>
	<p>Use the ColorPicker component to pick a color in forms and others elements.</p>
	<div class="line"></div>
	<p>
		The ColorPicker can be used to receive a color type from the user available in multiple sizes,
		styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import ColorPicker component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-ColorPicker" title="Default" />
	<p>
		Get started with the default ColorPicker component example as a button element to receive a type
		color from the user.
	</p>
	<DefaultExample />
	<Title id="ColorPicker-colors" title="Colors" />
	<p>
		Use these default ColorPicker styles with multiple colors to your website. there is no default
		color . You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<p><span class="badge">your color only apply when colorpicker does not have a value</span></p>
	<ColorsExample />
	<Title id="ColorPicker-size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">ColorPicker</span> button. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="ColorPicker-disable" title="Disabled" />
	<p>
		Use <span class="badge">disabled</span> prop to change ColorPicker to a disable
		<span class="badge">ColorPicker</span> button.
	</p>
	<DisableExample />
	<Title id="variant" title="Variant" />
	<p>
		Use these <span class="badge">variant</span> prop to change type of a colorpicker
		<span class="badge">button</span>. there is no default option for variant, but you can pass
		these values to the <span class="badge">variant</span> prop.
	</p>
	<VariantExample />
	<Title id="shape" title="Shape" />
	<p>
		Use <span class="badge">shape</span> prop to change shape of a colorpicker
		<span class="badge">button</span>. there is no default option for shape, but you can pass these
		values to the <span class="badge">shape</span> prop.
	</p>
	<ShapeExample />
	<Title id="wide" title=" Wide" />
	<p>
		Use <span class="badge">wide</span> prop to change colorpicker button to a wide
		<span class="badge">button</span>.
	</p>
	<WideExample />
	<Title id="tabs-props" title="Props" />
	<p>this is the list of the props that ColorPicker can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
