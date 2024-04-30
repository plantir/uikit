<script>
	import TextField from '$lib/components/TextField/TextField.svelte';
	import TextArea from '$lib/components/TextArea/TextArea.svelte';
	let value = '';
</script>

<div class="flex flex-col p-6 gap-y-5">
	<div>
		<TextField label="label" placeholder="placeholder" bind:value></TextField>
		<TextField label="label" placeholder="placeholder" bind:value></TextField>
		<TextField label="label" placeholder="placeholder" bind:value></TextField>
		<TextField label="label" placeholder="placeholder" bind:value></TextField>
	</div>
	<TextArea
		class="w-full"
		label="description"
		placeholder="fill your description here."
		bind:value
	/>
</div>
