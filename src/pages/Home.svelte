<script>
  import A from "../components/markdown/a.svelte"

  import H1 from "../components/markdown/h1.svelte"
  import H2 from "../components/markdown/h2.svelte"
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

<H2>You can find me at these places:</H2>

<Ul>
  <Li>
    <A href="mailto:geekpathetic@gmail.com">📨 Email</A>
  </Li>
  <Li>
    <A href="https://github.com/patheticGeek">🧑‍💻 Github</A>
  </Li>
  <Li>
    <A href="https://twitter.com/pathetic_geek">🐦 Twitter</A>
  </Li>
  <Li>
    <A href="https://www.linkedin.com/in/pathetic-geek">💼 LinkedIn</A>
  </Li>
  <Li>
    <A href="https://www.snapchat.com/add/pathetic.geek">👻 Snapchat</A>
  </Li>
</Ul>
