import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"


/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
			strict: false
        }),
        paths: {
            // change below to your repo name
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        },
    }
};

export default config;