<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'on',
			type: `snippet`,
			default: '""'
		},
		{
			name: 'off',
			type: `snippet`,
			default: '""'
		},
		{
			name: 'value',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'rotate',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'flip',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
