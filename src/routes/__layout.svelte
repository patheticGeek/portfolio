<script>
  import Navbar from "src/components/Navbar.svelte"

  import "src/assets/app.css"
</script>

<div
  class="w-full min-h-screen flex flex-col bg-zinc-900 text-white selection:bg-amber-200 selection:bg-opacity-90 selection:text-black font-light"
>
  <Navbar />

  <main class="w-full max-w-2xl mx-auto py-5 px-5">
    <slot />
  </main>
</div>
