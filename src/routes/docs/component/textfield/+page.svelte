<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Textfield/ListOfProps.svelte';
	import SetupTextfieldExample from '$lib/DocsComponent/Samples/Textfield/SetupTextfieldExample.svelte';
	import ColorTextFieldExample from '$lib/DocsComponent/Samples/Textfield/ColorTextFieldExample.svelte';
	import InputModeTextFieldExample from '$lib/DocsComponent/Samples/Textfield/InputModeTextFieldExample.svelte';
	import BorderedTextFiledExample from '$lib/DocsComponent/Samples/Textfield/BorderedTextFiledExample.svelte';
	import DisabledTextFieldExample from '$lib/DocsComponent/Samples/Textfield/DisabledTextFieldExample.svelte';
	import TextFieldSizes from '$lib/DocsComponent/Samples/Textfield/TextFieldSizes.svelte';
	import TextFieldDataListSuggestionExample from '$lib/DocsComponent/Samples/Textfield/TextFieldDataListSuggestionExample.svelte';
	import TextFieldTextValidatorExample from '$lib/DocsComponent/Samples/Textfield/TextFieldTextValidatorExample.svelte';
	import TextFieldSlotsExample from '$lib/DocsComponent/Samples/Textfield/TextFieldSlotsExample.svelte';
	import TextFieldGhostExample from '$lib/DocsComponent/Samples/Textfield/TextFieldGhostExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>TextField</h1>
		<p>TextField is a simple input field.</p>
	</div>
	<ListOfProps />
	<Title id="default-textfield" title="Textfield" />
	<SetupTextfieldExample />
	<Title id="default-colors" title="Textfield Colors" />
	<ColorTextFieldExample />
	<Title id="default-sizes" title="Textfield Sizes" />
	<TextFieldSizes />
	<Title id="textfield-disabled" title="TextField Disable" />
	<DisabledTextFieldExample />
	<Title id="textfield-disabled" title="TextField Ghost" />
	<TextFieldGhostExample />
	<Title id="textfield-datalist" title="TextField DataList suggestion" />
	<TextFieldDataListSuggestionExample />
	<Title id="textfield-slots" title="TextField slots" />
	<TextFieldSlotsExample />
	<Title id="textfield-mode" title="TextField types" />
	<InputModeTextFieldExample />
	<Title id="textfield-validation" title="TextField Validation" />
	<TextFieldTextValidatorExample />
	<div class="py-10"></div>
</div>
