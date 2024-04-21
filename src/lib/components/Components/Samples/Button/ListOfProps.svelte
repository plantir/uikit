<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';
	let items = [
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,
			default: 'undefined'
		},
		{
			name: 'shape',
			type: `'circle' | 'square'`,
			default: 'undefined'
		},
		{
			name: 'variant',
			type: `'ghost' | 'link' | 'outline' | 'glass'`,
			default: 'undefined'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg'`,
			default: 'md'
		},
		{
			name: 'block',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'active',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'wide',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'loading',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'href',
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
