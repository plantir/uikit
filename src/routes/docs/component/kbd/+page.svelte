<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import DiffAspectExample from '$lib/DocsComponent/Samples/Diff/DiffAspectExample.svelte';
	import DiffDefaultExample from '$lib/DocsComponent/Samples/Diff/DiffDefaultExample.svelte';
	import DiffProps from '$lib/DocsComponent/Samples/Diff/DiffProps.svelte';
	import KbdDefaultExample from '$lib/DocsComponent/Samples/Kbd/KbdDefaultExample.svelte';
	import KbdProps from '$lib/DocsComponent/Samples/Kbd/KbdProps.svelte';
	import KbdSizesExample from '$lib/DocsComponent/Samples/Kbd/KbdSizesExample.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>Kbd</h1>
	</div>
	<KbdProps />
	<Title id="Kbd" title="Kbd" />
	<KbdDefaultExample />
	<Title id="kbd-size" title="Kbd Sizes" />
	<KbdSizesExample />
	<div class="py-10"></div>
</div>
