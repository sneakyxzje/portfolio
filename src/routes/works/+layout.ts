import { getWorks } from '$lib/work';

export async function load() {
	const works = await getWorks();
	return { works };
}
