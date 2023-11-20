import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

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
            base: dev ? "" : "",
        },
        // hydrate the <div id="svelte"> element in src/app.html
        //target: "#svelte"
    }
};

export default config;