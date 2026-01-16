<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Chat from '$lib/components/Chat/Chat.svelte';
	import CountDown from '$lib/components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import type { CountDownType } from '$lib/components/CountDown/CountDown.type.js';
	import Badge from '$lib/components/Badge/Badge.svelte';
	let types: CountDownType[] = ['colons', 'clock', 'box', 'labels', 'labels-under', 'box-label'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">CountDown</span> from '{$importDocumentSrc}/CountDown.svelte';
			import <span class="text-green-600">moment</span> from 'moment';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each types as type}
			<TagCode
				name="CountDown"
				props={[`type="${type}"`, `value={moment().add(1, 'day').toDate()}`]}
			></TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col gap-3 items-center justify-center">
			{#each types as type}
				<div class="flex items-center gap-6">
					<div>
						<Badge color="primary">
							{type}
						</Badge>
					</div>
					<div>
						<CountDown value={moment().add(1, 'day').toDate()} {type}></CountDown>
					</div>
				</div>
			{/each}
		</div>
	</div>
</SampleWrapper>
