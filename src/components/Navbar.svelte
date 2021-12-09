<script lang="ts">
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];
</script>

<div class="flex px-4 border-b-1 border-gray-600">
  <div class="px-4 py-3">
    <a href="/" class="text-gray-400 hover:text-white text-underline"
      >patheticGeek://</a
    >
    {window.location.pathname.slice(1)}
  </div>

  <nav class="hidden md:flex ml-auto flex">
    <ul class="flex">
      {#each navLinks as navLink}
        <li
          class="text-gray-200 font-medium hover:text-gray-400 hover:text-underline"
        >
          <a class="block px-4 py-3" href={navLink.href}>{navLink.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
