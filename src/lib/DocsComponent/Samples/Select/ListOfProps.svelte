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
			name: 'items',
			type: `array of Object(value,title) | array of String`,
			default: '[]'
		},
		{
			name: 'disabled',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'readonly',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'bordered',
			type: `boolean`,
			default: 'true'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
