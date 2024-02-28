<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	export interface RadioCtxType {
		selected: Writable<string | number>;
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { ClassMerge } from '@plantir/uikit/utils/ClassMerge.js';
	import type { RadioGroup } from './RadioGroup.type.js';
	let componentName = 'radio-group';
	type $$Props = RadioGroup;
	export let value: any = undefined;
	export let inline: boolean = false;
	export let column: boolean = false;
	if (!inline && !column) inline = true;
	const ctx: RadioCtxType = {
		selected: writable()
	};
	let selected = ctx.selected;
	setContext<RadioCtxType>('ctx', ctx);
	function onValueChange() {
		selected.set(value);
	}
	$: value, onValueChange();
	$: elClass = ClassMerge({
		name: componentName,
		componentClass: {
			inline,
			column
		},
		staticClassess: $$props.class
	});
</script>

<div class={elClass}>
	<slot />
</div>

<style lang="scss" global>
	@import './RadioGroup.scss';
</style>
