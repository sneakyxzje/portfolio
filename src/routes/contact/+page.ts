export async function load() {
	const post = await import('../../lib/content/contact.md');
	return {
		content: post.default,
		meta: post.metadata
	};
}
