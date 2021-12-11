<script lang="ts">
  import { Link } from "svelte-routing"

  import { globalHistory } from "svelte-routing/src/history"

  $: route = globalHistory.location

  globalHistory.listen((history) => {
    route = history.location
  })

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ]
</script>

<div class="flex items-stretch px-4 border-b-1 border-gray-600">
  <div class="flex items-center px-5">
    <a
      href="/"
      class="block text-gray-400 hover:text-white text-underline mr-1 py-4"
    >
      patheticGeek://
    </a>
    <span>{route.pathname.slice(1)}</span>
  </div>

  <nav class="hidden md:flex ml-auto flex">
    <ul class="flex">
      {#each navLinks as navLink}
        <li
          class="text-gray-200 font-medium hover:text-gray-400 hover:text-underline"
        >
          <Link class="block px-5 py-4" to={navLink.href}>{navLink.label}</Link>
        </li>
      {/each}
    </ul>
  </nav>
</div>
