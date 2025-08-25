<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'placement',
			type: `"bottom-end" | "bottom-center" | "bottom-start" | "top-start" | "top-center" | "top-end" | "middle-start" | "middle-center" | "middle-end"`,
			default: 'bottom-end'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
