<script>
  import { HOME_LINKS } from "src/consts"

  import A from "src/components/markdown/a.svelte"
  import H1 from "src/components/markdown/h1.svelte"
  import H3 from "src/components/markdown/h3.svelte"
  import Li from "src/components/markdown/li.svelte"
  import P from "src/components/markdown/p.svelte"
  import Ul from "src/components/markdown/ul.svelte"

  const title = "Geek's Portfolio"
  const desc = "Geek bragging about himself"
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
  <A href="https://modfy.video">Modfy</A>
</P>

<P>
  Checkout some of
  <A href="/projects">my projects</A>
  or
  <A href="/blog">my writing</A>
</P>

<H3>You can find me at these places:</H3>

<Ul>
  {#each HOME_LINKS as { label, href }}
    <Li>
      <A {href} openInNewTab>{label}</A>
    </Li>
  {/each}
</Ul>
