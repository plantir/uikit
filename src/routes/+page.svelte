<script>
	import DatePicker from '@plantir/uikit/components/DatePicker/DatePicker.svelte';
	let value = '2024-02-28';
	let formattedValue = '';
</script>

<DatePicker bind:value bind:formattedValue />
