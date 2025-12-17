<script>
	import '$lib/styles/global.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/organisms/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{@render children()}
</main>

<Footer />
