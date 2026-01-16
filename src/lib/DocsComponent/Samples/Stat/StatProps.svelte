<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'center',
			type: `boolean`,
			default: 'false'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
