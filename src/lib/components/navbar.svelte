<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	const navItems = [
		{ id: '1', label: '01 Home', path: '/' },
		{ id: '2', label: '02 Works', path: '/works' },
		{ id: '3', label: '03 About', path: '/about' },
		{ id: '4', label: '04 Contact', path: '/contact' }
	];

	let currentPath = $derived(page.url.pathname);

	function handleNav(path: string) {
		goto(path);
	}
</script>

<nav class="fixed top-0 left-0 z-50 w-full px-4 py-4 mix-blend-difference md:px-8">
	<div class="mx-auto flex w-full max-w-screen">
		<form class="flex gap-[4ch] text-[0.75rem] tracking-[0.2em] text-[#888] uppercase">
			{#each navItems as item (item.id)}
				<div class="group relative">
					<input
						type="radio"
						name="nav"
						id={item.id}
						value={item.path}
						checked={currentPath === item.path}
						onclick={() => handleNav(item.path)}
						class="peer nav-input sr-only"
					/>

					<label for={item.id} class="nav-label relative block cursor-pointer overflow-hidden px-1">
						<div
							class="bg-scanlines pointer-events-none absolute inset-0 z-0
									h-full w-full
									opacity-0 transition-opacity duration-75 group-hover:opacity-100"
						></div>

						<div
							class="bg-solid pointer-events-none absolute inset-0 z-0
									h-full w-full
									bg-[#ebebeb] opacity-0"
						></div>

						<span class="nav-text relative z-10 transition-colors delay-75 duration-0">
							{item.label}
						</span>
					</label>
				</div>
			{/each}
		</form>
	</div>
</nav>

<style>
	.nav-input:checked + .nav-label .bg-scanlines {
		opacity: 0 !important;
	}

	.nav-input:checked + .nav-label .bg-solid {
		opacity: 1;
		animation: step-flash 0.3s steps(4, end) forwards;
	}

	.nav-input:checked + .nav-label .nav-text {
		color: #0f0f11;
		font-weight: bold;
	}

	@keyframes step-flash {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		75% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
</style>
