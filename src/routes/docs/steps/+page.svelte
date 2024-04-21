<script>
	import StepItem from '$lib/components/Steps/StepItem.svelte';
	import Steps from '$lib/components/Steps/Steps.svelte';
	let selected = '2';
</script>

<div class="w-4/12 mx-auto">
	{selected}
	<Steps class="mt-10" bind:selected>
		<StepItem value="register">Register</StepItem>
		<StepItem value="plan">Choose plan</StepItem>
		<StepItem value="purchase">Purchase</StepItem>
		<StepItem value="receive">Receive Product</StepItem>
	</Steps>

	<ul class="daisy-steps daisy-steps-horizontal">
		<li class="daisy-step daisy-step-primary">Register</li>
		<li class="daisy-step daisy-step-primary">Choose plan</li>
		<li class="daisy-step">Purchase</li>
		<li class="daisy-step">Receive Product</li>
	</ul>
</div>
