<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error' | 'neutral'`,
			default: 'undefined'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
			default: 'md'
		},
		{
			name: 'side',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'fullImage',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'border',
			type: `boolean`,
			default: 'false'
		},
        {
			name: 'dashed',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
