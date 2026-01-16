<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Checkbox/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Checkbox/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Checkbox/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Checkbox/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Checkbox/SizesExample.svelte';
	import IndeterminateExample from '$lib/DocsComponent/Samples/Checkbox/IndeterminateExample.svelte';
	import ListOfGroupProps from '$lib/DocsComponent/Samples/Checkbox/ListOfGroupProps.svelte';
	import CheckboxColumnExample from '$lib/DocsComponent/Samples/Checkbox/CheckboxColumnExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Checkbox</h1>
		<p>Checkboxes are used to select or deselect a value.</p>
	</div>
	<ListOfProps />
	<div class="component-wrapper">
		<h1>CheckboxGroup</h1>
	</div>
	<ListOfGroupProps />
	<Title id="default" title="Default" />
	<DefaultExample />
	<Title id="colors" title="Colors" />
	<ColorsExample />
	<Title id="Checkbox-size" title="Sizes" />
	<SizesExample />
	<Title id="Checkbox-disable" title="Disabled" />
	<DisableExample />
	<Title id="Indeterminate" title="Indeterminate" />
	<IndeterminateExample />
	<Title id="checkbox-column" title="Checkbox Column" />
	<CheckboxColumnExample />

	<div class="py-10"></div>
</div>
