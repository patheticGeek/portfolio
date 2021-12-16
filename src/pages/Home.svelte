<script>
  import A from "../components/markdown/a.svelte"

  import H1 from "../components/markdown/h1.svelte"
  import H2 from "../components/markdown/h2.svelte"
  import Li from "../components/markdown/li.svelte"
  import P from "../components/markdown/p.svelte"
  import Ul from "../components/markdown/ul.svelte"

  const links = [
    { label: "📨 Email", href: "mailto:geekpathetic@gmail.com" },
    { label: "🧑‍💻 Github", href: "https://github.com/patheticGeek" },
    { label: "🐦 Twitter", href: "https://twitter.com/pathetic_geek" },
    { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/pathetic-geek" },
    {
      label: "👻 Snapchat",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ]
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

<H2>You can find me at these places:</H2>

<Ul>
  {#each links as { label, href }}
    <Li>
      <A {href}>{label}</A>
    </Li>
  {/each}
</Ul>
