export type Works = {
	slug: string;
	title: string;
	description: string;
	order: number;
};

export async function getWorks() {
	const paths = import.meta.glob('/src/lib/content/works/*.md', { eager: true });
	const works = Object.entries(paths).map(([path, file]: any) => {
		const slug = path.split('/').pop()?.replace('.md', '');
		return {
			slug,
			title: file.metadata.title,
			description: file.metadata.description,
			order: file.metadata.order ?? 999
		};
	});

	return works.sort((a, b) => a.order - b.order);
}
