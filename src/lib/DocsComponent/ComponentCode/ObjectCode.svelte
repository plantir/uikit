<script lang="ts">
	import ObjectKeys from './ObjectKeys.svelte';

	export let name = '';
	export let item: any = {};
	export let dont_break = false;

	function propAttr(prop: any) {
		const string = prop.split('=');
		return string;
	}
</script>

<span>
	<span class="text-primary">let</span> <span class="text-green-600">{name}</span> = {'{'}
	<br />
	<ObjectKeys {item}></ObjectKeys>
	{'}'};
</span>
{#if !dont_break}
	<br />
{/if}

<style lang="scss">
</style>
