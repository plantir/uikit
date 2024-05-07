<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'label',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'value',
			type: `string`,
			default: ''
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
