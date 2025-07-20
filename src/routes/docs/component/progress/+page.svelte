<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Progress/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Progress/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Progress/ColorsExample.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Progress/SetupExample.svelte';
	import ProgressIndeterminateExample from '$lib/DocsComponent/Samples/Progress/ProgressIndeterminateExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Progress</h1>
		<p>Progress bar can be used to show the progress of a task or to show the passing of time.</p>
	</div>
	<ListOfProps />
	<Title id="default" title="Default" />
	<DefaultExample />
	<Title id="colors" title="Colors" />
	<ColorsExample />
	<Title id="Indeterminate" title="Indeterminate (without value)" />
	<ProgressIndeterminateExample />
</div>
