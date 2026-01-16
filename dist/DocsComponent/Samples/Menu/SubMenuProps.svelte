<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'collapse',
			type: 'boolean',
			default: 'false'
		},
		{
			name: 'title',
			type: 'string',
			default: ''
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
