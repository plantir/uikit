<script lang="ts">
	import './Skeleton.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Skeleton } from './Skeleton.type.js';
	import El from '../../utils/El.svelte';

	let {
		...others
	}: Skeleton = $props();

	let componentName = 'skeleton';
	let componentClass = $derived({});
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
</script>

<El {componentName} {componentClass} {...others}></El>
