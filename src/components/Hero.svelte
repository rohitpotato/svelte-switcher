<script>
	import Toggle from '$lib/Toggle.svelte';
	import { afterUpdate } from 'svelte';
	let toggle = false;
</script>

<div class="flex items-center justify-center mt-24 flex-col text-white">
	<h1 class="font-semibold text-5xl">Svelte Toggle</h1>
	<p class="my-3">A fully accessible, customisable toggle component for svelte apps</p>

	<div class="mt-4"><Toggle value={'a'} /></div>

	<div class="mt-10 border-2">
		<h1 class="text-center my-8 text-2xl font-semibold">Class heirarchy</h1>
		<img alt="class-heirarchy-toggle" width="1000px" src="/svelte-toggle.svg" />
	</div>
</div>

<style>
	div :global(.svelte-toggle .svelte-toggle--track) {
		width: 300px;
		height: 150px;
		border-radius: 90px;
	}
	div :global(.svelte-toggle .svelte-toggle--thumb) {
		height: 148px;
		width: 148px;
	}
	div :global(.svelte-toggle.svelte-toggle--checked .svelte-toggle--thumb) {
		left: 152px;
	}

	div :global(.svelte-toggle:hover:not(.svelte-toggle--disabled) .svelte-toggle--track) {
		background-color: #4d4d4d !important;
	}

	div
		:global(.svelte-toggle.svelte-toggle--checked:hover:not(.svelte-toggle--disabled)
			.svelte-toggle--track) {
		background-color: #128d15 !important;
	}
</style>
