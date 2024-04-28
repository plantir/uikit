<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Textarea/ListOfProps.svelte';
	import SetupTextareaExample from '$lib/DocsComponent/Samples/Textarea/SetupTextareaExample.svelte';
	import ColorTextareaExample from '$lib/DocsComponent/Samples/Textarea/ColorTextareaExample.svelte';
	import ValueTextareaExample from '$lib/DocsComponent/Samples/Textarea/ValueTextareaExample.svelte';
	import PlaceholderTextareaExample from '$lib/DocsComponent/Samples/Textarea/PlaceholderTextareaExample.svelte';
	import InputModeTextareaExample from '$lib/DocsComponent/Samples/Textarea/InputModeTextareaExample.svelte';
	import BorderedTextareaExample from '$lib/DocsComponent/Samples/Textarea/BorderedTextareaExample.svelte';
	import DisabledTextareaExample from '$lib/DocsComponent/Samples/Textarea/DisabledTextareaExample.svelte';
	import SizeTextareaExample from '$lib/DocsComponent/Samples/Textarea/SizeTextareaExample.svelte';
</script>

<div class="component-wrapper">
	<h1>TextArea</h1>
	<p>
		Get started with a collection of Textarea built with Tailwind CSS to start accepting data from
		the user based on multiple sizes, variants, and input types
	</p>
	<div class="line"></div>
	<p>
		The textarea is an important part of the form element that can be used to create interactive
		controls to accept data from the user based on multiple input types, such as text, email,
		number, password, URL, phone number, and more.
	</p>
	<p>
		On this page you will find all of the input types based on multiple variants, styles, colors,
		and sizes built with the utility classes from Tailwind CSS and components from UIkit.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import a textarea component in the script tag and use it.</p>
	<SetupTextareaExample />
	<Title id="default-textarea" title="Default TextArea" />
	<p>
		Use these default textarea styles with multiple colors to indicate an action or link within
		your website. The default <span class="badge"> color </span>
		is set to <span class="badge">textarea</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorTextareaExample />
	<Title id="textarea-value" title="Textarea Value" />
	<p>
		Use the <span class="badge">value</span> prop to bind a variable to
		<span class="badge">textarea</span> value. You can set first data with this value option.
	</p>
	<ValueTextareaExample />
	<Title id="textarea-placeholder" title="TextArea Placeholder" />
	<p>
		Use <span class="badge">placeholder</span> prop to add placeholder to a
		<span class="badge">textarea</span> input. there is no default option for placeholder, but you
		can fill this prop with any <span class="badge">string</span> you want.
		<span class="badge">placeholder</span> display when input value is empty.
	</p>
	<PlaceholderTextareaExample />
	<Title id="textarea-mode" title="Textarea InputMods" />
	<p>
		Use <span class="badge">inputmode</span> prop to change type of a
		<span class="badge">Textarea</span>. The default <span class="badge"> inputmode </span>
		is set to <span class="badge">textarea</span> is <span class="badge">String</span>. You can
		change it by using the
		<span class="badge"> inputmode </span> prop.
	</p>
	<InputModeTextareaExample />
	<Title id="textarea-bordered" title="Textarea Bordered" />
	<p>
		Use <span class="badge">bordered</span> prop to change textarea to a border textarea.The
		default <span class="badge"> bordered </span>
		is set to <span class="badge">true</span>.
	</p>
	<BorderedTextareaExample />
	<Title id="textarea-disabled" title="Textarea Disable" />
	<p>
		Use <span class="badge">disabled</span> prop to change textarea to a disable
		<span class="badge">textarea</span>.
	</p>
	<DisabledTextareaExample />
	<Title id="textarea-sizes" title="Textarea Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">textarea</span>. default size option for textarea is
		<span class="badge">md</span>.
	</p>
	<SizeTextareaExample />
	<Title id="textarea-props" title="Props" />
	<p>this is the list of the props that textarea can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
