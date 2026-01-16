<script lang="ts">
	export let item: any = {};
</script>

{#snippet ItemObject(item: any)}
	{#each Object.keys(item) as key}
		<span class="text-red-600">{key}</span>:
		{#if typeof item[key] == 'object'}
			{'{'}<br />
			{@render ItemObject(item[key])}
			<br />
			<span>{'}'},</span><br />
		{:else if typeof item[key] == 'string'}
			<span>
				"{item[key]}",<br />
			</span>
		{:else}
			<span>
				{item[key]},<br />
			</span>
		{/if}
	{/each}
{/snippet}
{@render ItemObject(item)}
