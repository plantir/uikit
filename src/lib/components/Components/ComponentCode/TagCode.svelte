<script lang="ts">
	export let name = '';
	export let props: any = [];

	function propAttr(prop: any) {
		const string = prop.split('=');
		return string;
	}
</script>

<span>
	&lt;<span class="text-green-600">{name}</span>
	{#each props as prop, index}
		{@const propValues = propAttr(prop)}
		<span>
			<span class="text-red-600">{propValues[0]}</span>{#if propValues[1]}=<span class="text-blue-600">{propValues[1]}</span>{/if}
		</span>
		{#if index < props.length - 1}
			<span></span>
		{/if}
	{/each}
	<span>&gt;</span>
	<slot />
	&lt;/<span class="text-green-600">{name}</span>&gt;
</span>
