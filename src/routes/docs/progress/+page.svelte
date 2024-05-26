<script>
	import Progress from '$lib/components/Progress/Progress.svelte';

	let value1 = 50;
</script>

<button onclick={() => value1++}> increase </button>
<button onclick={() => value1--}> decrease</button>
<div class="w-52">
	<Progress  />
	<Progress color="primary" max={100} bind:value={value1} />
	<Progress color="secondary" max={100} bind:value={value1} />
	<Progress color="accent" max={100} bind:value={value1} />
	<Progress color="success" max={100} bind:value={value1} />
</div>
