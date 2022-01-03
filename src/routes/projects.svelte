<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async ({ fetch }) => {
		const req = await fetch('/api/repos')
		const { projects } = await req.json()

		return { props: { projects } }
	}
</script>

<script lang="ts">
	import type { Projects } from 'src/types'
	import { GITHUB_TOPIC } from '../consts'

	import A from '../components/markdown/a.svelte'
	import H1 from '../components/markdown/h1.svelte'
	import H3 from '../components/markdown/h3.svelte'
	import P from '../components/markdown/p.svelte'

	export let projects: Projects
</script>

<H1>Projects</H1>
<P>Here are some of the things I've worked on</P>
<P>
	You can also find some smaller experiments on my
	<A href="https://codesandbox.io/u/patheticGeek">CodeSandbox</A>
	{' and '}
	<A href="https://codepen.io/patheticgeek">CodePen</A>
</P>

<P />

{#each projects as project}
	<H3><A href={project.github_url}>{project.name}</A></H3>

	<P>
		<div class="flex">
			{#if project.language}
				<div
					class="mr-2 bg-white bg-opacity-5 rounded-full px-2 py-0.5 text-xs"
				>
					{project.language}
				</div>
			{/if}

			{#each project.topics as topic}
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

	{#if project.description}
		<P>
			<span class="text-sm">{project.description}</span>
		</P>
	{/if}

	{#if project.website}
		<P>
			<A href={project.website} class="text-sm">Visit Website »</A>
		</P>
	{/if}
	<P />
{/each}
