<script>
	import Header from '$lib/Layout/Header.svelte';
	import '$lib/css/app.css';
	import '$lib/css/component.css';
	import '$lib/css/Themes/polaris.css';
	import '$lib/css/Themes/fluent.css';
</script>

<svelte:head>
	<title>Svelte Uikit</title>
	<meta
		name="description"
		content="svelte open source library. sveltejs + tailwindcss + daisyui "
	/>
</svelte:head>
<Header></Header>
<div class="main">
	<slot />
</div>

<style lang="scss">
	@reference "$lib/css/app.css";

	.main {
		@apply min-h-screen pt-16 max-w-[100rem] mx-auto;
	}
</style>
