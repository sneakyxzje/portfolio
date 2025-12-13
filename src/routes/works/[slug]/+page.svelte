<script lang="ts">
	let { data } = $props();
</script>

<div>
	<header class="mb-8 border-b border-[#333] pb-6">
		<h1 class="mb-2 text-4xl font-bold">{data.meta.title}</h1>
		<p>{data.meta.description}</p>
	</header>

	<article class="prose max-w-none font-mono text-[13.5px] prose-invert prose-pre:bg-[#1a1a1a]">
		<data.content />
	</article>
</div>
