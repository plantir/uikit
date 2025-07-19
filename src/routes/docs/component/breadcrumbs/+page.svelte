<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import BreadcrumbsDefaultExample from '$lib/DocsComponent/Samples/Breadcrumb/BreadcrumbsDefaultExample.svelte';
	import BreadcrumbsMaxWidthExample from '$lib/DocsComponent/Samples/Breadcrumb/BreadcrumbsMaxWidthExample.svelte';
	import BreadcrumbsWithIconExample from '$lib/DocsComponent/Samples/Breadcrumb/BreadcrumbsWithIconExample.svelte';
	import StatusAnimationExample from '$lib/DocsComponent/Samples/Status/StatusAnimationExample.svelte';
	import StatusColorsExample from '$lib/DocsComponent/Samples/Status/StatusColorsExample.svelte';
	import StatusDefaultExample from '$lib/DocsComponent/Samples/Status/StatusDefaultExample.svelte';
	import StatusProps from '$lib/DocsComponent/Samples/Status/StatusProps.svelte';
	import StatusSizeExample from '$lib/DocsComponent/Samples/Status/StatusSizeExample.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>Breadcrumbs</h1>
	</div>
	<Title id="Breadcrumbs" title="Breadcrumbs" />
	<BreadcrumbsDefaultExample />
	<Title id="breadcrumbs-icon" title="Breadcrumbs Icon" />
	<BreadcrumbsWithIconExample />
	<Title id="breadcrumbs-width" title="Breadcrumbs Width" />
	<BreadcrumbsMaxWidthExample />
	<div class="py-10"></div>
</div>
