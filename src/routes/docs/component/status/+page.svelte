<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import StatusAnimationExample from '$lib/DocsComponent/Samples/Status/StatusAnimationExample.svelte';
	import StatusColorsExample from '$lib/DocsComponent/Samples/Status/StatusColorsExample.svelte';
	import StatusDefaultExample from '$lib/DocsComponent/Samples/Status/StatusDefaultExample.svelte';
	import StatusProps from '$lib/DocsComponent/Samples/Status/StatusProps.svelte';
	import StatusSizeExample from '$lib/DocsComponent/Samples/Status/StatusSizeExample.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>Status</h1>
	</div>
	<StatusProps />
	<Title id="Status" title="Status" />
	<StatusDefaultExample />
	<Title id="status-sizes" title="Status sizes" />
	<StatusSizeExample />
	<Title id="status-colors" title="Status with colors" />
	<StatusColorsExample />
	<Title id="status-animate" title="Status with animations" />
	<StatusAnimationExample />
	<div class="py-10"></div>
</div>
