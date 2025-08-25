<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'type',
			type: `"dash" | "soft" | "outline" | undefined`,
			default: 'undefined'
		},
		{
			name: 'color',
			type: `"success" | "warning" | "info" | "error" | undefined`,
			default: 'undefiend'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
