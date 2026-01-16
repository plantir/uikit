<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error' | 'neutral'`,
			default: 'undefined'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
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
		// {
		// 	name: 'bordered',
		// 	type: `boolean`,
		// 	default: 'true'
		// }
	];
</script>

<div>
	<PropTable {items} />
</div>
