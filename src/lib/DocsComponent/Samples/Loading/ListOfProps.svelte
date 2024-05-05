<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,
			default: 'undefined'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg'`,
			default: 'md'
		},
		{
			name: 'page',
			type: `number`,
			default: '1'
		},
		{
			name: 'lastpage',
			type: `number`,
			default: '1'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
