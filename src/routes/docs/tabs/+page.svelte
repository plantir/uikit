<script>
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	let selected = '2';
</script>

<div class="w-4/12 mx-auto">
	{selected}
	<Tabs bind:selected>
		<TabItem title="Tab 1" value="1"><div class="p-10">Tab 1</div></TabItem>
		<TabItem title="Tab 2" value="2"><div class="p-10">Tab 2</div></TabItem>
		<TabItem title="Tab 3" value="3"><div class="p-10">Tab 3</div></TabItem>
	</Tabs>
	<Tabs bind:selected variant="lift">
		<TabItem title="Tab 1" value="1"><div class="p-10">Tab 1</div></TabItem>
		<TabItem title="Tab 2" value="2"><div class="p-10">Tab 2</div></TabItem>
		<TabItem title="Tab 3" value="3"><div class="p-10">Tab 3</div></TabItem>
	</Tabs>
	<Tabs bind:selected variant="box">
		<TabItem title="Tab 1" value="1"><div class="p-10">Tab 1</div></TabItem>
		<TabItem title="Tab 2" value="2"><div class="p-10">Tab 2</div></TabItem>
		<TabItem title="Tab 3" value="3"><div class="p-10">Tab 3</div></TabItem>
	</Tabs>
	<Tabs class="mt-10" bind:selected variant="lift" size="xs">
		<TabItem title="Tab 1 (xs)" value="1"><div class="p-10">Tab 1 (xs)</div></TabItem>
		<TabItem title="Tab 2 (xs)" value="2"><div class="p-10">Tab 2 (xs)</div></TabItem>
		<TabItem title="Tab 3 (xs)" value="3"><div class="p-10">Tab 3 (xs)</div></TabItem>
	</Tabs>
	<Tabs class="mt-10" bind:selected variant="lift" size="sm">
		<TabItem title="Tab 1 (sm)" value="1"><div class="p-10">Tab 1 (sm)</div></TabItem>
		<TabItem title="Tab 2 (sm)" value="2"><div class="p-10">Tab 2 (sm)</div></TabItem>
		<TabItem title="Tab 3 (sm)" value="3"><div class="p-10">Tab 3 (sm)</div></TabItem>
	</Tabs>
	<Tabs class="mt-10" bind:selected variant="lift" size="md">
		<TabItem title="Tab 1 (md)" value="1"><div class="p-10">Tab 1 (md)</div></TabItem>
		<TabItem title="Tab 2 (md)" value="2"><div class="p-10">Tab 2 (md)</div></TabItem>
		<TabItem title="Tab 3 (md)" value="3"><div class="p-10">Tab 3 (md)</div></TabItem>
	</Tabs>

	<Tabs class="mt-10" bind:selected variant="lift" size="lg">
		<TabItem title="Tab 1 (lg)" value="1"><div class="p-10">Tab 1 (lg)</div></TabItem>
		<TabItem title="Tab 2 (lg)" value="2"><div class="p-10">Tab 2 (lg)</div></TabItem>
		<TabItem title="Tab 3 (lg)" value="3"><div class="p-10">Tab 3 (lg)</div></TabItem>
	</Tabs>
</div>
