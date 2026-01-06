<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { Avatar } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Avatar</span> from '{$importDocumentSrc}/Avatar.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Avatar" close_self />
		<TagCode name="Avatar">
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
		<TagCode name="Avatar" props={['shape="circle"']}>
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
		<TagCode name="Avatar" props={['shape="rounded"']}>
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Avatar />
		<Avatar>
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
		<Avatar shape="circle">
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
		<Avatar shape="rounded">
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
	</div>
</SampleWrapper>
