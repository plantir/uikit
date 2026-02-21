<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { Avatar } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalColor } from '../../../utils/El.types.js';
	let colors: GlobalColor[] = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Avatar</span> from '{$importDocumentSrc}/Avatar.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex gap-4"']}>
			<TagCode name="Avatar" props={['text']} one_line>D</TagCode>
			{#each colors as color}
				<TagCode name="Avatar" props={['text', `color="${color}"`]} one_line>
					{color.charAt(0).toUpperCase()}
				</TagCode>
			{/each}
		</TagCode>
		<TagCode name="div" props={['class="flex gap-4 mt-4"']}>
			<TagCode name="Avatar" props={['ring']}>
				<TagCode name="img" close_self props={['src="your image source"']}></TagCode></TagCode
			>
			{#each colors as color}
				<TagCode name="Avatar" props={['ring', `color="${color}"`]}>
					<TagCode name="img" close_self props={['src="your image source"']}></TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex gap-4 flex-wrap">
			<Avatar text>D</Avatar>
			{#each colors as color}
				<Avatar text {color}>{color.charAt(0).toUpperCase()}</Avatar>
			{/each}
		</div>
		<div class="flex gap-4 flex-wrap mt-4">
			<Avatar ring>
				<img src="/swiper-example-01.jpg" alt="" />
			</Avatar>
			{#each colors as color}
				<Avatar ring {color}>
					<img src="/swiper-example-01.jpg" alt="" />
				</Avatar>
			{/each}
		</div>
	</div>
</SampleWrapper>
