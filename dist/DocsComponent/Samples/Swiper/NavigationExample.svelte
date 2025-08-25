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
	let form: any = {};
	let navigation = {
		nextEl: '.swiper-navigation-to-right',
		prevEl: '.swiper-navigation-to-left'
	};
	import SampleWrapper from '../SampleWrapper.svelte';
	import ObjectCode from '../../ComponentCode/ObjectCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Swiper</span> from '{$importDocumentSrc}/Swiper.svelte';
			<br />
			<ObjectCode name="navigation" item={navigation}></ObjectCode>
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="grid grid-cols-2 gap-10"']}>
			<TagCode name="div">
				<TagCode name="div" one_line>Custom</TagCode>
				<TagCode name="div" props={['class="relative"']}>
					<TagCode name="Swiper" props={['{navigation}']}>
						{#each { length: 12 } as item, i}
							<TagCode name="swiper-slide">
								<TagCode close_self name="img" props={['src="your image url"']}></TagCode>
							</TagCode>
						{/each}
					</TagCode>
					<TagCode name="div" one_line props={['class="swiper-navigation-to-right"']}>R</TagCode>
					<TagCode name="div" one_line props={['class="swiper-navigation-to-left"']}>L</TagCode>
				</TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode name="div" one_line>Default</TagCode>
				<TagCode name="Swiper" props={['navigation={true}']}>
					{#each { length: 12 } as item, i}
						<TagCode name="swiper-slide">
							<TagCode close_self name="img" props={['src="your image url"']}></TagCode>
						</TagCode>
					{/each}
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
			<div>
				<div class="text-center">Custom</div>
				<div class="relative">
					<Swiper {navigation}>
						{#each { length: 12 } as index, i}
							<swiper-slide>
								<img src="/swiper-example-0{(i % 3) + 1}.jpg" alt="" />
							</swiper-slide>
						{/each}
					</Swiper>
					<div class="swiper-navigation-to-right">R</div>
					<div class="swiper-navigation-to-left">L</div>
				</div>
			</div>
			<div>
				<div class="text-center">Default</div>
				<Swiper navigation={true}>
					{#each { length: 12 } as index, i}
						<swiper-slide>
							<img src="/swiper-example-0{(i % 3) + 1}.jpg" alt="" />
						</swiper-slide>
					{/each}
				</Swiper>
			</div>
		</div>
	</div>
</SampleWrapper>

<style global>@reference "tailwindcss";
.swiper-navigation-to-right {
  @apply absolute top-1/2 -translate-y-1/2 z-10 right-4 bg-white w-5 h-5 select-none rounded-full flex items-center justify-center;
}
.swiper-navigation-to-right.swiper-button-disabled {
  @apply cursor-default opacity-50;
}

.swiper-navigation-to-left {
  @apply absolute top-1/2 -translate-y-1/2 z-10 left-4 bg-white w-5 h-5 select-none rounded-full flex items-center justify-center;
}
.swiper-navigation-to-left.swiper-button-disabled {
  @apply cursor-default opacity-50;
}</style>
