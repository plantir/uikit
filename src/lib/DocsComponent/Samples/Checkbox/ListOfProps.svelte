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
			name: 'label',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'value',
			type: `boolean`,
			default: 'undefined'
		},
		{
			name: 'disabled',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'indeterminate',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
