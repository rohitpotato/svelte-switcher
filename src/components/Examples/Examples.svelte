<script>
	import Toggle from '$lib/Toggle.svelte';
</script>

<div>
	<div class="text-white text-opacity-75 flex flex-col items-center justify-center mt-56">
		<h1 class="text-5xl">Usage and Examples</h1>
		<div>
			<div class="px-4 py-10 my-8 flex gap-4 items-center">
				<Toggle />
				<h1>Normal usage</h1>
			</div>
			<pre class="border text-center text-white bg-gray-800">
			{`<Toggle 
				id='theme-toggle' 
				name='svelte-theme-toggle' 
			  />`}
			</pre>
		</div>
	</div>
</div>
