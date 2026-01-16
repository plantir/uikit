<script lang="ts">
	import { onMount, createEventDispatcher, tick } from 'svelte';
	import flatpickr from 'flatpickr';
	import type { DatePicker, DatePickerColor, DatePickerSize } from './DatePicker.js';
	// import './DatePicker.css';
	import 'flatpickr/dist/flatpickr.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import TextField from '../TextField/TextField.svelte';
	type $$Props = DatePicker;
	let componentName = 'date-picker';
	const hooks = new Set([
		'onChange',
		'onOpen',
		'onClose',
		'onMonthChange',
		'onYearChange',
		'onReady',
		'onValueUpdate',
		'onDayCreate'
	]);

	let ready = false;

	export { fp as flatpickr };
	$: if (fp && ready) {
		if (!areValuesEqual(value, getModeValue(fp, fp.selectedDates))) {
			fp.setDate(value, true, dateFormat);
		}
	}
	export let input: any = undefined;
	export let fp: any = undefined;
	export let value: string | string[] | undefined = undefined;
	export let formattedValue: string = '';
	export let element: any = undefined;
	export let dateFormat: string | undefined = undefined;
	export let options = {};

	export let range: boolean | undefined = false;
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = 'Select Date';
	export let disabled: boolean = false;
	// export let bordered: boolean = true;
	export let size: DatePickerSize = undefined;
	// export let color: DatePickerColor = undefined;
	onMount(() => {
		const elem = element ?? input;

		const opts = addHooks(options);
		if (range) {
			opts.showMonths = 2;
			opts.mode = 'range';
		}
		opts.onReady.push((selectedDates, dateStr, instance) => {
			if (value === undefined) {
				updateValue(selectedDates, dateStr, instance);
			}

			tick().then(() => {
				ready = true;
			});
		});

		fp = flatpickr(elem, Object.assign(opts, element ? { wrap: true } : {}));

		return () => {
			fp.destroy();
		};
	});

	const dispatch = createEventDispatcher();

	$: if (fp && ready) {
		for (const [key, val] of Object.entries(addHooks(options))) {
			fp.set(key, val);
		}
	}

	function addHooks(opts = {}) {
		opts = Object.assign({}, opts);

		for (const hook of hooks) {
			const firer = (selectedDates, dateStr, instance) => {
				dispatch(stripOn(hook), [selectedDates, dateStr, instance]);
			};

			if (hook in opts) {
				// Hooks must be arrays
				if (!Array.isArray(opts[hook])) opts[hook] = [opts[hook]];

				opts[hook].push(firer);
			} else {
				opts[hook] = [firer];
			}
		}

		if (opts.onChange && !opts.onChange.includes(updateValue)) opts.onChange.push(updateValue);

		return opts;
	}

	function updateValue(newValue, dateStr, fp) {
		const newModeValue = getModeValue(fp, newValue);
		if (range) {
			value = newModeValue;
			formattedValue = dateStr.split(' to ');
		} else {
			if (!areValuesEqual(value, newModeValue) && (value || newModeValue)) {
				value = newModeValue;
			}
			formattedValue = dateStr;
		}
	}

	function stripOn(hook) {
		return hook.charAt(2).toLowerCase() + hook.substring(3);
	}

	function getModeValue(instance, selectedDates) {
		const mode = instance?.config?.mode ?? 'single';
		return mode === 'single' ? selectedDates[0] : selectedDates;
	}

	function areValuesEqual(v1, v2) {
		if (v1 == v2) return true;

		if (v1 instanceof Date && v2 instanceof Date && v1.valueOf() === v2.valueOf()) {
			return true;
		}

		if (
			Array.isArray(v1) &&
			Array.isArray(v2) &&
			v1.length === v2.length &&
			v1.every((val, i) => areValuesEqual(val, v2[i]))
		) {
			return true;
		}

		return false;
	}

	$: inputClass = ClassMerge({
		name: `${componentName}-input`,
		componentClass: { bordered: true }
	});
</script>

<TextField   {...$$restProps} {label} bind:node = {input} {placeholder} >
	<slot name="label"  slot="label" />
	<slot name="start"  slot="start" />
	<slot name="end"  slot="end" />
</TextField>
<!-- <slot>
	<input class={inputClass} {placeholder} bind:this={input} {...$$restProps} />
</slot> -->
