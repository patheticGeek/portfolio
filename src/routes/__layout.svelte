<script>
  import Navbar from "../components/Navbar.svelte"
</script>

<div class="w-full h-full flex flex-col bg-gray-900 text-white font-light">
  <main class="w-full max-w-2xl mx-auto py-5 px-5">
    <Navbar />

    <slot />
  </main>
</div>
