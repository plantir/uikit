<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'title',
			type: 'string',
			default: '""'
		},
		{
			name: 'placement',
			type: `"top" | "bottom" | "left" | "right"`,
			default: 'top'
		},
		{
			name: 'color',
			type: `"primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error" | "neutral" | undefined`,
			default: 'undefiend'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
