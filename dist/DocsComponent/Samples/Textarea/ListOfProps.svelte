<script>
	import PropTable from "../../ComponentCode/PropTable.svelte";
	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error' | 'neutral'`,
			default: 'undefined'
		},
		{
			name: 'placeholder',
			type: `string`,
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
		},
		{
			name: 'ghost',
			type: `boolean`,
			default: 'false'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
