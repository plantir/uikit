<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'name',
			type: `'string'`,
			default: 'undefined'
		},
		{
			name: 'value',
			type: `'string' | 'string[]'`,
			default: 'undefined'
		},
		{
			name: 'dateFormat',
			type: `'string' | 'undefined'`,
			default: 'undefined'
		},
		{
			name: 'placeholder',
			type: `string | undefined`,
			default: 'undefined'
		},
		{
			name: 'formattedValue',
			type: `'string' | 'string[]'`,
			default: '""'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
			default: 'md'
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
		},
		{
			name: 'range',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'color',
			type: ` 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error' | 'neutral'  | 'undefined'`,
			default: 'undefined'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
