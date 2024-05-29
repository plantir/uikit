<script>
	import Select from '$lib/components/Select/Select.svelte';
	import Badge from '$lib/components/Badge/Badge.svelte';

	const options = [
		{ title: 'Today', value: 'today' },
		{ title: 'Yesterday', value: 'yesterday' },
		{ title: 'Last 7 days', value: 'lastWeek' }
	];
	let value = 'today';
	let multipleValue = ["a", "d"]
</script>

<div class="p-5 flex flex-col gap-y-4">
	<div>
		<Select bind:value items={options} label="Choose" />
		<Select bind:value color="natural" items={options} label="Choose" />
		<Select bind:value color="primary" items={options} label="Choose" />
		<Select bind:value color="secondary" items={options} label="Choose" />
		<Select bind:value color="success" items={options} label="Choose" />
		<Select bind:value color="warning" items={options} label="Choose" />
		<Select bind:value color="warning" items={options} label="Choose" />
		<Select bind:value color="error" items={options} label="Choose" />
	</div>
	<div>
		<Select size="xs" hint="this is select hint" bind:value items={options} label="Choose" />
		<Select size="sm" state="invalid" bind:value items={options} label="Choose" />
		<Select size="md" placeholder="test-placeholder" readonly state="valid" bind:value items={options} label="Choose test" />
		<Select size="lg" hint="this is error" state="invalid" bind:value items={options} placeholder="Choose" />
		<Select size="lg" hint="this is success" state="valid" bind:value items={options} placeholder="Choose" />
		<Select size="lg" label="this is label" bind:value items={options} placeholder="Choose" />
		<Select size="lg" bind:value items={options} label="Choose" >
            <div slot="label">Label Slot</div>

        </Select>
	</div>

	<div>
		<Select multiple bind:value={multipleValue} items={['a', 'b', 'c', 'd']} label="Choose" />

		{#each multipleValue as value}
			<Badge>{value}</Badge>
		{/each}
	</div>
</div>
