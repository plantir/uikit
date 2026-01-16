<script lang="ts">
	import type { Chat, ChatColor } from './Chat.type.js';
	import './Chat.css';
	import El from '$lib/utils/El.svelte';
	import { fade } from 'svelte/transition';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	type $$Props = Chat;
	let componentName = 'chat';
	export let start: boolean = false;
	export let end: boolean = false;
	export let color: ChatColor = undefined;
	$: componentClass = {
		start,
		end
	};
	$: bubbleClass = ClassMerge({
		name: `${componentName}-bubble`,
		componentClass: {
			primary: color == 'primary',
			secondary: color == 'secondary',
			accent: color == 'accent',
			success: color == 'success',
			info: color == 'info',
			error: color == 'error',
			warning: color == 'warning',
			neutral: color == 'neutral'
		}
	});
	$: footerClass = ClassMerge({
		name: `${componentName}-footer`
	});
	$: imageClass = ClassMerge({
		name: `${componentName}-image`
	});
	$: headerClass = ClassMerge({
		name: `${componentName}-header`
	});
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<div class={headerClass}>
		<slot name="header" />
	</div>
	<div class={imageClass}>
		<slot name="image" />
	</div>
	<div class={bubbleClass}>
		<slot />
	</div>

	<div class={footerClass}>
		<slot name="footer" />
	</div>
</El>
