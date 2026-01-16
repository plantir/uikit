<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'size',
			type: `"xs" | "sm" | "md" | "lg" | "xl" `,
			default: '"md"'
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
