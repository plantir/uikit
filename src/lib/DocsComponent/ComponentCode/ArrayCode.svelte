<script lang="ts">
	export let name = '';
	export let items: any = [];
	export let dont_break = false;

	function propAttr(prop: any) {
		const string = prop.split('=');
		return string;
	}
</script>

<span>
	<span class="text-primary">let</span> <span class="text-green-600">{name}</span> = {'['}
	<br />
	{#each items as item, index}
		<span class="item">
			<span>{'{'}</span><br />
			{#each Object.keys(item) as key}
				<span class="text-red-600">{key}</span>:<span>{typeof item[key] == 'string' ? `"${item[key]}"` : item[key]},</span>
				<br />
			{/each}
			<span>{'}'}</span>,<br />
		</span>
	{/each}
	{']'};
</span>
{#if !dont_break}
	<br />
{/if}

<style lang="scss">
</style>
