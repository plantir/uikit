<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import Button from '../Button/Button.svelte';
	import type { Pagination, PaginationColor, PaginationSize } from './Pagination.type.js';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import './Pagination.css';
	import type { Snippet } from 'svelte';

	let {
		page = $bindable(1),
		lastPage = 1,
		color,
		size,
		prev,
		next,
		onChange,
		...others
	}: Pagination & {
		prev?: Snippet;
		next?: Snippet;
		onChange?: (page: number) => void;
	} = $props();

	let componentName = 'pagination';
	const changePage = (p: number) => {
		page = p;
		onChange?.(page);
	};
	let componentClass = $derived({
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg',
		color
	});

	// TODO: should remove staticClasses when daisyui bug resolved and daisy-join class below
	// https://github.com/saadeghi/daisyui/issues/3084
	let paginationItemClass = $derived(
		ClassMerge({
			name: componentName + '-item',
			staticClassess: 'daisy-join-item'
		})
	);
</script>

<El class="daisy-join" {componentName} {componentClass} {...others}>
	{#if prev}
		<Button
			{size}
			onclick={() => changePage(+page - 1)}
			disabled={page == 1}
			class={paginationItemClass}
		>
			{@render prev()}
		</Button>
	{/if}
	{#if lastPage <= 6}
		{#each { length: lastPage } as x, i}
			<Button
				{size}
				color={page == i + 1 ? color : undefined}
				onclick={() => changePage(+i + 1)}
				active={page == i + 1}
				class={paginationItemClass}
			>
				{+i + 1}
			</Button>
		{/each}
	{:else}
		{#if page > 2}
			<Button {size} onclick={() => changePage(1)} class={paginationItemClass}>1</Button>
		{/if}
		{#if page > 3}
			<Button {size} class={paginationItemClass}>...</Button>
		{/if}
		{#if page > 1}
			<Button
				{size}
				onclick={() => changePage(+page - 1)}
				active={page == page - 1}
				class={paginationItemClass}
			>
				{+page - 1}
			</Button>
		{/if}
		<Button {size} {color} class={paginationItemClass} active>
			{page}
		</Button>
		{#if page < lastPage}
			<Button
				{size}
				onclick={() => changePage(+page + 1)}
				class={paginationItemClass}
				active={page == +page + 1}
			>
				{+page + 1}
			</Button>
		{/if}
		{#if page < lastPage - 2}
			<Button {size} class="{paginationItemClass} btn-disabled">...</Button>
		{/if}

		{#if page < lastPage - 1}
			<Button
				{size}
				onclick={() => changePage(lastPage)}
				class={paginationItemClass}
				active={page == lastPage}
			>
				{lastPage}
			</Button>
		{/if}
	{/if}
	{#if next}
		<Button
			{size}
			disabled={page == lastPage}
			onclick={() => changePage(+page + 1)}
			class={paginationItemClass}
		>
			{@render next()}
		</Button>
	{/if}
</El>
