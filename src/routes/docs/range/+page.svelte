<script>
	import Range from '$lib/components/Range/Range.svelte';
	let value = '35';
</script>

<div class="w-1/6">
	<Range
		class="w-full"
		placeholder="fill your description here."
		bind:value
		color="success"
		min="0"
		max="100"
		size="lg"
	>
		<div slot="label">
			Description Length : <span class="text-success"> {value} </span> charachter
		</div>
	</Range>
</div>
