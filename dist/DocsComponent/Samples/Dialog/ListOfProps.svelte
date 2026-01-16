<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'open',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
