<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	let activeTab = 'javascript';
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript"></TabItem>
	<TabItem title="Html" value="html"></TabItem>
	<TabItem title="Simple" value="simple"></TabItem>
</Tabs>
{#if activeTab == 'javascript'}
	<ShowCode language="javascript">
		<pre>
            <ScriptCode>
                import Tabs from '{$importDocumentSrc}/Tabs.svelte';
                import TabItem from '{$importDocumentSrc}/TabItem.svelte';
            </ScriptCode>
        </pre>
	</ShowCode>
{:else if activeTab == 'html'}
	<ShowCode language="svelte">
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"', 'color="primary']}
			>
			<TagCode name="TabItem" props={['value="part1"', 'title="primary"']}>
				
				content in part 1
				
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="primary"']}>
				
				content in part 2
				
			</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"', 'color="secondary']}
			>
			<TagCode name="TabItem" props={['value="part1"', 'title="secondary"']}>
				
				content in part 1
				
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="secondary"']}>
				
				content in part 2
				
			</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"', 'color="accent']}
			>
			<TagCode name="TabItem" props={['value="part1"', 'title="accent"']}>
				
				content in part 1
				
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="accent"']}>
				
				content in part 2
				
			</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"', 'color="error']}
			>
			<TagCode name="TabItem" props={['value="part1"', 'title="error"']}>
				
				content in part 1
				
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="error"']}>
				
				content in part 2
				
			</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"', 'color="info']}
			>
			<TagCode name="TabItem" props={['value="part1"', 'title="info"']}>
				
				content in part 1
				
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="info"']}>
				
				content in part 2
				
			</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"', 'color="natural']}
			>
			<TagCode name="TabItem" props={['value="part1"', 'title="natural"']}>
				
				content in part 1
				
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="natural"']}>
				
				content in part 2
				
			</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"', 'color="success']}
			>
			<TagCode name="TabItem" props={['value="part1"', 'title="success"']}>
				
				content in part 1
				
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="success"']}>
				
				content in part 2
				
			</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"', 'color="warning']}
			>
			<TagCode name="TabItem" props={['value="part1"', 'title="warning"']}>
				
				content in part 1
				
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="warning"']}>
				
				content in part 2
				
			</TagCode>
		</TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<div class="flex flex-wrap gap-4">
			<Tabs selected="part1" color="primary" variant="box">
				<TabItem value="part1" title="primary">content in part 1</TabItem>
				<TabItem value="part2" title="primary">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" color="secondary" variant="box">
				<TabItem value="part1" title="secondary">content in part 1</TabItem>
				<TabItem value="part2" title="secondary">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" color="accent" variant="box">
				<TabItem value="part1" title="accent">content in part 1</TabItem>
				<TabItem value="part2" title="accent">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" color="error" variant="box">
				<TabItem value="part1" title="error">content in part 1</TabItem>
				<TabItem value="part2" title="error">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" color="info" variant="box">
				<TabItem value="part1" title="info">content in part 1</TabItem>
				<TabItem value="part2" title="info">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" color="natural" variant="box">
				<TabItem value="part1" title="natural">content in part 1</TabItem>
				<TabItem value="part2" title="natural">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" color="success" variant="box">
				<TabItem value="part1" title="success">content in part 1</TabItem>
				<TabItem value="part2" title="success">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" color="warning" variant="box">
				<TabItem value="part1" title="warning">content in part 1</TabItem>
				<TabItem value="part2" title="warning">content in part 2</TabItem>
			</Tabs>
		</div>
	</SimpleCode>
{/if}
