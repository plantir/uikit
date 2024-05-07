<script>
	import Header from '$lib/Layout/Header.svelte';
	import '../app.css';
	import '$lib/scss/Themes/polaris.scss';
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
	.main {
		@apply min-h-screen pt-16;
	}
</style>
