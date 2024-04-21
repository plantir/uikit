<script lang="ts">
	import Title from "$lib/components/Components/Doc/Title.svelte";
	import ButtonSimpleExample from "$lib/components/Components/Samples/Button/SimpleExample.svelte";


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
	<ButtonSimpleExample />
	<Title id="button-variant" title="Button Variant" />
	<p>
		Use these <span class="badge">variant</span> prop to change type of a
		<span class="badge">button</span>. there is no default option for variant, but you can pass
		these values to the <span class="badge">variant</span> prop.
	</p>
	<ButtonSimpleExample />
</div>
