<script>
	import Steps from '$lib/components/Steps/Steps.svelte';
	let selected = '3';
</script>

<div class="w-4/12 mx-auto">
	<div>
		{selected}
	</div>
	<Steps
		class="mt-10"
		color="secondary"
		bind:selected
		vertical
		items={[
			{ title: 'Register', value: 1 },
			{ title: 'Choose plan', value: 2 },
			{ title: 'Purchase', value: 3 },
			{ title: 'Receive Product', value: 4 }
		]}
	></Steps>

	<ul class="daisy-steps daisy-steps-vertical">
		<li class="daisy-step daisy-step-primary">Register</li>
		<li class="daisy-step daisy-step-primary">Choose plan</li>
		<li class="daisy-step">Purchase</li>
		<li class="daisy-step">Receive Product</li>
	</ul>
</div>
