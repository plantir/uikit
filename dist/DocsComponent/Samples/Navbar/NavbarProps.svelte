<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `"primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error" | "neutral" | undefined`,
			default: 'undefiend'
		},
		{
			name: 'custom',
			type: 'boolean',
			default: 'false'
		},
		{
			name: 'start',
			type: 'slot',
			default: ''
		},
		{
			name: 'center',
			type: 'slot',
			default: ''
		},
		{
			name: 'end',
			type: 'slot',
			default: ''
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
