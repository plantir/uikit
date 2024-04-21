<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Hello Library</title>
	<meta name="description" content="plantir uikit for svlete" />
</svelte:head>
<div class="h-16 bg-gray-400 fixed top-0 w-full right-0 z-50"></div>
<div class="main">
	<slot />
</div>

<style lang="scss">
	.main {
		@apply h-screen pt-16 overflow-y-auto;
	}
</style>
