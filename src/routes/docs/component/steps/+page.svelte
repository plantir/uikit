<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Steps/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Steps/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Steps/ColorsExample.svelte';
	import VerticalExample from '$lib/DocsComponent/Samples/Steps/VerticalExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Steps</h1>
		<p>Steps can be used to show a list of steps in a process.</p>
	</div>
	<ListOfProps />
	<Title id="default-steps" title="Default" />
	<DefaultExample />
	<Title id="steps-colors" title="Colors" />
	<ColorsExample />
	<Title id="steps-vertical" title="Vertical" />
	<VerticalExample />
	<div class="py-10"></div>
</div>
