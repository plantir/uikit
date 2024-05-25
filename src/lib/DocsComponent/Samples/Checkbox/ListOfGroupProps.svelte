<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';
	let items = [
		{
			name: 'value',
			type: `string`,
			default: '[]'
		},
		{
			name: 'inline',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'column',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'join',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'disabled',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
