<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import DiffAspectExample from '$lib/DocsComponent/Samples/Diff/DiffAspectExample.svelte';
	import DiffDefaultExample from '$lib/DocsComponent/Samples/Diff/DiffDefaultExample.svelte';
	import DiffProps from '$lib/DocsComponent/Samples/Diff/DiffProps.svelte';
	import KbdDefaultExample from '$lib/DocsComponent/Samples/Kbd/KbdDefaultExample.svelte';
	import KbdProps from '$lib/DocsComponent/Samples/Kbd/KbdProps.svelte';
	import KbdSizesExample from '$lib/DocsComponent/Samples/Kbd/KbdSizesExample.svelte';
	import StatCenteredExample from '$lib/DocsComponent/Samples/Stat/StatCenteredExample.svelte';
	import StatDefaultExample from '$lib/DocsComponent/Samples/Stat/StatDefaultExample.svelte';
	import StatFigureExample from '$lib/DocsComponent/Samples/Stat/StatFigureExample.svelte';
	import StatProps from '$lib/DocsComponent/Samples/Stat/StatProps.svelte';
	import StatsProps from '$lib/DocsComponent/Samples/Stat/StatsProps.svelte';
	import StatVerticalExample from '$lib/DocsComponent/Samples/Stat/StatVerticalExample.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>Stats</h1>
	</div>
	<StatsProps />
	<div class="component-wrapper">
		<h1>Stat</h1>
	</div>
	<StatProps />
	<Title id="Stat" title="Stat" />
	<StatDefaultExample />
	<Title id="stat-figure" title="Stat with icons or image" />
	<StatFigureExample />
	<Title id="stat-center" title="Centered items" />
	<StatCenteredExample />
	<Title id="stat-vertical" title="Vertical" />
	<p class="mb-4 text-sm">
		stats is a responsive component and it's already vertiacal on a small devices but you can pass
		the <span class="text-error">vetical</span> props to force it to be
		<span class="text-error">vertical</span>
	</p>
	<StatVerticalExample />
	<div class="py-10"></div>
</div>
