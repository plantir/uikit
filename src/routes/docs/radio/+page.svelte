<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Radio from '$lib/components/Radio/Radio.svelte';
	import RadioGroup from '$lib/components/RadioGroup/RadioGroup.svelte';
	let value = 'xs';
</script>

<Radio label="Apply to all" />

<div>
	<RadioGroup bind:value>
		<Radio color="primary" label="primary" value="primary" />
		<Radio color="secondary" label="secondary" value="secondary" />
		<Radio color="accent" label="accent" value="accent" />
		<Radio color="success" label="success" value="success" />
		<Radio color="warning" label="warning" value="warning" />
		<Radio color="info" label="info" value="info" />
		<Radio color="error" label="error" value="error" />
		<Radio disabled color="error" label="disabled" value="disabled" />
	</RadioGroup>
</div>
<div>
	<RadioGroup bind:value>
		<Radio size="xs" label="xs" value="xs" />
		<Radio size="sm" label="sm" value="sm" />
		<Radio size="md" label="md" value="md" />
		<Radio size="lg" label="lg" value="lg" />
	</RadioGroup>
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
