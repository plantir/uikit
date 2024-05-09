<script>
	import TextField from '$lib/components/TextField/TextField.svelte';
	import TextArea from '$lib/components/TextArea/TextArea.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte'
	let value = '';
</script>

<div class="flex flex-col p-6 gap-y-5">
	<div>
		<TextField label="label" placeholder="placeholder" bind:value></TextField>
		<TextField label="label" placeholder="placeholder" bind:value></TextField>
		<TextField label="label" placeholder="placeholder" bind:value></TextField>
		<TextField label="label" placeholder="placeholder" bind:value></TextField>
	</div>

	<div>
		<TextField inputClass='px-6' label="label" placeholder="placeholder" bind:value>
			<Icon slot='before' name ="SearchMinor" size='md' />
			<Icon slot='after' name ="CancelSmallMinor" size='md' />
		</TextField>
		<TextField inputClass='px-6' size='sm' label="label" placeholder="placeholder" bind:value>
			<Icon slot='before' name ="ActivitiesMajor" size='md' />
			<Icon slot='after' name ="ActivitiesMajor" size='sm' />
		</TextField>
		<TextField inputClass='px-8' label="label" size='lg' placeholder="placeholder" bind:value>

			<Icon slot='before' name ="ActivitiesMajor" size='lg' />
			<Icon slot='after' name ="ActivitiesMajor" size='lg' />
		</TextField>
	</div>
	<TextArea
		class="w-full"
		label="description"
		placeholder="fill your description here."
		bind:value
	/>
</div>
