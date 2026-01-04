<script>
	import '#app.css';
	import '$lib/css/themes/fluent.css';
	import '$lib/css/themes/polaris.css';
	import Header from '$lib/Layout/Header.svelte';

	let { children } = $props();
</script>

<div class="main" data-theme="polaris">
	<Header />
	{@render children()}
</div>
