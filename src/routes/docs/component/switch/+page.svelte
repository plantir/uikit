<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Switch/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Switch/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Switch/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Switch/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Switch/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Switch/SizesExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Switch</h1>
	<p>
		Use the Switch component to switch between a binary state of true or false using a single click
		available in multiple sizes, and colors
	</p>
	<div class="line"></div>
	<p>
		The toggle component can be used to receive a simple “yes” or “no” type of answer from the user
		by choosing a single option from two options available in multiple sizes, styles, and colors
		coded with the utility classes from Tailwind CSS and with dark mode support.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Switch component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-switch" title="Default" />
	<p>
		Get started with the default switch component example as a checkbox element to receive a true or
		false selection from the user.
	</p>
	<DefaultExample />
	<Title id="switch-colors" title="Colors" />
	<p>
		Use these default switch styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">switch</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="switch-size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">switch</span>. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="switch-disable" title="Disabled" />
	<p>
		Use <span class="badge">disabled</span> prop to change switch to a disable
		<span class="badge">switch</span>.
	</p>
	<DisableExample />
	<Title id="tabs-props" title="Props" />
	<p>this is the list of the props that Switch can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
