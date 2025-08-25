<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Swiper, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let slideItem = 3;
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Swiper</span> from '{$importDocumentSrc}/Swiper.svelte';
			<br />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="w-[290px] md:w-[460px] mx-auto"']}>
			<TagCode name="Swiper" props={['slidesPerView={slideItem}']}>
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
			<Swiper slidesPerView={slideItem}>
				{#each { length: 12 } as index, i}
					<swiper-slide>
						<img src="/swiper-example-0{(i % 3) + 1}.jpg" alt="" />
					</swiper-slide>
				{/each}
			</Swiper>
		</div>
	</div>
</SampleWrapper>
