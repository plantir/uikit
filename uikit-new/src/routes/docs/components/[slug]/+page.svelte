<script>
	import { page } from '$app/state';

	let { data } = $props();
</script>

<!-- {Content2} -->
<svelte:head>
	<title>{data.content.metadata.title ?? `${page.params.slug} - Plantir UiKit`}</title>
	<meta
		name="description"
		content={data.content.metadata.description ?? `${page.params.slug} - Plantir UiKit`}
	/>
</svelte:head>

<data.content.default />
