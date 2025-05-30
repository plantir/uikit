<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { Card } from './Card.type.ts';
	import './Card.css';
	type $$Props = Card;
	let componentName = 'card';
	$: componentClass = {};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
