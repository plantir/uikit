<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Range/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Range/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Range/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Range/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Range/SizesExample.svelte';
	import MinMaxExample from '$lib/DocsComponent/Samples/Range/MinMaxExample.svelte';
	import StepExample from '$lib/DocsComponent/Samples/Range/StepExample.svelte';
	import RatingDefaultExample from '$lib/DocsComponent/Samples/Rating/RatingDefaultExample.svelte';
	import RatingColorsExample from '$lib/DocsComponent/Samples/Rating/RatingColorsExample.svelte';
	import RatingSizesExample from '$lib/DocsComponent/Samples/Rating/RatingSizesExample.svelte';
	import RatingMaskExample from '$lib/DocsComponent/Samples/Rating/RatingMaskExample.svelte';
	import RatingHalfExample from '$lib/DocsComponent/Samples/Rating/RatingHalfExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Rating</h1>
		<p>Rating is a set of radio buttons that allow the user to rate something.</p>
	</div>
	<ListOfProps />
	<Title id="default" title="Rating" />
	<RatingDefaultExample />
	<Title id="colors" title="Rating Colors" />
	<RatingColorsExample />
	<Title id="sizes" title="Rating Sizes" />
	<RatingSizesExample />
	<Title id="mask" title="Rating Mask" />
	<RatingMaskExample />
	<Title id="range-size" title="Rating Half" />
	<RatingHalfExample />
	<div class="py-10"></div>
</div>
