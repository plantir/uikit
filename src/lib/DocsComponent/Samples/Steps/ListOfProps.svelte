<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,
			default: 'undefined'
		},
		{
			name: 'items',
			type: `array`,
			default: '[]'
		},
		{
			name: 'selected',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'vertical',
			type: `boolean`,
			default: 'false'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
