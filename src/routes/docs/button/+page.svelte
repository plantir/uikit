<script>
	import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="p-6 gap-y-4 flex flex-col justify-center">
	<div class="flex items-center gap-x-1">
		<Button size="xs">Add product</Button>
		<Button size="xs" loading>Add product</Button>
		<Button size="xs" color="primary" variant="link">Add product</Button>
		<Button size="xs" variant="ghost">Add product</Button>
		<Button size="xs" disabled>Add product</Button>
		<Button size="xs" loading>Add product</Button>
		<Button size="xs">+ Add product</Button>
	</div>
	<div>
		<Button color="natural" size="xs">Add product</Button>
		<Button color="primary" size="xs">Add product</Button>
		<Button color="secondary" size="xs">Add product</Button>
		<Button color="success" size="xs">Add product</Button>
		<Button color="warning" size="xs">Add product</Button>
		<Button color="info" size="xs">Add product</Button>
		<Button color="error" size="xs">Add product</Button>
		<Button color="accent" size="xs">Add product</Button>
	</div>
	<div>
		<Button color="natural">Add product</Button>
		<Button color="primary">Add product</Button>
		<Button color="secondary">Add product</Button>
		<Button color="success">Add product</Button>
		<Button color="warning">Add product</Button>
		<Button color="info">Add product</Button>
		<Button color="error">Add product</Button>
		<Button color="accent">Add product</Button>
	</div>
	<div>
		<Button color="natural" size="md">Add product</Button>
		<Button color="primary" size="md">Add product</Button>
		<Button color="secondary" size="md">Add product</Button>
		<Button color="success" size="md">Add product</Button>
		<Button color="warning" size="md">Add product</Button>
		<Button color="info" size="md">Add product</Button>
		<Button color="error" size="md">Add product</Button>
		<Button color="accent" size="md">Add product</Button>
	</div>
	<div>
		<Button size="xs" shape="circle">+</Button>
		<Button size="sm" shape="circle">+</Button>
		<Button size="md" shape="circle">+</Button>
		<Button size="lg" shape="circle">+</Button>
	</div>
	<div>
		<Button size="xs" shape="square">+</Button>
		<Button size="sm" shape="square">+</Button>
		<Button size="md" shape="square">+</Button>
		<Button size="lg" shape="square">+</Button>
	</div>
	<div>
		<Button size="xs">Add product</Button>
		<Button size="sm">Add product</Button>
		<Button size="md">Add product</Button>
		<Button size="lg">Add product</Button>
	</div>
</div>
