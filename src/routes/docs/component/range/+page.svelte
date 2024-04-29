<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Range/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Range/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Range/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Range/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Range/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Range/SizesExample.svelte';
	import MinMaxExample from '$lib/DocsComponent/Samples/Range/MinMaxExample.svelte';
	import StepExample from '$lib/DocsComponent/Samples/Range/StepExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Range</h1>
	<p>
		Get started with the range component to receive a number from the user anywhere from 1 to 100 by
		sliding form control horizontally based on multiple options
	</p>
	<div class="line"></div>
	<p>
		The range component can be used as an input field to get a number from the user based on your
		custom selection (ie. from 1 to 100) by using a sliding animation.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Range component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-range" title="Default" />
	<DefaultExample />
	<Title id="min-max" title="Min and Max" />
	<p>
		you can pass <span class="badge">min</span> and <span class="badge">max</span> props to change maximum
		and minimum range. the default number for min prop is 0 and default number for max prop is 100
	</p>
	<MinMaxExample />
	<Title id="steps" title="Step" />
	<p>
		you can pass <span class="badge">step</span> prop to range component. step prop shows step in bottom
		of range component.
	</p>
	<StepExample />
	<Title id="range-colors" title="Colors" />
	<p>
		Use these default range styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">range</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="range-size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">range</span>. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="range-disable" title="Disabled" />
	<p>
		Use <span class="badge">disabled</span> prop to change range to a disable
		<span class="badge">range</span>.
	</p>
	<DisableExample />
	<Title id="props" title="Props" />
	<p>this is the list of the props that range can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
