<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,
			default: 'undefined'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
			default: 'md'
		},
		{
			name: 'type',
			type: `"spinner" | "dots" | "ring" | "ball" | "bars" | "infinity" | undefined`,
			default: '"spinner"'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
