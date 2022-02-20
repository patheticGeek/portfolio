<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit"

  export const load: Load = async ({ fetch }) => {
    const req = await fetch("/api/blog")
    const { blogs } = await req.json()

    return { props: { blogs }, maxage: 60 }
  }
</script>

<script lang="ts">
  import type { Blogs } from "src/types"
  import A from "src/components/markdown/a.svelte"
  import H1 from "src/components/markdown/h1.svelte"
  import H3 from "src/components/markdown/h3.svelte"
  import P from "src/components/markdown/p.svelte"

  const title = "Geek's Blog"
  const desc =
    "Every sentence is just a remix of the dictionary, and here are my remixes"

  export let blogs: Blogs
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={desc} />
</svelte:head>

<H1>My blog posts</H1>

<P>{desc}</P>

<P />

{#each blogs as blog}
  <H3><A href={blog.url} openInNewTab unUnderline>{blog.title}</A></H3>

  <P>
    <div class="flex space-x-1 text-sm">
      <div>{blog.reading_time_minutes} Min Read |</div>
      <div>{blog.readable_publish_date}</div>
    </div>
  </P>

  <P>
    <span class="text-sm">
      {blog.description}
      <A href={blog.url} openInNewTab>Read more &rarr;</A>
    </span>
  </P>

  <P />
{/each}
