<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'on',
			type: `string | slot`,
			default: '""'
		},
		{
			name: 'off',
			type: `string | slot`,
			default: '""'
		},
		{
			name: 'value',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'rotate',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'flip',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
