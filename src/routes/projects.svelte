<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit"

  export const load: Load = async ({ fetch }) => {
    const req = await fetch("/api/repos")
    const { projects } = await req.json()

    return { props: { projects } }
  }
</script>

<script lang="ts">
  import type { Projects } from "src/types"

  import A from "src/components/markdown/a.svelte"
  import H1 from "src/components/markdown/h1.svelte"
  import H3 from "src/components/markdown/h3.svelte"
  import P from "src/components/markdown/p.svelte"
  import Badge from "src/components/Badge.svelte"

  export let projects: Projects
</script>

<svelte:head>
  <title>Geek's Projects</title>
</svelte:head>

<H1>Projects</H1>
<P>Here are some of the things I've worked on</P>
<P>
  You can also find some smaller experiments on my
  <A href="https://codesandbox.io/u/patheticGeek">CodeSandbox</A>
  {" and "}
  <A href="https://codepen.io/patheticgeek">CodePen</A>
</P>

<P />

{#each projects as project}
  <H3><A href={project.github_url} openInNewTab>{project.name}</A></H3>

  <P>
    <div class="flex">
      {#if project.language}
        <Badge>{project.language}</Badge>
      {/if}

      {#each project.topics as topic}
        <Badge>{topic}</Badge>
      {/each}
    </div>
  </P>

  {#if project.description}
    <P>
      <span class="text-sm">{project.description}</span>
    </P>
  {/if}

  {#if project.website}
    <P>
      <A class="text-sm" href={project.website} openInNewTab>Visit Website »</A>
    </P>
  {/if}

  <P />
{/each}
