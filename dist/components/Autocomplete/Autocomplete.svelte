<script lang="ts">
	import type { Autocomplete } from './Autocomplete.type.ts';
	import './Autocomplete.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import AutocompleteMenu from './AutocompleteMenu.svelte';
	import fuzzy from 'fuzzy';
	let componentName = 'autocomplete';

	let {
		label = undefined,
		items,
		disabled = false,
		bordered = true,
		multiple = false,
		create = false,
		readonly = false,
		dismissible = false,
		size,
		color,
		placeholder,
		state: formState,
		hint,
		oncreated,
		onchanged,
        oninput,
		value = $bindable(multiple ? [] : undefined),
		children,
		...restProps
	}: Autocomplete = $props();

	let inputEl: HTMLElement | undefined = $state(undefined);
	let query = $state('');
	let show = $state(false);
	let timer: any;
	let cursorPosition = $state(0);


	function onInput(e: any) {
		if (!show) show = true;
		oninput?.(query);
	}

	$effect(() => {
		cursorPosition = multiple ? value?.length - 1 : 0;
	});

	function onCreate() {
		oncreated?.(query);
        value = query
		query = '';
		show = false;
	}

	function onFocus(e) {
		if (readonly) return;
		if (disabled) return;

		if (!show)
			timer = setTimeout(() => {
				show = true;
			}, 200);

		restProps.onfocus?.(e);
	}

	function onSelect(item: any) {
		if (readonly) return;
		query = '';
		inputEl?.focus();

		if (multiple) {
			value ??= [];
			if (value.includes(item.value)) {
				// value = value.filter((x: any) => x != item.value);
			} else {
				value = [...(value ?? []), item.value];
			}

			onchanged?.(value);
			setTimeout(() => {
				show = true;
			});

			// continue
		} else {
			value = item.value;
			show = false;
			onchanged?.(value);
		}
	}

	function onClick(e) {
		if (readonly) return;
		if (disabled) return;

		if (timer) {
			timer = clearTimeout(timer);
		}

		show = !show;
		if (show) inputEl?.focus();
		restProps?.onclick?.(e);
	}

	function onRemove(item: any) {
		if (multiple) {
			value = value.filter((x) => x != item.value);
		} else {
			value = undefined;
		}
	}

	function onKeyDown(e) {
		// if (readonly) return

		if (e.key === 'Backspace') {
			if (query.length === 0) {
				if (multiple) {
					let currentPosition = cursorPosition;
					value = value.filter((x, index) => index != cursorPosition);

					cursorPosition = Math.min(currentPosition, value.length - 1);
				} else {
					value = undefined;
                    show = true
				}
			}
		}

		if (e.key == 'ArrowLeft') {
			if (multiple) {
				cursorPosition = Math.max(0, cursorPosition - 1);
			}
		} else if (e.key === 'ArrowRight') {
			if (multiple) {
				cursorPosition = Math.min(cursorPosition + 1, value.length - 1);
			}
		}

		if (e.key == 'Enter') {
			if (create && options.length === 0) {
				onCreate();
			}
		}

		restProps?.onkeydown?.(e);
	}

	let convertedItems = $derived.by(() =>
		items.map((item) => {
			if (typeof item == 'string') {
				return {
					title: item,
					value: item
				};
			} else {
				return item;
			}
		})
	);

	let options = $derived(
		fuzzy
			.filter(
				query,
				convertedItems.filter((i) => value != i.value),
				{
					extract(input) {
						return input.value + input.title;
					}
				}
			)
			.map((item) => item.original)
	);

	let noResult: boolean = $derived(options.length === 0);

	let wrapperClass = $derived(
		ClassMerge({ name: `${componentName}-wrapper`, staticClassess: restProps.class })
	);
	let labelClass = $derived(ClassMerge({ name: `${componentName}-label` }));

	let hintClass = $derived(
		ClassMerge({
			name: `${componentName}-hint`,
			componentClass: {
				'state-valid': formState == 'valid',
				'state-invalid': formState == 'invalid'
			}
		})
	);

	let props: any = $derived({
		...restProps,
		class: ClassMerge({
			name: componentName,
			componentClass: {
				xs: size == 'xs',
				sm: size == 'sm',
				md: size == 'md',
				lg: size == 'lg',
				xl: size == 'xl',
				disabled,
				bordered,
				primary: color == 'primary',
				secondary: color == 'secondary',
				accent: color == 'accent',
				success: color == 'success',
				info: color == 'info',
				error: color == 'error',
				warning: color == 'warning',
				neutral: color == 'neutral',
				multiple,
				'state-valid': formState === 'valid',
				'state-invalid': formState === 'invalid'
			}
		}),
		disabled: disabled ? disabled : undefined,
		multiple: multiple ? multiple : undefined,
		onclick: onClick,
		onfocus: onFocus
	});
</script>

<div class={wrapperClass}>
	{#if typeof label == 'string'}
		<label class={labelClass}>
			{label}
		</label>
	{:else if typeof label === 'function'}
		{@render label()}
	{/if}

	<div {...props}>
		{#if Array.isArray(value)}
			{#each value as val}
                {@const index = convertedItems.findIndex((x) => x.value == val)}
				{@const item = convertedItems[index]}

				{#if item}
					<div
						class={ClassMerge({
							name: componentName + '-badge',
							componentClass: { multiple: true, active: cursorPosition == index }
						})}
					>
						{#if children}
							{@render children({ item, index })}
						{:else}
							{item.title}
						{/if}

						{#if dismissible}
							<button
								class={ClassMerge({ name: componentName + '-badge-remove' })}
								onclick={() => onRemove(item)}
							>
								X
								<!-- <Icon name="x" /> -->
							</button>
						{/if}
					</div>
				{/if}
			{/each}
		{:else}
            {#key value}
                {@const index = convertedItems.findIndex((x) => x.value == value)}

                {#if index > -1}
                    {@const item = convertedItems[index]}
                    {#if item}
                        <div class={ClassMerge({ name: componentName + `-badge` })}>
                            {#if children}
                                {@render children({ item, index })}
                            {:else}
                                {item.title}
                            {/if}
                        </div>
                    {/if}
                {/if}
            {/key}
		{/if}
		<input
			class={ClassMerge({ name: `${componentName}-input` })}
			bind:this={inputEl}
			placeholder={value ? undefined : placeholder}
			{disabled}
			{readonly}
			bind:value={query}
			onfocus={onFocus}
			onkeydown={onKeyDown}
			oninput={onInput}
		/>
		
	</div>
    <AutocompleteMenu autoClose="outside" placement="bottom" bind:show>
			{#if noResult}
				{#if create && query}
					<button
						onclick={() => onCreate()}
						class={ClassMerge({
							name: componentName + '-option',
							componentClass: { create: true }
						})}
					>
						Create {query}...
					</button>
				{:else}
					<div
						class={ClassMerge({
							name: componentName + '-option',
							componentClass: { noResult: true }
						})}
					>
						No result
					</div>
				{/if}
			{/if}

			{#each options as item, index}
				{@const shouldShow = multiple ? !value?.includes(item.value) : value !== item.value}
				{#if shouldShow}
					<button
						onclick={() => onSelect(item)}
						class={ClassMerge({ name: componentName + '-option' })}
					>
						{#if children}
							{@render children({ item, index })}
						{:else}
							{item.title}
						{/if}
					</button>
				{/if}
			{/each}
		</AutocompleteMenu>
	{#if hint}
		<span class={hintClass}>{hint}</span>
	{/if}
</div>
