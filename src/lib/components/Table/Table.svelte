<script lang="ts">
	import './Table.scss';
	import type { Table, TableColor, TableSize } from './Table.type.js';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	type $$Props = Table;
	let componentName = 'table';
	export let label: string | undefined = undefined;
	export let value: string = '';
	export let disabled: boolean = false;
	export let zebra: boolean = false;
	export let hover: boolean = false;
	export let size: TableSize = undefined;
	export let color: TableColor = undefined;
	export let pinHead: boolean = false;
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		disabled,
		zebra,
		hover,
		'pin-head': pinHead,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		natural: color == 'natural'
	};
	$: elClass = ClassMerge({ name: componentName, componentClass, staticClassess: $$props.class });
</script>

<table class={elClass}>
	<slot />
</table>
