<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Chat from '../../../components/Chat/Chat.svelte';
	import CountDown from '../../../components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import type { CountDownColors, CountDownType } from '../../../components/CountDown/CountDown.type.js';
	import Badge from '../../../components/Badge/Badge.svelte';
	let colors: CountDownColors[] = [
		'primary',
		'warning',
		'secondary',
		'info',
		'error',
		'success',
		'neutral',
		'accent'
	];
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
		{#each colors as color}
			<TagCode
				name="CountDown"
				props={[`color="${color}"`, `value={moment().add(1, 'day').toDate()}`, `type="box"`]}
			></TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-wrap gap-3 items-center justify-center">
			{#each colors as color}
				<div>
					<CountDown {color} value={moment().add(1, 'day').toDate()} type="box"></CountDown>
				</div>
			{/each}
		</div>
	</div>
</SampleWrapper>
