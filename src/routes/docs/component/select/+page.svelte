<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Select/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Select/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Select/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Select/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Select/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Select/SizesExample.svelte';
	import BorderedExample from '$lib/DocsComponent/Samples/Select/BorderedExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Select</h1>
	<p>
		Get started with the select component to allow the user to choose from one or more options from
		a dropdown list based on multiple styles, sizes, and variants
	</p>
	<div class="line"></div>
	<p>
		The select input component can be used to gather information from users based on multiple
		options in the form of a dropdown list and by browsing this page you will find multiple options,
		styles, sizes, and variants built with the utility classes from Tailwind CSS also available in
		dark mode.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import a select component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-Select" title="Default" />
	<p>
		Get started with the default example of a select input component to get a single option
		selection.
	</p>
	<DefaultExample />
	<Title id="select-colors" title="Colors" />
	<p>
		Use these default Select styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">Select</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="select-bordered" title="Bordered" />
	<p>
		Use <span class="badge">bordered</span> prop to change select to a border Select.The default
		<span class="badge"> bordered </span>
		prop is set to <span class="badge">true</span>.
	</p>
	<BorderedExample />
	<Title id="Select-disabled" title="Disable" />
	<p>
		Use <span class="badge">disabled</span> prop to change Select to a disable
		<span class="badge">Select</span>.
	</p>
	<DisableExample />
	<Title id="Select-sizes" title="Select Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">Select</span>. default size option for Select is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="Select-props" title="Props" />
	<p>this is the list of the props that Select can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
