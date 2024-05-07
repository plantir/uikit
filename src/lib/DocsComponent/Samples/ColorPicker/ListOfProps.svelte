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
			name: 'label',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'value',
			type: `string`,
			default: ''
		},
		{
			name: 'wide',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'shape',
			type: `'squre' | 'circle' `,
			default: 'undefined'
		},
		{
			name: 'variant',
			type: `'ghost' | 'glass' | 'outline' `,
			default: 'undefined'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
