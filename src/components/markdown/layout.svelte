<script lang="ts" context="module">
  import code from "./code.svelte"
  import h1 from "./h1.svelte"
  import h2 from "./h2.svelte"
  import h3 from "./h3.svelte"
  import p from "./p.svelte"
  import li from "./li.svelte"

  export { code, h1, h2, h3, li, p }
</script>

<slot />
