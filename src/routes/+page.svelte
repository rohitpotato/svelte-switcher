<script>
	import Toggle from '$lib/Toggle.svelte';
</script>

<div>
	<Toggle>
		<span slot="checked-component"> Tsadasd </span>
		<span slot="unchecked-component"> X </span>
	</Toggle>
</div>

<style>
	div :global(.svelte-toggle > .svelte-toggle--thumb) {
		background-color: whitesmoke;
	}

	div :global(.svelte-toggle > .svelte-toggle--track) {
		background: red;
		width: 54px;
	}

	div :global(.svelte-toggle .svelte-toggle--track-unchecked) {
		display: flex;
		align-items: center;
		justify-items: center;
	}
	div :global(.svelte-toggle .svelte-toggle--track-checked) {
		display: flex;
		align-items: center;
		justify-items: center;
		left: 30px;
	}
</style>
