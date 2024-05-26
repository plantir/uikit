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

<div class="component-wrapper">
	<h1>DatePicker</h1>
	<p>
		Get started with a collection of DatePickers built with Tailwind CSS to start accepting data from
		 user based on multiple types and formates.
	</p>
	<div class="line"></div>
	<p>
		The DatePicker is an important part of the form element that can be used to accept date inputs from user.
	</p>
	<p>
		On this page you will find all of the DatePikcer types based on multiple variants, styles, colors,
		and sizes built with the utility classes from Tailwind CSS and components from UIkit.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import a DatePicker component in the script tag and use it.</p>
	<SetupDatePickerExample />
	<Title id="default-DatePicker" title="Default DatePicker" />
	<p>
		Simple and default PatePicker
	</p>
	<DefaultDatePickerExample />
	<Title id="DatePicker-value" title="DatePicker Value" />
	<p>
		Use the <span class="badge">value</span> prop to bind a variable to
		<span class="badge">DatePicker</span> value.
	</p>
	<ValueDatePickerExample />
	<Title id="DatePicker-placeholder" title="DatePicker Placeholder" />
	<p>
		Use <span class="badge">placeholder</span> prop to add placeholder to a
		<span class="badge">DatePicker</span> input. there is no default option for placeholder, but you
		can fill this prop with any <span class="badge">string</span> you want.
		<span class="badge">placeholder</span> display when input value is empty.
	</p>
	<PlaceholderTextFiledExample />

	<Title id="DatePicker-disabled" title="DatePicker Disable" />
	<p>
		Use <span class="badge">disabled</span> prop to change DatePicker to a disable
		<span class="badge">DatePicker</span>.
	</p>
	<DisabledDatePickerExample />
	<Title id="DatePicker-sizes" title="DatePicker Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">DatePicker</span>. default size option for DatePicker is
		<span class="badge">md</span>.
	</p>
	<SizeDatePickerExample />
	<Title id="DatePicker-Range" title="DatePicker Range" />
	<p>
		Use <span class="badge">range</span> prop to select starting point and ending point of dates.
	</p>
	<RangeDatePickerExample />
	<Title id="DatePicker-Formatted value" title="Formated value" />
	<p>
		Use <span class="badge">formattedValue</span> prop to baind to a formmated string or string array of the data picker.
	</p>
	<FormattedDatePickerExample />
	<Title id="DatePicker-props" title="Props" />
	<p>this is the list of the props that DatePicker can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
