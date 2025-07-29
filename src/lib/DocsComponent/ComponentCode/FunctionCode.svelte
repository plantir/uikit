<script lang="ts">
	export let name = '';
	export let dont_break = false;

	function propAttr(prop: any) {
		const string = prop.split('=');
		return string;
	}
</script>

<span>
	<span class="text-primary">function</span> <span class="text-neutral">{name}</span>() {'{'}<br />
	<span class="ml-4">
		<slot></slot>
	</span>
	<br />
	{'}'}
</span>
{#if !dont_break}
	<br />
{/if}

<style lang="scss">
</style>
