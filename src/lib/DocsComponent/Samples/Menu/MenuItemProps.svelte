<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'active',
			type: 'boolean',
			default: 'false'
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
