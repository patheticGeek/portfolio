<script lang="ts">
  import { getProjects } from "../services/github"

  import A from "../components/markdown/a.svelte"
  import H1 from "../components/markdown/h1.svelte"
  import H3 from "../components/markdown/h3.svelte"
  import P from "../components/markdown/p.svelte"
  import { GITHUB_TOPIC } from "../consts"

  let repos = getProjects()
</script>

<H1>Projects</H1>
<P>Here are some of the things I've worked on</P>
<P>
  You can also find some smaller experiments on my
  <A href="https://codesandbox.io/u/patheticGeek">CodeSandbox</A>
  {" and "}
  <A href="https://codepen.io/patheticgeek">CodePen</A>
</P>
<P />

{#await repos}
  <P>Loading...</P>
{:then repos}
  {#each repos.items as repo}
    <H3><A href={repo.html_url}>{repo.name}</A></H3>
    <P>
      <div class="flex">
        {#if repo.language}
          <div
            class="mr-2 bg-white bg-opacity-5 rounded-full px-2 py-0.5 text-xs"
          >
            {repo.language}
          </div>
        {/if}

        {#each repo.topics as topic}
          {#if topic !== GITHUB_TOPIC}
            <div
              class="mr-2 bg-white bg-opacity-5 rounded-full px-2 py-0.5 text-xs"
            >
              {topic}
            </div>
          {/if}
        {/each}
      </div>
    </P>
    {#if repo.description}
      <P>
        <span class="text-sm">{repo.description}</span>
      </P>
    {/if}
    {#if repo.homepage}
      <P>
        <A href={repo.homepage} class="text-sm">Visit Website »</A>
      </P>
    {/if}
    <P />
  {/each}
{/await}
