<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'size',
			type: `"xs" | "sm" | "md" | "lg" | undefined`,
			default: 'md'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
