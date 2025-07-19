<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Chat from '$lib/components/Chat/Chat.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Chat</span> from '{$importDocumentSrc}/Chat.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Chat" props={['start']}>
			<TagCode name="div" props={['slot="header"']}>
				<TagCode name="span" props={['class="text-sm font-medium"']}>John Doe</TagCode>
				<TagCode name="time" props={['class="text-xs opacity-50"']}>12:45</TagCode>
			</TagCode>
			<TagCode name="div" props={['slot="image"']}>
				<TagCode name="Avatar" props={['shape="circle"', 'size="sm"']}>
					<TagCode name="img" close_self props={['src="your url image"', 'alt=""']} />
				</TagCode>
			</TagCode>
			<TagCode name="div">It was said that you would, destroy the Sith, not join them.</TagCode>
			<TagCode name="div" props={['slot="footer"']}>Delivered</TagCode>
		</TagCode>
		<TagCode name="Chat" props={['end']}>
			<TagCode name="div" props={['slot="header"']}>
				<TagCode name="span" props={['class="text-sm font-medium"']}>John Doe</TagCode>
				<TagCode name="time" props={['class="text-xs opacity-50"']}>12:46</TagCode>
			</TagCode>
			<TagCode name="div" props={['slot="image"']}>
				<TagCode name="Avatar" props={['shape="circle"', 'size="sm"']}>
					<TagCode name="img" close_self props={['src="your url image"', 'alt=""']} />
				</TagCode>
			</TagCode>
			<TagCode name="div">It was said that you would, destroy the Sith, not join them.</TagCode>
			<TagCode name="div" props={['slot="footer"']}>Seen at 12:46</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col">
			<Chat start>
				<div slot="header">
					<span class="text-sm font-medium">John Doe</span>
					<time class="text-xs opacity-50">12:45</time>
				</div>
				<div slot="image">
					<Avatar shape="circle" size="sm">
						<img src="/profile-01.webp" alt="" />
					</Avatar>
				</div>
				<div>You were the Chosen One!</div>
				<div slot="footer">Delivered</div>
			</Chat>
			<Chat end>
				<div slot="header">
					<span class="text-sm font-medium">John Doe</span>
					<time class="text-xs opacity-50">12:46</time>
				</div>
				<div slot="image">
					<Avatar shape="circle" size="sm">
						<img src="/profile-02.webp" alt="" />
					</Avatar>
				</div>
				<div>I hate you!</div>
				<div slot="footer">Seen at 12:46</div>
			</Chat>
		</div>
	</div>
</SampleWrapper>
