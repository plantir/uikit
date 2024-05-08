<script lang="ts">
	import Table from '$lib/components/Table/Table.svelte';
	import { onMount, setContext } from 'svelte';
	import Button from '../Button/Button.svelte';
	import Card from '../Card/Card.svelte';
	import Icon from '../Icon/Icon.svelte';
	import TabItem from '../Tabs/TabItem.svelte';
	import Tabs from '../Tabs/Tabs.svelte';
	import TextField from '../TextField/TextField.svelte';
	import Loading from '../Loading/Loading.svelte';

	export let items: any[] = [];

	let showFilters = false;
	let selected = '1';

	let loading = true;

	onMount(() => {
        console.log('onMount of dataTable', {items})
		loading = false;
	});

	function toggleFilters() {
		showFilters = !showFilters;
	}

	let columns: any[] = [];

	function register({ name, footer }) {
		if (typeof footer === 'string') {
			footer = () => footer;
		}
        if (!columns.find((column) => column.name === name)) {
            columns = [...columns, { name, footer }];
		}

	}

	setContext('TABLE', { register });

	$: hasFooter = columns.some((column) => column.footer);
</script>

<Card>
	{#if loading}
		<div class="flex items-center justify-center h-[400px]">
			<Loading size="lg" />
		</div>
	{:else}
		<div class="flex items-center justify-between p-2 rounded-lg overflow-hidden">
			{#if showFilters}
				<TextField placeholder="Searching All collections" />
			{:else}
				<Tabs bind:selected color="natural" variant="box">
					<TabItem value="1" title="First"></TabItem>
					<TabItem value="2" title="Second"></TabItem>
					<TabItem value="3" title="Third"></TabItem>
				</Tabs>
			{/if}

			<div class="flex gap-1">
				{#if showFilters}
					<Button on:click={toggleFilters}>Cancel</Button>
				{:else}
					<Button on:click={toggleFilters} class="px-1">
						<Icon size="md" name="SearchMinor" />
						<Icon size="md" name="FilterMinor" />
					</Button>
				{/if}
				<Button shape="square">
					<Icon size="md" name="SortMinor" />
				</Button>
			</div>
		</div>
		{#if showFilters}
			<div class="p-2 gap-2 border-t border-gray-100">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</div>
		{/if}
		<Table pinHead hover>
			<thead>
				<tr>
                    {#each columns as column}
                        <th>{column.name}</th>
                    {/each}
				</tr>
			</thead>
			<tbody>
				{#each items as item, index}
                    <tr>
                        <slot {item} {index}/>
                    </tr>
				{/each}
			</tbody>
            {#if hasFooter}
                <tfoot>
                    <tr>
                        {#each columns as column}
                            <td>{column.footer()}</td>
                        {/each}
                    </tr>
                </tfoot>
            {/if}
		</Table>
	{/if}
</Card>
