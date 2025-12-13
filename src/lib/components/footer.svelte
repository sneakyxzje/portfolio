<footer class="shrink-0 px-4 py-5 md:px-8">
	<div class="mx-auto flex w-full items-center justify-between text-xs">
		<div class="flex items-center gap-3 text-[#666]">
			<div class="flex gap-1">
				{#each ['1', '2', '3'] as number}
					<div
						class="flex h-5 w-5 items-center justify-center rounded-[2px] border border-b-2 border-[#333] bg-[#1a1a1a] font-mono text-[10px] text-[#ebebeb]"
					>
						{number}
					</div>
				{/each}
			</div>
			<span class="hidden sm:inline">to navigate</span>
		</div>

		<div class="text-[#666]">© 2025 Ngo Tuan Dat</div>
	</div>
</footer>
