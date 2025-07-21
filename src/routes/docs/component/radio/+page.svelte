<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Radio/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Radio/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Radio/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Radio/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Radio/DisableExample.svelte';
	import DisableGroupExample from '$lib/DocsComponent/Samples/Radio/DisableGroupExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Radio/SizesExample.svelte';
	import MinMaxExample from '$lib/DocsComponent/Samples/Radio/MinMaxExample.svelte';
	import StepExample from '$lib/DocsComponent/Samples/Radio/StepExample.svelte';
	import ColumnExample from '$lib/DocsComponent/Samples/Radio/ColumnExample.svelte';
	import JoinExample from '$lib/DocsComponent/Samples/Radio/JoinExample.svelte';
	import ButtonExample from '$lib/DocsComponent/Samples/Radio/ButtonExample.svelte';
	import ListOfPropsGroup from '$lib/DocsComponent/Samples/Radio/ListOfPropsGroup.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Radio</h1>
		<p>Radio buttons allow the user to select one option from a set.</p>
	</div>
	<ListOfProps />
	<div class="component-wrapper">
		<h1>RadioGroup</h1>
	</div>
	<ListOfPropsGroup />
	<Title id="default" title="Radio" />
	<DefaultExample />
	<Title id="Column" title="Column" />
	<ColumnExample />
	<Title id="Join" title="Join" />
	<p class="mb-4">use join prop to remove space between items.</p>
	<JoinExample />
	<Title id="Button" title="Button" />
	<ButtonExample />
	<Title id="colors" title="Colors" />
	<ColorsExample />
	<Title id="radio-size" title="Sizes" />
	<SizesExample />
	<Title id="radio-disable" title="Disabled" />
	<DisableExample />
	<Title id="radio-group-disable" title="Disabled Group" />
	<DisableGroupExample />
	<div class="py-10"></div>
</div>
