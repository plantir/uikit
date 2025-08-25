<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'size',
			type: `"xs" | "sm" | "md" | "lg" | "xl" | undefined`,
			default: 'undefined'
		},
		{
			name: 'color',
			type: `"primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error" | "neutral" | undefined`,
			default: 'undefiend'
		},
		{
			name: 'animate',
			type: '"ping" | "bounce" | undefined',
			default: 'undefiend'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
