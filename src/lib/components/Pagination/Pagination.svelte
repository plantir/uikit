<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import Button from '../Button/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { Pagination, PaginationColor, PaginationSize } from './Pagination.type.js';
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
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		warning: color == 'warning',
		info: color == 'info',
		error: color == 'error'
	};
</script>

<El class="daisy-join" {componentName} {componentClass} {...$$restProps}>
	{#if lastPage <= 6}
		{#each { length: lastPage } as x, i}
			<Button
				{size}
				{color}
				on:click={(e) => changePage(+i + 1)}
				active={page == i + 1}
				class="daisy-join-item "
			>
				{+i + 1}
			</Button>
		{/each}
	{:else}
		{#if page > 2}
			<Button {size} {color} on:click={(e) => changePage(1)} class="daisy-join-item ">1</Button>
		{/if}
		{#if page > 3}
			<Button {size} {color}>...</Button>
		{/if}
		{#if page > 1}
			<Button
				{size}
				{color}
				on:click={(e) => changePage(+page - 1)}
				active={page == page - 1}
				class="daisy-join-item "
			>
				{+page - 1}
			</Button>
		{/if}
		<Button {size} {color} class="daisy-join-item" active={page == page}>
			{page}
		</Button>
		{#if page < lastPage}
			<Button
				{size}
				{color}
				on:click={(e) => changePage(+page + 1)}
				class="daisy-join-item"
				active={page == +page + 1}
			>
				{+page + 1}
			</Button>
		{/if}
		{#if page < lastPage - 2}
			<Button {size} {color} class="daisy-join-item  btn-disabled">...</Button>
		{/if}

		{#if page < lastPage - 1}
			<Button
				{size}
				{color}
				on:click={(e) => changePage(lastPage)}
				class="daisy-join-item"
				active={page == lastPage}
			>
				{lastPage}
			</Button>
		{/if}
	{/if}
</El>

<style lang="scss" global>
	@import './Pagination.scss';
</style>
