<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Swiper/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Swiper/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Swiper/DefaultExample.svelte';
	import SlidesPerView from '$lib/DocsComponent/Samples/Swiper/SlidesPerView.svelte';
	import CenteredExample from '$lib/DocsComponent/Samples/Swiper/CenteredExample.svelte';
	import BreakPointsExample from '$lib/DocsComponent/Samples/Swiper/BreakPointsExample.svelte';
	import LoopExample from '$lib/DocsComponent/Samples/Swiper/LoopExample.svelte';
	import SpaceBetweenExample from '$lib/DocsComponent/Samples/Swiper/SpaceBetweenExample.svelte';
	import NavigationExample from '$lib/DocsComponent/Samples/Swiper/NavigationExample.svelte';
	import PaginationExample from '$lib/DocsComponent/Samples/Swiper/PaginationExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Swiper</h1>
		<p>Swiper show images or content in a scrollable area.</p>
	</div>
	<ListOfProps />
	<Title id="default-swiper" title="Swiper" />
	<DefaultExample />
	<Title id="Swiper-SlidesPerView" title="Slides Per View" />
	<SlidesPerView />
	<Title id="Swiper-size" title="Breakpoints" />
	<BreakPointsExample />
	<Title id="Swiper-Center" title="Center" />
	<CenteredExample />
	<Title id="Swiper-Loop" title="Loop" />
	<LoopExample />
	<Title id="Swiper-SpaceBetween" title="Space Between" />
	<SpaceBetweenExample />
	<Title id="Swiper-Navigation" title="Navigation" />
	<NavigationExample />
	<Title id="Swiper-Pagination" title="Pagination" />
	<PaginationExample />
	<div class="py-10"></div>
</div>
