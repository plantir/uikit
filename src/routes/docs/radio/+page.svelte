<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Radio from '$lib/components/Radio/Radio.svelte';
	import RadioGroup from '$lib/components/RadioGroup/RadioGroup.svelte';
	let value = 'xs';
</script>

<Radio label="Apply to all" />

<div>
	<Radio color="primary" label="primary" />
	<Radio color="secondary" label="secondary" />
	<Radio color="accent" label="accent" />
	<Radio color="success" label="success" />
	<Radio color="warning" label="warning" />
	<Radio color="info" label="info" />
	<Radio color="error" label="error" />
	<Radio disabled color="error" label="disabled" />
</div>
<div>
	<Radio size="xs" label="xs" />
	<Radio size="sm" label="sm" />
	<Radio size="md" label="md" />
	<Radio size="lg" label="lg" />
</div>
<div>
	<RadioGroup bind:value>
		<Radio label="xs" value="xs" />
		<Radio label="sm" value="sm" />
		<Radio label="md" value="md" />
		<Radio label="lg" value="lg" />
	</RadioGroup>
	<RadioGroup bind:value join>
		<Radio button label="xs" value="xs" />
		<Radio button label="sm" value="sm" />
		<Radio button label="md" value="md" />
		<Radio button label="lg" value="lg" />
	</RadioGroup>
</div>
