import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			appDir: "app",
			strict: false,
			pages: "docs/",
			assets: "docs/",
		}),
	},
	preprocess: vitePreprocess()
};

export default config;