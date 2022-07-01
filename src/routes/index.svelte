<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit"

  export const load: Load = async ({ fetch }) => {
    const req = await fetch("/api/repos")
    const { projects } = await req.json()

    return { props: { projects }, maxage: 240 }
  }
</script>

<script lang="ts">
  import { HOME_LINKS } from "src/consts"

  import A from "src/components/markdown/a.svelte"
  import H1 from "src/components/markdown/h1.svelte"
  import H3 from "src/components/markdown/h3.svelte"
  import Li from "src/components/markdown/li.svelte"
  import P from "src/components/markdown/p.svelte"
  import Ul from "src/components/markdown/ul.svelte"
  import type { Projects } from "src/types"
  import H2 from "src/components/markdown/h2.svelte"

  const title = "Geek's Portfolio"
  const desc = "Geek bragging about himself"

  export let projects: Projects
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={desc} />
</svelte:head>

<H1>Hey there 👋</H1>

<P>
  People usually call me Geek, and I'm currently breaking things at
  <A href="https://modfy.video">Modfy</A>. Previously worked at
  <A href="https://devsnest.com">Devsnest</A>.
</P>

<H2>Checkout some of my side projects:</H2>

<Ul>
  {#each projects.slice(0, 5) as { name, website }}
    <Li>
      <A
        href={website}
        openInNewTab
        class="no-underline hover:underline underline-offset-2"
      >
        {name}
      </A>
    </Li>
  {/each}
  <Li>
    <A href="/projects" class="no-underline hover:underline underline-offset-2">
      See more &rarr;
    </A>
  </Li>
</Ul>

<P />

<H3>Find me at:</H3>

<Ul>
  {#each HOME_LINKS as { label, href }}
    <Li>
      <A {href} openInNewTab class="underline-offset-1">{label}</A>
    </Li>
  {/each}
</Ul>
