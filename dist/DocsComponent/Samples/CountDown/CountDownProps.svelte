<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'value',
			type: `'date' | 'moment' | 'undefined'`,
			default: 'undefined'
		},
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error' | 'neutral' | undefined`,
			default: 'undefined'
		},
		{
			name: 'size',
			type: `'xs' | 'sm' | 'md' | 'lg'`,
			default: 'md'
		},
		{
			name: 'type',
			type: `"colons" | "clock" | "box" | "labels" | "labels-under" | "box-label"`,
			default: '"colons"'
		}
	];
</script>

<div>
	<PropTable {items} />
</div>
