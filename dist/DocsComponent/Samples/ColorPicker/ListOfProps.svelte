<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'label',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'value',
			type: `string`,
			default: ''
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
