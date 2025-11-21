<script lang="ts">
	import type { Table, TableColor, TableSize } from './Table.type.js';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	type $$Props = Table;
	let componentName = 'table';
	export let disabled: boolean = false;
	export let zebra: boolean = false;
	export let hover: boolean = false;
	export let size: TableSize = undefined;
	export let pinHead: boolean = false;
	export let pinCols: boolean = false;
	$: componentClass = {
		size:size,
		disabled,
		zebra,
		hover,
		'pin-head': pinHead,
		'pin-cols': pinCols,
	};
	$: elClass = ClassMerge({ name: componentName, componentClass, staticClassess: $$props.class });
</script>

<table class={elClass}>
	<slot />
</table>
