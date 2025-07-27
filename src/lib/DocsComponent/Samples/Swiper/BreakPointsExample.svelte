<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Swiper, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let breakpoints = {
		320: {
			slidesPerView: 1
		},
		640: {
			slidesPerView: 2
		},
		768: {
			slidesPerView: 3
		},
		1024: {
			slidesPerView: 4
		}
	};
	import SampleWrapper from '../SampleWrapper.svelte';
	import ObjectCode from '$lib/DocsComponent/ComponentCode/ObjectCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Swiper</span> from '{$importDocumentSrc}/Swiper.svelte';
			<br />
			<ObjectCode name="breakpoints" item={breakpoints}></ObjectCode>
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="w-[290px] md:w-[460px] mx-auto"']}>
			<TagCode name="Swiper" props={['{breakpoints}']}>
				{#each { length: 12 } as item, i}
					<TagCode name="swiper-slide">
						<TagCode close_self name="img" props={['src="your image url"']}></TagCode>
					</TagCode>
				{/each}
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="w-[290px] md:w-[460px] mx-auto">
			<Swiper {breakpoints}>
				{#each { length: 12 } as index, i}
					<swiper-slide>
						<img src="/swiper-example-0{(i % 3) + 1}.jpg" alt="" />
					</swiper-slide>
				{/each}
			</Swiper>
		</div>
	</div>
</SampleWrapper>
