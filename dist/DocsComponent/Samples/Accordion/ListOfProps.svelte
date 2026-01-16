<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'icon',
			type: `'arrow' | 'plus'`,
			default: 'undefined'
		},
		{
			name: 'open',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'join',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'name',
			type: `string`,
			default: 'accordion'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
