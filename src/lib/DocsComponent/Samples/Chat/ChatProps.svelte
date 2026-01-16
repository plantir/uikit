<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error' | 'neutral' | undefined`,
			default: 'undefined'
		},
		{
			name: 'start',
			type: `boolean`,
			default: 'false'
		},
        {
			name: 'end',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
