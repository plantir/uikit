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
			name: 'start',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'end',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'horizontal',
			type: `boolean`,
			default: 'false'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
