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
	let form: any = {};
	let pagination = {
		type: 'progressbar'
	};
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Swiper from '{$importDocumentSrc}/Swiper.svelte';
				let pagination = {'{'}
					type: 'progressbar'
				{'}'};
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="grid grid-cols-2 gap-10"']}>
			<TagCode name="div">
				<TagCode name="div" one_line>Custom</TagCode>
				<TagCode name="Swiper" props={['{pagination}']}>
					{#each { length: 12 } as item, i}
						<TagCode name="swiper-slide">
							<TagCode close_self name="img" props={['src="your image url"']}></TagCode>
						</TagCode>
					{/each}
				</TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode name="div" one_line>Default</TagCode>
				<TagCode name="Swiper" props={['pagination={true}']}>
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
					<Swiper {pagination}>
						{#each { length: 12 } as index, i}
							<swiper-slide>
								<img src="/swiper-example-0{(i % 3) + 1}.jpg" alt="" />
							</swiper-slide>
						{/each}
					</Swiper>
					<div class="swiper-pagination-custom"></div>
				</div>
			</div>
			<div>
				<div class="text-center">Default</div>
				<Swiper pagination={true}>
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

<style lang="scss" global>
	.swiper-navigation-to-right {
		@apply absolute top-1/2 -translate-y-1/2 z-10 right-4 bg-white w-5 h-5 select-none rounded-full flex items-center justify-center;
		&.swiper-button-disabled {
			@apply cursor-default opacity-50;
		}
	}
	.swiper-navigation-to-left {
		@apply absolute top-1/2 -translate-y-1/2 z-10 left-4 bg-white w-5 h-5 select-none rounded-full flex items-center justify-center;
		&.swiper-button-disabled {
			@apply cursor-default opacity-50;
		}
	}
</style>
