<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Progress/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Progress/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Progress/ColorsExample.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Progress/SetupExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Progress</h1>
	<p>Get started with the Progress component to show the progress of a process in percentages.</p>

	<Title id="setup" title="Setup" />
	<p>Import Progress component in the script tag and use it.</p>
	<SetupExample />

	<Title id="default" title="Default" />
	<p>The default Progress with without value and with value.</p>
	<DefaultExample />

	<Title id="colors" title="Colors" />
	<p>
		Use these default Progress styles with multiple colors to indicate progress with colors. You can
		change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />

	<Title id="Progress" title="Progress Props" />
	<p>this is the list of the props that Progress can have.</p>
	<ListOfProps />
</div>
