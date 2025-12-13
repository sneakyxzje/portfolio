<script lang="ts">
	import { page } from '$app/state';
	let { children, data } = $props();

	function isActive(slug: string) {
		return page.url.pathname.includes(`/works/${slug}`);
	}
</script>

<div class="flex h-full w-full flex-col">
	<h1 class="text-2xl font-medium">02 Works</h1>
	<p class="text-sm text-[#888]">
		A collection of projects that showcase my approach to problem-solving.
	</p>

	<div
		class="mt-4 flex h-[80vh] min-h-[400px] shrink-0 flex-col overflow-hidden border border-[#333] lg:flex-row"
	>
		<ul
			class="custom-scrollbar flex overflow-x-auto border-b border-[#333]
                   lg:block lg:w-64 lg:overflow-y-auto lg:border-r lg:border-b-0 lg:pr-1"
		>
			{#each data.works as work}
				{@const active = isActive(work.slug)}
				<li>
					<a
						href="/works/{work.slug}"
						class="group relative block w-full border-b border-[#333] px-4 py-3 text-left transition-colors last:border-0"
					>
						<div
							class="bg-scanlines absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100
                                   {active ? '!opacity-0' : ''}"
						></div>

						<div
							class="absolute inset-0 bg-[#ebebeb] opacity-0
                                   {active ? 'animate-step-flash opacity-100' : ''}"
						></div>

						<span
							class="relative z-10 font-mono text-sm tracking-wide uppercase transition-colors
                                   {active
								? 'font-bold text-[#0f0f11]' /* Active: Chữ đen nền trắng */
								: 'text-[#888] group-hover:text-[#ebebeb]'}"
						>
							{work.title}
						</span>
					</a>
				</li>
			{/each}
		</ul>

		<div class="relative flex-1 overflow-hidden bg-[#0f0f11]">
			<article class="custom-scrollbar h-full w-full overflow-auto p-6">
				{@render children()}
			</article>

			<div
				class="animate-slide-down-slow bg-base pointer-events-none absolute inset-y-0 right-1 left-0"
			></div>
		</div>
	</div>
</div>
