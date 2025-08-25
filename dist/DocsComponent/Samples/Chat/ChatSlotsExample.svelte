<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Chat from '../../../components/Chat/Chat.svelte';
	import Avatar from '../../../components/Avatar/Avatar.svelte';
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
			<TagCode name="div" props={['slot="header"']}>John Doe</TagCode>
			<TagCode name="div" props={['slot="image"']}>
				<TagCode name="Avatar" props={['shape="circle"', 'size="sm"']}>
					<TagCode name="img" close_self props={['src="/profile-02.webp"', 'alt=""']} />
				</TagCode>
			</TagCode>
			<TagCode name="div">It was said that you would, destroy the Sith, not join them.</TagCode>
			<TagCode name="div" props={['slot="footer"']}>Delivered</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col">
			<Chat start>
				<div slot="header">
					<span class="text-sm font-medium">John Doe</span>
				</div>
				<div slot="image">
					<Avatar shape="circle" size="sm">
						<img src="/profile-02.webp" alt="" />
					</Avatar>
				</div>
				<div>It was said that you would, destroy the Sith, not join them.</div>
				<div slot="footer">Delivered</div>
			</Chat>
		</div>
	</div>
</SampleWrapper>
