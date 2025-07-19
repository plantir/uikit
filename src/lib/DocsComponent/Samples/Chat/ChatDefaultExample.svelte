<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Chat from '$lib/components/Chat/Chat.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Chat</span> from '{$importDocumentSrc}/Chat.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="chat">
			<TagCode name="div">It was said that you would, destroy the Sith, not join them.</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col">
			<Chat>
				<div>It was said that you would, destroy the Sith, not join them.</div>
			</Chat>
			<!-- <Chat end>
				<div slot="header">
					<span class="text-sm font-medium">John Doe</span>
				</div>
				<div slot="image">
					<Avatar shape="circle">
						<img src="/profile-02.webp" alt="" />
					</Avatar>
				</div>
				<div>It was said that you would, destroy the Sith, not join them.</div>
			</Chat> -->
		</div>
	</div>
</SampleWrapper>
