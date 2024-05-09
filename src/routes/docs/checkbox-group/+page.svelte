<script>
	import CheckboxGroup from '$lib/components/CheckboxGroup/CheckboxGroup.svelte';
	import Checkbox from '$lib/components/Checkbox/Checkbox.svelte';

	let value = ['o'];
</script>

<div>{value}</div>

<CheckboxGroup inline = {false} bind:value >
	<Checkbox size='sm' value="a" label="apple" />
	<Checkbox value="o" label="orange" />
	<Checkbox value="b" label="banana" />
</CheckboxGroup>
