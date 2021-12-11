<script lang="ts">
  import Navbar from "./components/Navbar.svelte"
  import { Router, Route } from "svelte-routing"

  import Home from "./pages/Home.svelte"
  import Projects from "./pages/Projects.svelte"
  import Work from "./pages/Work.svelte"
  import Blog from "./pages/Blog.svelte"

  export let url = ""
</script>

<Router {url}>
  <Navbar />

  <main class="w-full max-w-2xl mx-auto py-5 px-5">
    <Route path="/" component={Home} />
    <Route path="work" component={Work} />
    <Route path="projects" component={Projects} />
    <Route path="blog" component={Blog} />
  </main>
</Router>
