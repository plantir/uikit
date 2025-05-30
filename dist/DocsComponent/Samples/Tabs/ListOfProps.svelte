<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,
			default: 'undefined'
		},
		{
			name: 'variant',
			type: `'box' | 'lift' | 'border' `,
			default: 'border'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg'`,
			default: 'md'
		},
		{
			name: 'selected',
			type: `'string' | 'number'`,
			default: 'undefined'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
