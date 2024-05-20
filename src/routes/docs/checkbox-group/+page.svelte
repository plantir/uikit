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
	column true
	<CheckboxGroup  column bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>
<br />

<div>
	join
	<CheckboxGroup  join bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>
<br />


<div>
	<span>
		inline row
	</span>
	<CheckboxGroup inline  bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>

<br />
<div>
	<span>
		inline row join
	</span>
	<CheckboxGroup inline  join bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>

<br />

<div>
	<span> 
		inline column
	</span>
	<CheckboxGroup inline column  bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>

<br />

<div>
inline true
	<CheckboxGroup inline bind:value >
		<Checkbox size='sm' value="a" label="apple" />
		<Checkbox value="o" label="orange" />
		<Checkbox value="b" label="banana" />
	</CheckboxGroup>
</div>
