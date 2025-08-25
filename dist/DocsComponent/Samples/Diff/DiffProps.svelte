<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'aspect',
			type: `'16/9' | '4/3' | '1/1' | any`,
			default: '16/9'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
