<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'label',
			type: `string`,
			default: '""'
		},
		{
			name: 'size',
			type: `"xs" | "sm" | "md" | "lg" | "xl"`,
			default: 'md'
		},
		{
			name: 'color',
			type: `"primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error" | "neutral"`,
			default: 'undefined'
		},
		{
			name: 'custom',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'multiple',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'accept',
			type: `string`,
			default: '""'
		},
		{
			name: 'placeholder',
			type: `string`,
			default: '""'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
