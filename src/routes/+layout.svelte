<script>
	import Header from '$lib/Layout/Header.svelte';
	import '../app.css';
	import '../lib/scss/themes/polaris.scss';
</script>

<svelte:head>
	<title>Hello Library</title>
	<meta name="description" content="plantir uikit for svlete" />
</svelte:head>
<Header></Header>
<div class="main">
	<slot />
</div>

<style lang="scss">
	.main {
		@apply h-screen;
	}
</style>
