<script lang="ts">
	import El from '../../utils/El.svelte';
	import Button from '../Button/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { Pagination, PaginationColor, PaginationSize } from './Pagination.type.js';
	import { ClassMerge } from '../../utils/ClassMerge.js';

	type $$Props = Pagination;
	let componentName = 'pagination';
	let dispatch = createEventDispatcher();
	export let page = 1;
	export let lastPage = 1;
	export let color: PaginationColor = undefined;
	export let size: PaginationSize = undefined;
	const changePage = (p: number) => {
		page = p;
		dispatch('change', page);
	};
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		color
	};

	// TODO: should remove staticClasses when daisyui bug resolved and daisy-join class below
	// https://github.com/saadeghi/daisyui/issues/3084
	$: paginationItemClass = ClassMerge({
		name: componentName + '-item',
		staticClassess: 'daisy-join-item'
	});
</script>

<El class="daisy-join" {componentName} {componentClass} {...$$restProps}>
	{#if $$slots.prev}
		<Button
			{size}
			on:click={(e) => changePage(+page - 1)}
			disabled={page == 1}
			class={paginationItemClass}
		>
			<slot name="prev"></slot>
		</Button>
	{/if}
	{#if lastPage <= 6}
		{#each { length: lastPage } as x, i}
			<Button
				{size}
				color={page == i + 1 ? color : undefined}
				on:click={(e) => changePage(+i + 1)}
				active={page == i + 1}
				class={paginationItemClass}
			>
				{+i + 1}
			</Button>
		{/each}
	{:else}
		{#if page > 2}
			<Button {size} on:click={(e) => changePage(1)} class={paginationItemClass}>1</Button>
		{/if}
		{#if page > 3}
			<Button {size} class={paginationItemClass}>...</Button>
		{/if}
		{#if page > 1}
			<Button
				{size}
				on:click={(e) => changePage(+page - 1)}
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
				on:click={(e) => changePage(+page + 1)}
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
				on:click={(e) => changePage(lastPage)}
				class={paginationItemClass}
				active={page == lastPage}
			>
				{lastPage}
			</Button>
		{/if}
	{/if}
	{#if $$slots.next}
		<Button
			{size}
			disabled={page == lastPage}
			on:click={(e) => changePage(+page + 1)}
			class={paginationItemClass}
		>
			<slot name="next"></slot>
		</Button>
	{/if}
</El>
