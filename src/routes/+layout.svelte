<script lang="ts">
	import './layout.css';
	let { children } = $props();

	import '@fontsource/commit-mono';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { goto } from '$app/navigation';
	const navMap: Record<string, string> = {
		'1': '/',
		'2': '/works',
		'3': '/about',
		'4': '/contact'
	};
	function handleKeydown(event: KeyboardEvent) {
		const target = event.target as HTMLElement;
		if (['INPUT', 'TEXTAREA'].includes(target.tagName)) return;
		const path = navMap[event.key];
		if (path) {
			goto(path);
		}
	}
</script>

<svelte:head><link rel="icon" /></svelte:head>
<svelte:window onkeydown={handleKeydown} />
<div class="flex min-h-screen w-full flex-col">
	<Navbar />
	<main class="flex w-full flex-1 flex-col px-4 pt-[50px] pb-4 md:px-8">
		<div class="mx-auto flex h-full w-full max-w-[1920px] flex-1 flex-col">
			{@render children()}
		</div>
	</main>

	<Footer />
</div>
