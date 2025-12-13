import { defineMDSveXConfig } from 'mdsvex';
import rehypeShiki from '@shikijs/rehype';

const mdsvexConfig = defineMDSveXConfig({
	extensions: ['.md'],

	rehypePlugins: [
		[
			rehypeShiki,
			{
				theme: 'poimandres'
			}
		]
	]
});

export default mdsvexConfig;
