<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import AlertColorsExample from '$lib/DocsComponent/Samples/Alert/AlertColorsExample.svelte';
	import AlertDashedExample from '$lib/DocsComponent/Samples/Alert/AlertDashedExample.svelte';
	import AlertDefaultExample from '$lib/DocsComponent/Samples/Alert/AlertDefaultExample.svelte';
	import AlertOutlineExample from '$lib/DocsComponent/Samples/Alert/AlertOutlineExample.svelte';
	import AlertProps from '$lib/DocsComponent/Samples/Alert/AlertProps.svelte';
	import AlertSoftExample from '$lib/DocsComponent/Samples/Alert/AlertSoftExample.svelte';
	import DockColorsExample from '$lib/DocsComponent/Samples/Dock/DockColorsExample.svelte';
	import DockDefaultExample from '$lib/DocsComponent/Samples/Dock/DockDefaultExample.svelte';
	import DockProps from '$lib/DocsComponent/Samples/Dock/DockProps.svelte';
	import DockSizesExample from '$lib/DocsComponent/Samples/Dock/DockSizesExample.svelte';
	import StatusAnimationExample from '$lib/DocsComponent/Samples/Status/StatusAnimationExample.svelte';
	import StatusColorsExample from '$lib/DocsComponent/Samples/Status/StatusColorsExample.svelte';
	import StatusDefaultExample from '$lib/DocsComponent/Samples/Status/StatusDefaultExample.svelte';
	import StatusProps from '$lib/DocsComponent/Samples/Status/StatusProps.svelte';
	import StatusSizeExample from '$lib/DocsComponent/Samples/Status/StatusSizeExample.svelte';
</script>
<div class="pb-10">
	<div class="component-wrapper">
		<h1>Alert</h1>
	</div>
	<AlertProps />
	<Title id="Alert" title="Alert" />
	<AlertDefaultExample />
	<Title id="alert-colors" title="Alert Colors" />
	<AlertColorsExample />
	<Title id="alert-soft" title="Alert Soft" />
	<AlertSoftExample />
    <Title id="alert-Dash" title="Alert Dash" />
	<AlertDashedExample />
    <Title id="alert-outline" title="Alert Outline" />
	<AlertOutlineExample />
	<div class="py-10"></div>
</div>
