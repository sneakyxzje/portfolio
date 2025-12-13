export async function load() {
	const post = await import('../../lib/content/about.md');
	return {
		content: post.default,
		meta: post.metadata
	};
}
