<script lang="ts">
	import type { AvatarGroup } from './AvatarGroup.type.js';
	import './AvatarGroup.scss';
	import El from '$lib/utils/El.svelte';
	type $$Props = AvatarGroup;
	let componentName = 'avatar-group';

	$: componentClass = {};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
