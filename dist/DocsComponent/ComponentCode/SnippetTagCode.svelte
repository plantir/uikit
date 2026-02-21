<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		name = '',
		props = [],
		children
	}: {
		name: string;
		props?: string[];
		children: Snippet;
	} = $props();
</script>

<span>
	{'{#snippet '}<span class="text-green-600">{name}</span>({props.join(',')}){'}'}
	<br />
	<div class="pl-4">
		<slot />
	</div>
	{'{/snippet}'}
</span>
<br />
