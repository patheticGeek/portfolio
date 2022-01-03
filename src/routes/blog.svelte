<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit"

  export const load: Load = async ({ fetch }) => {
    // const req = await fetch("/api/blog")
    // const { projects } = await req.json()
    return { props: {} }
  }
</script>

<script lang="ts">
  import H1 from "../components/markdown/h1.svelte"
</script>

<svelte:head>
  <title>Geek's Blog</title>
</svelte:head>

<H1>Some of my writings</H1>
