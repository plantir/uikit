<script lang="ts">
	import './Skeleton.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Skeleton } from './Skeleton.type.js';
	import El from '../../utils/El.svelte';
	type $$Props = Skeleton;
	let componentName = 'skeleton';
	$: componentClass = {
	};
	$: elClass = ClassMerge({ name: componentName, componentClass });
</script>

<El {componentName} {componentClass} {...$$restProps}></El>
