<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

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
			type: `'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'` ,
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
			name: 'ghost',
			type: `boolean`,
			default: 'false'
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
			name: 'readonly',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
