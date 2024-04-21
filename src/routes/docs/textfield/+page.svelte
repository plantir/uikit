<script>
	import TextField from '$lib/components/TextField/TextField.svelte';
	import TextArea from '$lib/components/TextArea/TextArea.svelte';
	let value = '';
</script>

<div class="w-1/6">
	<TextArea
		class="w-full"
		label="description"
		placeholder="fill your description here."
		bind:value
	/>
</div>
