<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Chat from '../../../components/Chat/Chat.svelte';
	import CountDown from '../../../components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import type { CountDownSize, CountDownType } from '../../../components/CountDown/CountDown.type.js';
	import Badge from '../../../components/Badge/Badge.svelte';
	let sizes: CountDownSize[] = ['xs', 'sm', 'md', 'lg'];
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
		{#each sizes as size}
			<TagCode
				name="CountDown"
				props={[`size="${size}"`, `value={moment().add(1, 'day').toDate()}`]}
			></TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col gap-3 items-center justify-center">
			{#each sizes as size}
				<div class="flex items-center gap-6">
					<div>
						<Badge color="primary">
							{size}
						</Badge>
					</div>
					<div>
						<CountDown value={moment().add(1, 'day').toDate()} {size}></CountDown>
					</div>
				</div>
			{/each}
		</div>
	</div>
</SampleWrapper>
