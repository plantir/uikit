<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Checkbox/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Checkbox/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Checkbox/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Checkbox/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Checkbox/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Checkbox/SizesExample.svelte';
	import ListOfPropsGroup from '$lib/DocsComponent/Samples/Checkbox/ListOfPropsGroup.svelte';
	import IndeterminateExample from '$lib/DocsComponent/Samples/Checkbox/IndeterminateExample.svelte';
	import ListOfGroupProps from '$lib/DocsComponent/Samples/Checkbox/ListOfGroupProps.svelte';
</script>

<div class="component-wrapper">
	<h1>Checkbox</h1>
	<p>
		Get started with the checkbox component to allow the user to select one or more options in the
		form of a square box available in multiple sizes and colors
	</p>
	<div class="line"></div>
	<p>
		The checkbox component can be used to receive one or more selected options from the user in the
		form of a square box available in multiple styles, sizes, colors, and variants.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Checkbox component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default" title="Default" />
	<p>
		Use this default example of a checkbox element in a checked, unchecked and indeterminate state.
	</p>
	<DefaultExample />
	<Title id="colors" title="Colors" />
	<p>
		Use these default Checkbox styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">Checkbox</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="Checkbox-size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">Checkbox</span>. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="Checkbox-disable" title="Disabled" />
	<p>
		Use <span class="badge">disabled</span> prop to change Checkbox to a disable
		<span class="badge">Checkbox</span>. you can disabled one item or all item.
	</p>
	<DisableExample />
	<Title id="Indeterminate" title="Indeterminate" />
	<p>
		Use this Indeterminate example of a checkbox element.
	</p>
	<IndeterminateExample />
	<Title id="Checkbox-props" title="Props" />
	<p>this is the list of the props that Checkbox can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
	<Title id="Checkbox-Group props" title="Checkbox-Group Props" />
	<p>this is the list of the props that Checkbox can have.</p>
	<ListOfGroupProps />
	<div class="py-10"></div>
</div>
