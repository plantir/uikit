<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Chat from '$lib/components/Chat/Chat.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import SnippetTagCode from '$lib/DocsComponent/ComponentCode/SnippetTagCode.svelte';
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
			<SnippetTagCode name="header">John Doe</SnippetTagCode>
			<SnippetTagCode name="image">
				<TagCode name="Avatar" props={['shape="circle"', 'size="sm"']}>
					<TagCode name="img" close_self props={['src="/profile-02.webp"', 'alt=""']} />
				</TagCode>
			</SnippetTagCode>
			<TagCode name="div">It was said that you would, destroy the Sith, not join them.</TagCode>
			<SnippetTagCode name="footer">Delivered</SnippetTagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col">
			<Chat start>
				{#snippet header()}
					<span class="text-sm font-medium">John Doe</span>
				{/snippet}
				{#snippet image()}
					<Avatar shape="circle" size="sm">
						<img src="/profile-02.webp" alt="" />
					</Avatar>
				{/snippet}
				<div>It was said that you would, destroy the Sith, not join them.</div>
				{#snippet footer()}
					<div>Delivered</div>
				{/snippet}
			</Chat>
		</div>
	</div>
</SampleWrapper>
