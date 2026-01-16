<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'open',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'right',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'top',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'bottom',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'backdrop',
			type: `boolean`,
			default: 'true'
		},
		{
			name: 'clickOutside',
			type: `boolean`,
			default: 'true'
		},
		{
			name: 'id',
			type: `string`,
			default: 'drawer-example'
		},
		{
			name: 'transitionType',
			type: `"fade" | "fly" | "slide" | "blur" | "in:fly" | "out:fly" | "in:slide" | "out:slide" | "in:fade" | "out:fade" | "in:blur" | "out:blur"`,
			default: 'fly'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>
