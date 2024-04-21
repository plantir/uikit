<script lang="ts">
	import Title from '$lib/components/Components/Doc/Title.svelte';
	import DefaultButtonExample from '$lib/components/Components/Samples/Button/DefaultButtonExample.svelte';
	import ButtonSimpleExample from '$lib/components/Components/Samples/Button/SimpleExample.svelte';
	import SizeButtonExample from '$lib/components/Components/Samples/Button/SizeButtonExample.svelte';
	import VariantButtonExample from '$lib/components/Components/Samples/Button/VariantButtonExample.svelte';
	import ShapeButtonExample from '$lib/components/Components/Samples/Button/ShapeButtonExample.svelte';
	import LinkButtonExample from '$lib/components/Components/Samples/Button/LinkButtonExample.svelte';
	import DisabledButtonExample from '$lib/components/Components/Samples/Button/DisabledButtonExample.svelte';
	import LoadingButtonExample from '$lib/components/Components/Samples/Button/LoadingButtonExample.svelte';
	import WideButtonExample from '$lib/components/Components/Samples/Button/WideButtonExample.svelte';
	import ActiveButtonExample from '$lib/components/Components/Samples/Button/ActiveButtonExample.svelte';
	import BlockButtonExample from '$lib/components/Components/Samples/Button/BlockButtonExample.svelte';
	import ListOfProps from '$lib/components/Components/Samples/Button/ListOfProps.svelte';
</script>

<div class="component-wrapper">
	<h1>Button</h1>
	<p>
		Use the button component inside forms, as links, social login, payment options with support for
		multiple styles, colors, sizes, gradients, and shadows
	</p>
	<div class="line"></div>
	<p>
		The button component is probably the most widely used element in any user interface or website
		as it can be used to launch an action but also to link to other pages.
	</p>
	<p>
		Flowbite-Svelte provides a large variety of styles and sizes for the button component including
		outlined buttons, multiple colors, sizes, buttons with icons, and more.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import a button component in the script tag and use it.</p>
	<ButtonSimpleExample />
	<Title id="default-button" title="Default button" />
	<p>
		Use these default button styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">button</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<DefaultButtonExample />
	<Title id="button-variant" title="Button Variant" />
	<p>
		Use these <span class="badge">variant</span> prop to change type of a
		<span class="badge">button</span>. there is no default option for variant, but you can pass
		these values to the <span class="badge">variant</span> prop.
	</p>
	<VariantButtonExample />
	<Title id="button-size" title="Button Size" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">button</span>. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizeButtonExample />
	<Title id="button-shape" title="Button Shape" />
	<p>
		Use <span class="badge">shape</span> prop to change shape of a
		<span class="badge">button</span>. there is no default option for shape, but you can pass these
		values to the <span class="badge">shape</span> prop.
	</p>
	<ShapeButtonExample />
	<Title id="button-link" title="Button Link" />
	<p>
		Use <span class="badge">href</span> prop to change button to a
		<span class="badge">link</span>.
	</p>
	<LinkButtonExample />
	<Title id="button-disabled" title="Button Disable" />
	<p>
		Use <span class="badge">disabled</span> prop to change button to a disable
		<span class="badge">button</span>.
	</p>
	<DisabledButtonExample />
	<Title id="button-loading" title="Button Loading" />
	<p>
		Use <span class="badge">loading</span> prop to change button to a loading
		<span class="badge">button</span>. loading also change button to disabled mode and user can't
		click any more on the button while button is on loading section. you can bind a variable to
		loading to customize your loading.
	</p>
	<LoadingButtonExample />
	<Title id="button-wide" title="Button Wide" />
	<p>
		Use <span class="badge">wide</span> prop to change button to a wide
		<span class="badge">button</span>.
	</p>
	<WideButtonExample />
	<Title id="button-active" title="Button Active" />
	<p>
		Use <span class="badge">active</span> prop to change button to a wide
		<span class="badge">button</span>.
	</p>
	<ActiveButtonExample />
	<Title id="button-block" title="Button Block" />
	<p>
		Use <span class="badge">block</span> prop to change button to a block
		<span class="badge">button</span>.
	</p>
	<BlockButtonExample />
	<Title id="button-props" title="Props" />
	<p>this is the list of the props that button can have.</p>
	<ListOfProps />
</div>
