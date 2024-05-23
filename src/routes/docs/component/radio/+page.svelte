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

<div class="component-wrapper">
	<h1>Radio</h1>
	<p>
		Get started with the radio component to let the user choose a single option from multiple
		options in the form of a circle based on multiple styles and colors
	</p>
	<div class="line"></div>
	<p>
		The radio component can be used to allow the user to choose a single option from one or more
		available options coded with the utility classes from Tailwind CSS and available in multiple
		styles, variants, and colors and support dark mode.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Radio component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default" title="Default" />
	<DefaultExample />
	<Title id="Column" title="Column" />
	<p>use column prop to create radiogroup in vertical.</p>
	<ColumnExample />
	<Title id="Join" title="Join" />
	<p>use join prop to remove space between items.</p>
	<JoinExample />
	<Title id="Button" title="Button" />
	<p>use button prop to change radio item design into a button.</p>
	<ButtonExample />
	<Title id="colors" title="Colors" />
	<p>
		Use these default radio styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">radio</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="radio-size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">radio</span>. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="radio-disable" title="Disabled" />
	<p>
		Use <span class="badge">disabled</span> prop to change radio to a disable
		<span class="badge">radio</span>. you can disabled one item or all item.
	</p>
	<DisableExample />
	
	<Title id="radio-group-disable" title="Disabled Group" />
	<p>
		Use <span class="badge">disabled</span> prop to Make <span class="badge">RadioGroup</span> disable.
	</p>
	<DisableGroupExample />
	
	<Title id="radio-props" title="Radio Props" />
	<p>this is the list of the props that radio can have.</p>
	<ListOfProps />
	<Title id="radiogroup-props" title="RadioGroup Props" />
	<p>this is the list of the props that radiogroup can have.</p>
	<ListOfPropsGroup />
	<div class="py-10"></div>
</div>
