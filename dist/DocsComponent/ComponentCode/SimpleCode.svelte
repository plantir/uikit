<script lang="ts"></script>

<div
	class="code-preview bg-base-100 relative flex min-h-[6rem] max-w-4xl min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 xl:py-10  custom-bg"
>
	<slot />
</div>

<style>.custom-bg {
  box-shadow: 0 0 0 1px var(--color-base-100) inset;
  background-image: repeating-linear-gradient(-45deg, var(--color-base-100), var(--color-base-100) 13px, var(--color-base-200) 13px, var(--color-base-200) 14px);
  background-size: 40px 40px;
}</style>
