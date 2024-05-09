<script>
	import Icon from "$lib/components/Icon/Icon.svelte";
</script>

<div class="p-6 gap-y-8 flex flex-col justify-center">
	<div class="flex items-center gap-x-1">
		<Icon size="xs" name="AdjustMinor" />
		<Icon size="xs" name="SearchMajor" />
		<Icon size="xs" name="ListMajor" />
		<Icon size="xs" name="ListMinor" />
	</div>
	<div class="flex items-center gap-x-1">
		<Icon size="sm" name="AdjustMinor" />
		<Icon size="sm" name="SearchMajor" />
		<Icon size="sm" name="ListMajor" />
		<Icon size="sm" name="ListMinor" />
	</div>
	<div class="flex items-center gap-x-1">
		<Icon size="md" name="AdjustMinor" />
		<Icon size="md" name="SearchMajor" />
		<Icon size="md" name="ListMajor" />
		<Icon size="md" name="ListMinor" />
	</div>
	<div class="flex items-center gap-x-1">
		<Icon size="lg" name="AdjustMinor" />
		<Icon size="lg" name="SearchMajor" />
		<Icon size="lg" name="ListMajor" />
		<Icon size="lg" name="ListMinor" />			
	</div>

	<div class="flex flex-col items-start gap-y-1">
		<h1 class="text-gray-400 text-4xl">Hello <Icon name="AdjustMinor"/></h1>
		<h1 class="text-red-500 text-3xl">Hello <Icon name="AdjustMinor"/></h1>
		<h1 class="text-green-500 text-2xl">Hello <Icon name="AdjustMinor"/></h1>
		<h1 class="text-blue-500 text-xl">Hello <Icon name="AdjustMinor"/></h1>
	</div>
</div>