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
	let activeTab = 'javascript';
	let form: any = {};
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Swiper from '{$importDocumentSrc}/Swiper.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="div" props={['class="w-460px mx-auto"']}>
				<TagCode name="Swiper" props={['spaceBetween="20"','slidesPerView="3"']}>
					{#each { length: 12 } as item, i}
						<TagCode name="swiper-slide">
							<TagCode close_self name="img" props={['src="your image url"']}></TagCode>
						</TagCode>
					{/each}
				</TagCode>
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="w-[460px] mx-auto">
				<Swiper spaceBetween="20" slidesPerView="3">
					{#each { length: 12 } as index, i}
						<swiper-slide>
							<img src="/swiper-example-0{(i % 3) + 1}.jpg" alt="" />
						</swiper-slide>
					{/each}
				</Swiper>
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
