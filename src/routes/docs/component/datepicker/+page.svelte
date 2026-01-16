<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/DatePicker/ListOfProps.svelte';
	import SetupDatePickerExample from '$lib/DocsComponent/Samples/DatePicker/SetupDatePickerExample.svelte';
	import ValueDatePickerExample from '$lib/DocsComponent/Samples/DatePicker/ValueDatePickerExample.svelte';
	import PlaceholderTextFiledExample from '$lib/DocsComponent/Samples/DatePicker/PlaceholderDatePickerExample.svelte';
	import DisabledDatePickerExample from '$lib/DocsComponent/Samples/DatePicker/DisabledDatePickerExample.svelte';
	import SizeDatePickerExample from '$lib/DocsComponent/Samples/DatePicker/SizeDatePickerExample.svelte';
	import DefaultDatePickerExample from '$lib/DocsComponent/Samples/DatePicker/DefaultDatePickerExample.svelte';
	import RangeDatePickerExample from '$lib/DocsComponent/Samples/DatePicker/RangeDatePickerExample.svelte';
	import FormattedDatePickerExample from '$lib/DocsComponent/Samples/DatePicker/FormattedDatePickerExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>DatePicker</h1>
		<p>
			Get started with a collection of DatePickers built with Tailwind CSS to start accepting data
			from user based on multiple types and formates.
		</p>
	</div>
	<ListOfProps />
	<div class="mb-10"></div>
	<Title id="default-DatePicker" title="DatePicker" />
	<DefaultDatePickerExample />
	<Title id="DatePicker-value" title="DatePicker Value" />
	<ValueDatePickerExample />
	<Title id="DatePicker-placeholder" title="DatePicker Placeholder" />
	<PlaceholderTextFiledExample />
	<Title id="DatePicker-disabled" title="DatePicker Disable" />
	<DisabledDatePickerExample />
	<Title id="DatePicker-sizes" title="DatePicker Sizes" />
	<SizeDatePickerExample />
	<Title id="DatePicker-Range" title="DatePicker Range" />
	<RangeDatePickerExample />
	<Title id="DatePicker-Formatted value" title="Formated value" />
	<FormattedDatePickerExample />
	<div class="py-10"></div>
</div>
