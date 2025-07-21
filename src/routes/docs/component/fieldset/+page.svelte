<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Progress/ListOfProps.svelte';
	import RadialProgressDefaultExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressDefaultExample.svelte';
	import RadialProgressColorsExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressColorsExample.svelte';
	import RadialProgressSizeExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressSizeExample.svelte';
	import RadialProgressTickExample from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressTickExample.svelte';
	import RadialProgressProps from '$lib/DocsComponent/Samples/RadialProgress/RadialProgressProps.svelte';
	import FieldsetDefaultExample from '$lib/DocsComponent/Samples/Fieldset/FieldsetDefaultExample.svelte';
	import FieldsetLoginExample from '$lib/DocsComponent/Samples/Fieldset/FieldsetLoginExample.svelte';
	import FieldsetProps from '$lib/DocsComponent/Samples/Fieldset/FieldsetProps.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Fieldset</h1>
		<p>
			Fieldset is a container for grouping related form elements. It includes fieldset-legend as a
			title and label as a description.
		</p>
	</div>
	<FieldsetProps />
	<Title id="default" title="Fieldset" />
	<FieldsetDefaultExample />
	<Title id="example" title="Fieldset login example" />
	<FieldsetLoginExample />
</div>
