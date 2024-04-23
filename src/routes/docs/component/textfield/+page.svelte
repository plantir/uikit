<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Textfield/ListOfProps.svelte';
	import SetupTextfieldExample from '$lib/DocsComponent/Samples/Textfield/SetupTextfieldExample.svelte';
	import ColorTextFieldExample from '$lib/DocsComponent/Samples/Textfield/ColorTextFieldExample.svelte';
	import ValueTextFieldExample from '$lib/DocsComponent/Samples/Textfield/ValueTextFieldExample.svelte';
	import PlaceholderTextFiledExample from '$lib/DocsComponent/Samples/Textfield/PlaceholderTextFiledExample.svelte';
	import InputModeTextFieldExample from '$lib/DocsComponent/Samples/Textfield/InputModeTextFieldExample.svelte';
	import BorderedTextFiledExample from '$lib/DocsComponent/Samples/Textfield/BorderedTextFiledExample.svelte';
	import DisabledTextFieldExample from '$lib/DocsComponent/Samples/Textfield/DisabledTextFieldExample.svelte';
	import SizeTextFieldExample from '$lib/DocsComponent/Samples/Textfield/SizeTextFieldExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Text Field</h1>
	<p>
		Get started with a collection of Textfields built with Tailwind CSS to start accepting data from
		the user based on multiple sizes, variants, and input types
	</p>
	<div class="line"></div>
	<p>
		The textfield is an important part of the form element that can be used to create interactive
		controls to accept data from the user based on multiple input types, such as text, email,
		number, password, URL, phone number, and more.
	</p>
	<p>
		On this page you will find all of the input types based on multiple variants, styles, colors,
		and sizes built with the utility classes from Tailwind CSS and components from UIkit.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import a textfield component in the script tag and use it.</p>
	<SetupTextfieldExample />
	<Title id="default-textfield" title="Default Textfield" />
	<p>
		Use these default textfield styles with multiple colors to indicate an action or link within
		your website. The default <span class="badge"> color </span>
		is set to <span class="badge">textfield</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorTextFieldExample />
	<Title id="textfield-value" title="TextField Value" />
	<p>
		Use the <span class="badge">value</span> prop to bind a variable to
		<span class="badge">textfield</span> value. You can set first data with this value option.
	</p>
	<ValueTextFieldExample />
	<Title id="textfield-placeholder" title="Textfield Placeholder" />
	<p>
		Use <span class="badge">placeholder</span> prop to add placeholder to a
		<span class="badge">textfield</span> input. there is no default option for placeholder, but you
		can fill this prop with any <span class="badge">string</span> you want.
		<span class="badge">placeholder</span> display when input value is empty.
	</p>
	<PlaceholderTextFiledExample />
	<Title id="textfield-mode" title="TextField InputMods" />
	<p>
		Use <span class="badge">inputmode</span> prop to change type of a
		<span class="badge">TextField</span>. The default <span class="badge"> inputmode </span>
		is set to <span class="badge">textfield</span> is <span class="badge">String</span>. You can
		change it by using the
		<span class="badge"> inputmode </span> prop.
	</p>
	<InputModeTextFieldExample />
	<Title id="textfiled-bordered" title="TextField Bordered" />
	<p>
		Use <span class="badge">bordered</span> prop to change textfiled to a border textfield.The
		default <span class="badge"> bordered </span>
		is set to <span class="badge">true</span>.
	</p>
	<BorderedTextFiledExample />
	<Title id="textfield-disabled" title="TextField Disable" />
	<p>
		Use <span class="badge">disabled</span> prop to change textfield to a disable
		<span class="badge">textfield</span>.
	</p>
	<DisabledTextFieldExample />
	<Title id="textfield-sizes" title="TextField Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">textfield</span>. default size option for textfield is
		<span class="badge">md</span>.
	</p>
	<SizeTextFieldExample />
	<Title id="textfield-props" title="Props" />
	<p>this is the list of the props that button can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
