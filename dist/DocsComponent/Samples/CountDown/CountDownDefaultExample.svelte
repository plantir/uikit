<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '../../../components/CountDown/CountDown.svelte';
	import moment from 'moment';
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
		<TagCode name="CountDown" props={[`value={moment().add(1, 'day').toDate()}`]}>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<CountDown value={moment().add(1, 'day').toDate()}></CountDown>
		</div>
	</div>
</SampleWrapper>
