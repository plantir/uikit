<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'title',
			type: `string`,
			default: '""'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
