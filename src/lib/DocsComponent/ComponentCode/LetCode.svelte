<script lang="ts">
	export let name = '';
	export let value = '';
	export let items: any = [];
	export let dont_break = false;

	function propAttr(prop: any) {
		const string = prop.split('=');
		return string;
	}
</script>

<span>
	<span class="text-primary">let</span> <span class="text-green-600">{name}</span> =
	<span class="text-red-600">{typeof value == 'string' ? `"${value}"` : value}</span>;
	<br />
</span>
{#if !dont_break}
	<br />
{/if}

<style lang="scss">
</style>
