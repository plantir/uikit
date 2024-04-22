<script>
	import Collapse from '$lib/components/Collapse/Collapse.svelte';
	let open = false;
</script>

<Collapse color="primary" bind:open>
	<div slot="title" class=" text-xl font-medium">
		<div class="flex justify-between">
			<span>Focus me to see content</span>
		</div>
	</div>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse mollitia nemo et vero
		officiis reprehenderit maxime corporis quod, necessitatibus voluptatum, consequatur qui amet
		beatae. Fugiat laudantium possimus sint quos.
	</p>
</Collapse>
<Collapse class="mt-3" disabled color="primary" bind:open plus>
	<div slot="title" class=" text-xl font-medium">
		<div class="flex justify-between">
			<span>Focus me to see content</span>
		</div>
	</div>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse mollitia nemo et vero
		officiis reprehenderit maxime corporis quod, necessitatibus voluptatum, consequatur qui amet
		beatae. Fugiat laudantium possimus sint quos.
	</p>
</Collapse>
