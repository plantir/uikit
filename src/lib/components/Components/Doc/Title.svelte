<script lang="ts">
	export let title = '';
	export let id: string;
</script>

<div class="relative">
	<h2>{title}</h2>
	<div {id} class="absolute -top-[80px] invisible title-document">{title}</div>
</div>
