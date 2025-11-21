<script lang="ts">
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Skeleton } from './Skeleton.type.js';
	import El from '$lib/utils/El.svelte';
	type $$Props = Skeleton;
	let componentName = 'skeleton';
	$: componentClass = {
	};
	$: elClass = ClassMerge({ name: componentName, componentClass });
</script>

<El {componentName} {componentClass} {...$$restProps}></El>
