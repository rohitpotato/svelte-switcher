<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Examples from '../components/Examples/Examples.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let toggleStatus = false;
</script>

<main class="h-screen w-full bg-black">
	<nav>
		<Navbar />
	</nav>
	<main>
		<Hero />
		<Examples examples={data.body} />
	</main>
</main>

<style>
	:global(body) {
		background: black;
		height: 100vh;
	}
</style>
