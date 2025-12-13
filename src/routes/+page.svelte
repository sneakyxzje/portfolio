<script lang="ts">
	import { processCommand, type CommandResult } from '$lib/terminal.svelte';
	import { onMount } from 'svelte';
	let input = $state('');

	let history = $state<CommandResult[]>([]);
	const submit = (e: Event) => {
		e.preventDefault();
		if (!input.trim()) return;
		if (input === 'clear') {
			history = [];
			input = '';
			return;
		}
		processCommand(input);
		history.push({ type: 'user_input', content: input });
		const result = processCommand(input);
		if (result) history.push(result);
		input = '';
	};
</script>

<label class="flex w-full flex-1 cursor-text flex-col font-mono text-[15px] text-[#ebebeb]">
	<div class="mb-2 flex flex-col gap-1">
		{#each history as item}
			{#if item.type === 'user_input'}
				<div class="flex w-full items-start">
					<span class="mr-3 min-w-[1ch] font-bold select-none">$</span>
					<span class="text-gray-500">{item.content}</span>
				</div>
			{:else}
				<div class="flex w-full items-start">
					<span class="mr-3 min-w-[1ch] text-gray-600 select-none">&gt;</span>
					<div class="flex-1">
						{#if item.type === 'text'}
							<div class="text-[#ebebeb]">{item.content}</div>
						{:else if item.type === 'help_list'}
							<div class="flex flex-col gap-1">
								<div class="mb-1">The sneaky's portfolio website and shell commands.</div>
								<div>Available commands:</div>
								{#each item.content as helpItem}
									<div class="grid grid-cols-[120px_1fr] gap-4">
										<div class="font-bold">{helpItem.cmd}</div>
										<div class="text-[#888]">{helpItem.desc}</div>
									</div>
								{/each}
							</div>
						{:else if item.type === 'error'}
							<div>{item.content}</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>

	<form onsubmit={submit} class="flex w-full items-center">
		<span class="mr-3 font-bold select-none">$</span>

		<input
			bind:value={input}
			type="text"
			class="w-full min-w-0 flex-1 border-none bg-transparent p-0
                   text-[#ebebeb] text-[inherit] placeholder-gray-800
                   focus:ring-0 focus:outline-none"
			spellcheck="false"
			placeholder="Use 'help' to see available commands..."
			autocomplete="off"
		/>
	</form>
</label>
