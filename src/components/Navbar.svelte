<script lang="ts">
  import { page } from "$app/stores"
  import { NAV_LINKS } from "src/consts"
</script>

<div class="flex items-stretch px-4 border-b border-neutral-600">
  <div class="flex items-center px-5">
    <a
      href="/"
      class="block text-gray-400 hover:text-white underline mr-1 py-4"
    >
      patheticGeek://
    </a>
    {$page.url.pathname.split("/")[1]}
  </div>

  <nav class="hidden md:flex ml-auto">
    <ul class="flex">
      {#each NAV_LINKS as navLink}
        <li
          class="text-gray-200 font-medium hover:text-gray-400 hover:underline transition"
        >
          <a
            class="block px-5 py-4"
            href={navLink.href}
            rel={navLink.newTab ? "noreferrer noopener" : undefined}
            target={navLink.newTab ? "_blank" : undefined}
          >
            {navLink.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
