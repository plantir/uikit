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
			name: 'size',
			type: `string`,
			default: '5rem'
		},
		{
			name: 'tick',
			type: `string`,
			default: 'calc(5rem / 10)'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
