<script>
	import Toggle from '$lib/Toggle.svelte';
</script>

<div><Toggle /></div>

<style>
	div :global(.svelte-toggle > .svelte-toggle--thumb) {
		background-color: whitesmoke;
	}

	div :global(.svelte-toggle > .svelte-toggle--track) {
		background: red;
	}
</style>
