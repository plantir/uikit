<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Swiper/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Swap/DefaultExample.svelte';
	import SlidesPerView from '$lib/DocsComponent/Samples/Swiper/SlidesPerView.svelte';
	import CenteredExample from '$lib/DocsComponent/Samples/Swiper/CenteredExample.svelte';
	import BreakPointsExample from '$lib/DocsComponent/Samples/Swiper/BreakPointsExample.svelte';
	import LoopExample from '$lib/DocsComponent/Samples/Swiper/LoopExample.svelte';
	import SpaceBetweenExample from '$lib/DocsComponent/Samples/Swiper/SpaceBetweenExample.svelte';
	import NavigationExample from '$lib/DocsComponent/Samples/Swiper/NavigationExample.svelte';
	import PaginationExample from '$lib/DocsComponent/Samples/Swiper/PaginationExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Swap</h1>
	<p>
		Use the Swiper component to Swiper between a binary state of true or false using a single click
		available in multiple sizes, and colors
	</p>
	<div class="line"></div>
	<p>
		The toggle component can be used to receive a simple “yes” or “no” type of answer from the user
		by choosing a single option from two options available in multiple sizes, styles, and colors
		coded with the utility classes from Tailwind CSS and with dark mode support.
	</p>
	<Title id="default-swiper" title="Default" />
	<p>
		Get started with the default swiper component example as a checkbox element to receive a true or
		false selection from the user.
	</p>
	<DefaultExample />
	<Title id="Swiper-SlidesPerView" title="Slides Per View" />
	<p>
		use <span class="badge">slidesPerView</span> prop to change slides item in slider. the default
		number of <span class="badge">slidesPerView</span> is <span class="badge text-lg">6</span>.
	</p>
	<SlidesPerView />
	<Title id="Swiper-size" title="Breakpoints" />
	<p>
		Use <span class="badge">breakpoints</span> prop to change number of slide in
		<span class="badge">Swiper</span> in differenet window size. default breakpoint option for sizes
		is.
	</p>
	<div class="grid grid-cols-2">
		<p><span class="badge">320</span> : your chosen slidesPerView / 5</p>
		<p><span class="badge">640</span> : your chosen slidesPerView / 3</p>
		<p><span class="badge">768</span> : your chosen slidesPerView / 2</p>
		<p><span class="badge">1024</span> : your chosen slidesPerView</p>
	</div>
	<BreakPointsExample />
	<Title id="Swiper-Center" title="Center" />
	<p>
		Use <span class="badge">centered</span> prop to change Swiper to a centered
		<span class="badge">Swiper</span>.
	</p>
	<CenteredExample />
	<Title id="Swiper-Loop" title="Loop" />
	<p>
		Use <span class="badge">loop</span> prop to create a loop. the default option for loop is
		<span class="badge">false</span>.
	</p>
	<LoopExample />
	<Title id="Swiper-SpaceBetween" title="Space Between" />
	<p>
		Use <span class="badge">spaceBetween</span> prop to change space between items in swiper. the
		default option for spaceBetween is
		<span class="badge">10</span>.
	</p>
	<SpaceBetweenExample />
	<Title id="Swiper-Navigation" title="Navigation" />
	<p>
		Use <span class="badge">navigation</span> prop to add navigation to swiper. the default option
		for navigation is
		<span class="badge">false</span>.you have 2 option :
	</p>
	<p>
		<span class="badge">A:</span> use default navigation and pass <span class="badge">true</span> in
		prop
	</p>
	<p>
		<span class="badge">B:</span>use
		<a href="https://swiperjs.com/swiper-api#navigation" class="text-primary" target="_blank"
			>swiper navigation parameters</a
		>
	</p>
	<p><span class="badge">You must add css to your custom element to show perfectly</span></p>
	<NavigationExample />
	<Title id="Swiper-Pagination" title="Pagination" />
	<p>
		Use <span class="badge">pagination</span> prop to add pagination to swiper. the default option
		for pagination is
		<span class="badge">false</span>.you have 2 option :
	</p>
	<p>
		<span class="badge">A:</span> use default pagination and pass <span class="badge">true</span> in
		prop
	</p>
	<p>
		<span class="badge">B:</span>use
		<a href="https://swiperjs.com/swiper-api#pagination" class="text-primary" target="_blank"
			>swiper pagination parameters</a
		>
	</p>
	<p><span class="badge">You must add css to your custom element to show perfectly</span></p>
	<PaginationExample />
	<Title id="tabs-props" title="Props" />
	<p>this is the list of the props that Swiper can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
