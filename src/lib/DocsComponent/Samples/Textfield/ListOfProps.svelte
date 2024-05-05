<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,
			default: 'undefined'
		},
		{
			name: 'placeholder',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'inputmode',
			type: `'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'`,
			default: 'undefined'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg'`,
			default: 'md'
		},
		{
			name: 'value',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'bordered',
			type: `boolean`,
			default: 'true'
		},
		{
			name: 'label',
			type: `string`,
			default: 'undefined'
		},
		{
			name: 'disabled',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
