<script lang="ts">
  import Navbar from "./components/Navbar.svelte";

  let name = "";
</script>

<Navbar />

<main class="w-full max-w-2xl mx-auto py-5 px-5">
  <input
    class="bg-gray-700 p-3 rounded-sm shadow"
    bind:value={name}
    placeholder="Your name"
  />

  {#if name}
    <h1 class="mt-3 text-lg">Hello there, {name}!</h1>
  {/if}
</main>
