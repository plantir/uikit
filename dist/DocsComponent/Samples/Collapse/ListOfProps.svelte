<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,
			default: 'undefined'
		},
		{
			name: 'plus',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'open',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'disabled',
			type: `boolean`,
			default: 'false'
		},
		
	];
</script>

<div>
	<PropTable {items} />
</div>
