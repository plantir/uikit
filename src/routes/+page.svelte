<script>
	import Checkbox from '$lib/components/Checkbox/Checkbox.svelte';
</script>

<Checkbox label="Apply to all" />

<div>
	<Checkbox color="primary" label="primary" />
	<Checkbox color="secondary" label="secondary" />
	<Checkbox color="accent" label="accent" />
	<Checkbox color="success" label="success" />
	<Checkbox color="warning" label="warning" />
	<Checkbox color="info" label="info" />
	<Checkbox color="error" label="error" />
	<Checkbox disabled color="error" label="disabled" />
</div>
<div>
	<Checkbox size="xs" label="xs" />
	<Checkbox size="sm" label="sm" />
	<Checkbox size="md" label="md" />
	<Checkbox size="lg" label="lg" />
</div>
<div>
	<Checkbox indeterminate label="Indeterminate" />
</div>
