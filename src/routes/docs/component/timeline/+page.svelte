<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import StatusAnimationExample from '$lib/DocsComponent/Samples/Status/StatusAnimationExample.svelte';
	import StatusColorsExample from '$lib/DocsComponent/Samples/Status/StatusColorsExample.svelte';
	import StatusDefaultExample from '$lib/DocsComponent/Samples/Status/StatusDefaultExample.svelte';
	import StatusProps from '$lib/DocsComponent/Samples/Status/StatusProps.svelte';
	import StatusSizeExample from '$lib/DocsComponent/Samples/Status/StatusSizeExample.svelte';
	import TimeLineBottomOnlyExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineBottomOnlyExample.svelte';
	import TimeLineClickableExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineClickableExample.svelte';
	import TimeLineColorsExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineColorsExample.svelte';
	import TimeLineDefaultExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineDefaultExample.svelte';
	import TimeLineNoIconExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineNoIconExample.svelte';
	import TimeLineProps from '$lib/DocsComponent/Samples/TimeLine/TimeLineProps.svelte';
	import TimeLineReverseExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineReverseExample.svelte';
	import TimeLineTopOnlyExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineTopOnlyExample.svelte';
	import TimeLineValueExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineValueExample.svelte';
	import TimeLineVerticalExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineVerticalExample.svelte';
	import TimeLineVerticalReverseExample from '$lib/DocsComponent/Samples/TimeLine/TimeLineVerticalReverseExample.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>TimeLine</h1>
	</div>
	<TimeLineProps />
	<Title id="Timeline" title="Timeline" />
	<TimeLineDefaultExample />
	<Title id="timeline-bottom" title="Timeline Text Only" />
	<TimeLineBottomOnlyExample />
	<Title id="timeline-top" title="Timeline Title Only" />
	<TimeLineTopOnlyExample />
	<Title id="timeline-revers" title="Timeline Reverse" />
	<TimeLineReverseExample />
	<Title id="timeline-value" title="Timeline value" />
	<TimeLineValueExample />
	<Title id="timeline-colors" title="Timeline Colors" />
	<TimeLineColorsExample />
	<Title id="timeline-vertical" title="Timeline Vertical" />
	<TimeLineVerticalExample />
	<Title id="timeline-vertical-reverse" title="Timeline Vertical Reverse" />
	<TimeLineVerticalReverseExample />
	<Title id="timeline-no-icon" title="Timeline No icon" />
	<TimeLineNoIconExample />
	<Title id="timeline-clickable" title="Timeline Clickable" />
	<TimeLineClickableExample />
	<div class="py-10"></div>
</div>
