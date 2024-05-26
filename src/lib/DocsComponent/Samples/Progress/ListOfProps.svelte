<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,
			default: 'undefined'
		},
		
		{
			name: 'value',
			type: `number | string | undefined`,
			default: '"undefined"'
		},
		{
			name: 'max',
			type: `number | string | undefined`,
			default: '100'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
