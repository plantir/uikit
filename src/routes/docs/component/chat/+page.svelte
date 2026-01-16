<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import BorderExample from '$lib/DocsComponent/Samples/Card/BorderExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Card/ColorsExample.svelte';
	import FullImageExample from '$lib/DocsComponent/Samples/Card/FullImageExample.svelte';
	import SideImageExample from '$lib/DocsComponent/Samples/Card/SideImageExample.svelte';
	import ChatColorsExample from '$lib/DocsComponent/Samples/Chat/ChatColorsExample.svelte';
	import ChatDefaultExample from '$lib/DocsComponent/Samples/Chat/ChatDefaultExample.svelte';
	import ChatProps from '$lib/DocsComponent/Samples/Chat/ChatProps.svelte';
	import ChatSlotsExample from '$lib/DocsComponent/Samples/Chat/ChatSlotsExample.svelte';
	import ChatStartEndExample from '$lib/DocsComponent/Samples/Chat/ChatStartEndExample.svelte';
</script>

<div class="">
	<div class="component-wrapper">
		<h1>Chat</h1>
	</div>
	<ChatProps />
	<Title id="chat" title="Chat" />
	<ChatDefaultExample />
	<Title id="chat-slots" title="Chat Slots" />
	<ChatSlotsExample />
	<Title id="chat-position" title="Chat Position" />
	<ChatStartEndExample />
	<Title id="chat-colors" title="Chat Colors" />
	<ChatColorsExample />
	<div class="py-10"></div>
</div>
