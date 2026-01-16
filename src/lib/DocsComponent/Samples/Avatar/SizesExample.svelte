<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Avatar, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	import Badge from '$lib/components/Badge/Badge.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalSize } from '$lib/utils/El.types.js';
	let activeTab = 'Preview';
	let form: any = {};
	let sizes: GlobalSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Avatar</span> from '{$importDocumentSrc}/Avatar.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="grid grid-cols-4"']}>
			{#each sizes as size}
				<TagCode name="div">
					<TagCode name="Avatar" props={[`size="${size}"`]}>
						<TagCode name="img" props={['src="your image source"']} close_self />
					</TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div class="flex flex-wrap gap-4" slot="preview">
		{#each sizes as size}
			<div>
				<Avatar {size}>
					<img src="/swiper-example-01.jpg" alt="" />
				</Avatar>
			</div>
		{/each}
	</div>
</SampleWrapper>
