<script lang="ts">
	import type { AvatarGroup } from './AvatarGroup.type.js';
	import './AvatarGroup.css';
	import El from '../../utils/El.svelte';
	type $$Props = AvatarGroup;
	let componentName = 'avatar-group';

	$: componentClass = {};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
