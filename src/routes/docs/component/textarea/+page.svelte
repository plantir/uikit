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

<div>
	<div class="component-wrapper">
		<h1>TextArea</h1>
		<p>Textarea allows users to enter text in multiple lines.</p>
	</div>
	<ListOfProps />

	<Title id="default" title="TextArea" />
	<SetupTextareaExample />
	<Title id="textarea-colors" title="TextArea Colors" />
	<ColorTextareaExample />
	<Title id="textarea-value" title="Textarea Value" />
	<ValueTextareaExample />
	<Title id="textarea-placeholder" title="TextArea Placeholder" />
	<PlaceholderTextareaExample />
	<Title id="textarea-ghost" title="Textarea ghost" />
	<BorderedTextareaExample />
	<Title id="textarea-disabled" title="Textarea Disable" />
	<DisabledTextareaExample />
	<Title id="textarea-sizes" title="Textarea Sizes" />
	<SizeTextareaExample />
	<div class="py-10"></div>
</div>
