<script lang="ts">
	import type { TextFieldColor, TextFieldInputMode, TextFieldSize } from './FileUpload.type.js';
	import './FileUpload.scss';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import Checkbox from '../Checkbox/Checkbox.svelte';
	import Button from '../Button/Button.svelte';
	import CheckboxGroup from '../CheckboxGroup/CheckboxGroup.svelte';
	import Icon from '../Icon/Icon.svelte';
	import Select from '../Select/Select.svelte';
	// type $$Props = TextField;
	let componentName = 'text-field';
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | string[] = '';
	export let inputmode: TextFieldInputMode = 'text';
	export let disabled: boolean = false;
	export let bordered: boolean = true;
	export let size: TextFieldSize = undefined;
	export let color: TextFieldColor = undefined;
	export let inputClass: string = '';
	export let multiple: boolean = false;
	export let accept = ['jpg', 'pnj'];
	export let selectText = multiple ? 'Select Files' : 'Select File';
	export let onUpload: Function | undefined = undefined;
	export let onUploadMultiple: Function | undefined = undefined;
	export let onDelete: Function | undefined = undefined;
	export let onDeleteMultiple: Function | undefined = undefined;

	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		disabled,
		bordered,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		natural: color == 'natural'
	};
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: elClass = ClassMerge({ name: componentName, componentClass, staticClassess: inputClass });
	$: labelClass = ClassMerge({ name: `${componentName}-label` });

	async function onSelectFile(e) {
		if (!multiple) {
			if (!onUpload) throw Error('No handler Implemented for onUpload');
			value = await onUpload(e.target.files[0]);
		} else {
			if (!onUploadMultiple) throw Error('No handler Implemented for onUploadMultiple');

			value = [...value, ...(await onUploadMultiple('files', e.target.files))];
		}
	}

	let selected: string[] = [];

	async function onRemoveSingle() {
		if (!onDelete) return;
		const res = await onDelete();
		if (!res) return;
		value = null;
	}

	async function onRemoveMultiple() {
		if (!onDeleteMultiple) return;
		const res = await onDeleteMultiple();
		if (!res) return;
		value = value.filter((val) => selected.includes(val));
		selected = [];
	}
</script>

<div class="flex border flex-col">
	<div class="p-4">
		<slot name="label">
			{#if label}
				<span class={labelClass}>
					{label}
				</span>
			{/if}
		</slot>
	</div>
	{#if selected.length > 0 && onDeleteMultiple}
		<div class=" p-2 flex items-center justify-between">
			<div class="font-bold">
				{selected.length} item selected
			</div>
			<Button on:click={onRemoveMultiple} class="" type="link"><Icon name="DeleteMinor" /></Button>
		</div>
	{/if}
	{#if value}
		<div class="flex gap-4 p-4 pt-0">
			{#if multiple}
				<CheckboxGroup bind:value={selected}>
					{#each value ?? [] as val}
						<div class="relative p-6 border bg-slate-50">
							{#if onDeleteMultiple}
								<Checkbox value={val} class="absolute top-2 start-2 " />
							{/if}
							<slot value={val} />
						</div>
					{/each}
				</CheckboxGroup>
			{:else if value}
				<div class="relative border bg-slate-50 p-6 w-full">
					{#if onDelete}
						<Button
							variant="ghost"
							class=" top-2 end-2  absolute "
							color="error"
							on:click={onRemoveSingle}
							shape="square"><Icon name="DeleteMinor" /></Button
						>
					{/if}
					<slot {value} />
				</div>
			{/if}
		</div>
	{/if}

	{#if multiple || !value}
		<label
			class={`flex w-full mx-4 min-h-36 border justify-center items-center bg-slate-50 ${labelClass}`}
		>
			<div class="daisy-btn">{selectText}</div>
			<div>
				<input
					accept={accept.join(',')}
					hidden
					on:change={onSelectFile}
					type="file"
					{...$$restProps}
					{multiple}
					{inputmode}
					{disabled}
					{placeholder}
					class={elClass}
				/>
			</div>
		</label>
	{/if}
</div>
