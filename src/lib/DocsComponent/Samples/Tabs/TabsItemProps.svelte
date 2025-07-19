<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'title',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'value',
			type: `string`,
			default: 'undefined'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
