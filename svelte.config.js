import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import tsconfigPaths from "vite-tsconfig-paths"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      plugins: [tsconfigPaths()]
    }
  }
}

export default config
