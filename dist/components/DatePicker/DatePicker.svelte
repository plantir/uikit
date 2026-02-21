<script lang="ts">
	import { onMount, tick, type Snippet } from 'svelte';
	import flatpickr from 'flatpickr';
	import type { DatePicker, DatePickerColor, DatePickerSize } from './DatePicker.ts';
	import './DatePicker.css';
	import 'flatpickr/dist/flatpickr.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import TextField from '../TextField/TextField.svelte';

	let {
		input,
		value = $bindable(),
		formattedValue = $bindable(),
		element,
		dateFormat,
		options,
		range,
		label,
		placeholder,
		disabled,
		size,
		labelSnippet,
		startSnippet,
		endSnippet,
		onChange,
		onOpen,
		onClose,
		onMonthChange,
		onYearChange,
		onReady,
		onValueUpdate,
		onDayCreate,
		...others
	}: DatePicker & {
		input?: any;
		element?: any;
		options?: any;
		labelSnippet?: Snippet;
		startSnippet?: Snippet;
		endSnippet?: Snippet;
		onChange?: (selectedDates: Date[], dateStr: string, instance: any) => void;
		onOpen?: (selectedDates: Date[], dateStr: string, instance: any) => void;
		onClose?: (selectedDates: Date[], dateStr: string, instance: any) => void;
		onMonthChange?: (selectedDates: Date[], dateStr: string, instance: any) => void;
		onYearChange?: (selectedDates: Date[], dateStr: string, instance: any) => void;
		onReady?: (selectedDates: Date[], dateStr: string, instance: any) => void;
		onValueUpdate?: (selectedDates: Date[], dateStr: string, instance: any) => void;
		onDayCreate?: (selectedDates: Date[], dateStr: string, instance: any) => void;
	} = $props();

	let componentName = 'date-picker';
	let fp: any = $state();
	let ready = $state(false);

	export { fp as flatpickr };

	$effect(() => {
		if (fp && ready && !areValuesEqual(value, getModeValue(fp, fp.selectedDates))) {
			fp.setDate(value, true, dateFormat);
		}
	});

	$effect(() => {
		if (fp && ready && options) {
			const opts = addHooks(options);
			for (const [key, val] of Object.entries(opts)) {
				fp.set(key, val);
			}
		}
	});

	onMount(() => {
		const elem = element ?? input;

		const opts: any = addHooks(options || {});
		if (range) {
			opts.showMonths = 2;
			opts.mode = 'range';
		}
		if (!opts.onReady) {
			opts.onReady = [];
		}
		opts.onReady.push((selectedDates: Date[], dateStr: string, instance: any) => {
			if (value === undefined) {
				updateValue(selectedDates, dateStr, instance);
			}

			tick().then(() => {
				ready = true;
			});
		});

		// @ts-expect-error - flatpickr constructor
		fp = flatpickr(elem, Object.assign(opts, element ? { wrap: true } : {}));

		return () => {
			fp?.destroy();
		};
	});

	function addHooks(opts: any = {}) {
		opts = Object.assign({}, opts);

		const hookCallbacks: Record<string, ((selectedDates: Date[], dateStr: string, instance: any) => void) | undefined> = {
			onChange,
			onOpen,
			onClose,
			onMonthChange,
			onYearChange,
			onReady,
			onValueUpdate,
			onDayCreate
		};

		for (const [hook, callback] of Object.entries(hookCallbacks)) {
			if (callback) {
				const firer = (selectedDates: Date[], dateStr: string, instance: any) => {
					callback(selectedDates, dateStr, instance);
				};

				if (hook in opts) {
					// Hooks must be arrays
					if (!Array.isArray(opts[hook])) opts[hook] = [opts[hook]];
					opts[hook].push(firer);
				} else {
					opts[hook] = [firer];
				}
			}
		}

		if (opts.onChange && !opts.onChange.includes(updateValue)) {
			opts.onChange.push(updateValue);
		}

		return opts;
	}

	function updateValue(newValue: Date[], dateStr: string, fpInstance: any) {
		const newModeValue = getModeValue(fpInstance, newValue);
		if (range) {
			// @ts-expect-error - value can be Date[] for range mode
			value = newModeValue;
			formattedValue = dateStr.split(' to ');
		} else {
			if (!areValuesEqual(value, newModeValue) && (value || newModeValue)) {
				// @ts-expect-error - value can be Date for single mode
				value = newModeValue;
			}
			formattedValue = dateStr;
		}
	}

	function getModeValue(instance: any, selectedDates: Date[]) {
		const mode = instance?.config?.mode ?? 'single';
		return mode === 'single' ? selectedDates[0] : selectedDates;
	}

	function areValuesEqual(v1: any, v2: any): boolean {
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

	let inputClass = $derived(
		ClassMerge({
			name: `${componentName}-input`,
			componentClass: { bordered: true }
		})
	);
</script>

<TextField
	{...({ ...others, label, placeholder, labelSnippet, startSnippet, endSnippet } as any)}
	bind:node={input}
/>
<!-- <slot>
	<input class={inputClass} {placeholder} bind:this={input} {...$$restProps} />
</slot> -->
