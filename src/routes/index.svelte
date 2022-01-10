<script>
  import { HOME_LINKS } from "../consts"

  import A from "../components/markdown/a.svelte"
  import H1 from "../components/markdown/h1.svelte"
  import H3 from "../components/markdown/h3.svelte"
  import Li from "../components/markdown/li.svelte"
  import P from "../components/markdown/p.svelte"
  import Ul from "../components/markdown/ul.svelte"
</script>

<H1>Hey there 👋</H1>

<P>
  People usually call me Geek, and I'm currently breaking things at
  <A href="https://modfy.video">Modfy</A>
</P>

<P>
  Checkout some of
  <A href="/projects">my projects</A>
  or
  <A href="/writing">my writing</A>
</P>

<H3>You can find me at these places:</H3>

<Ul>
  {#each HOME_LINKS as { label, href }}
    <Li>
      <A {href} openInNewTab>{label}</A>
    </Li>
  {/each}
</Ul>
