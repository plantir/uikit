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
			type: `'xs' | 'sm' | 'md' | 'lg'`,
			default: 'md'
		},
		{
			name: 'dismissable',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'variant',
			type: `'ghost' | 'link' | 'outline' | 'glass' | 'dot'`,
			default: 'undefined'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
