// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '*.md' {
	import { SvelteComponent } from 'svelte';

	// Default export là cái nội dung bài viết (Component Svelte)
	export default class Comp extends SvelteComponent {}

	// Export metadata là cái frontmatter (title, date...)
	export const metadata: Record<string, any>;
}
export {};
