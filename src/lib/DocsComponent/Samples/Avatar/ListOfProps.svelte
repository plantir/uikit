<script>
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';

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
			name: 'shape',
			type: `'circle' | 'square' | 'rounded'`,
			default: 'square'
		},
		{
			name: 'mask',
			type: `'squircle' | 'decagon' | 'diamond' | 'heart' | 'hexagon' | 'hexagon-2' | 'circle' | 'parallelogram' | 'parallelogram-2' | 'parallelogram-3' | 'parallelogram-4' | 'pentagon' | 'square' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,
			default: 'undefined'
		},
		{
			name: 'ring',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'text',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'online',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'offline',
			type: `boolean`,
			default: 'false'
		},
		
	];
</script>

<div>
	<PropTable {items} />
</div>
