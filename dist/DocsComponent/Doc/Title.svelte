<script lang="ts">
	export let title = '';
	export let id: string;
</script>

<div class="relative my-4">
	<div class="flex items-center gap-2">
		<a
			class="bg-base-100 hover:bg-primary/10 text-base-content/50 hover:text-base-content border-primary/5 hover:border-primary/10 hover:shadow-base-200 inline-grid size-6 place-content-center rounded-sm border hover:shadow-sm"
			href={`#${id}`}
		>
			<svg
				class="size-3"
				fill="currentColor"
				width="12"
				height="12"
				viewBox="0 0 256 256"
				id="Flat"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"
				></path></svg
			></a
		>
		<div class="text-lg font-semibold">{title}</div>
	</div>
	<div {id} class="absolute -top-[80px] invisible title-document">{title}</div>
</div>
