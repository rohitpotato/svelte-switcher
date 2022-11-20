<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Examples from '../components/Examples/Examples.svelte';

	let toggleStatus = false;
</script>

<main class="h-screen w-full bg-black">
	<nav>
		<Navbar />
	</nav>
	<main>
		<Hero />
		<Examples />
	</main>
</main>

<style>
	:global(body) {
		background: black;
		height: 100vh;
	}
</style>
