<script>
	import CheckboxGroup from '$lib/components/CheckboxGroup/CheckboxGroup.svelte';
	import Checkbox from '$lib/components/Checkbox/Checkbox.svelte';

	let value = ['o'];
</script>

<div>{value}</div>



<div>
	defalut
	<CheckboxGroup  bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>

<br />
<div>
	inline true
	<CheckboxGroup inline={true} bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>
<br />

<div>
colum true
	<CheckboxGroup inline={false} bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>
