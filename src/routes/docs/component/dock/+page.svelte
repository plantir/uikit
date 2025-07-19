<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
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
		<h1>Dock</h1>
	</div>
	<DockProps />
	<Title id="Dock" title="Dock" />
	<DockDefaultExample />
	<Title id="dock-sizes" title="Dock sizes" />
	<DockSizesExample />
	<Title id="Dock-colors" title="Dock with colors" />
	<DockColorsExample />
	<div class="py-10"></div>
</div>
