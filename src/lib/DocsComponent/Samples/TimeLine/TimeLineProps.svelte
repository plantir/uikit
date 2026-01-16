<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'value',
			type: `"string" | "number"`,
			default: 'undefined'
		},
		{
			name: 'items',
			type: `"title" | "value" | "text"`,
			default: '[]'
		},
		{
			name: 'color',
			type: `"primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error" | "neutral" | undefined`,
			default: 'undefiend'
		},
		{
			name: 'vertical',
			type: 'boolean',
			default: 'false'
		},
		{
			name: 'reverse',
			type: 'boolean',
			default: 'false'
		},
		{
			name: 'icon',
			type: 'boolean',
			default: 'true'
		},
		{
			name: 'clickable',
			type: 'boolean',
			default: 'false'
		},
		
	];
</script>

<div>
	<PropTable {items} />
</div>
