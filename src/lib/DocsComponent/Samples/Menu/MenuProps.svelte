<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `"primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error" | "neutral" | undefined`,
			default: 'undefiend'
		},
		{
			name: 'horzintal',
			type: 'boolean',
			default: 'false'
		},
		{
			name: 'title',
			type: 'string',
			default: ''
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
