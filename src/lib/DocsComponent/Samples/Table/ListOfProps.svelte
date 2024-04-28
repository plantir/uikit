<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'pinHead',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg'`,
			default: 'md'
		},
		{
			name: 'zebra',
			type: `boolean`,
			default: 'false'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
