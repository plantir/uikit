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
	<Title id="slots" title="Slots" />
	<p>
		you can create custom colorPicker with slots
	</p>
	<ColorsExample />
	<Title id="tabs-props" title="Props" />
	<p>this is the list of the props that ColorPicker can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
