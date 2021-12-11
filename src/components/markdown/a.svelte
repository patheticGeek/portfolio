<script>
  import Wrapper from "./wrapper.svelte"

  let className = ""
  export { className as class }
  export let href = ""
</script>

<a class="{className} text-underline" {href}><slot /></a>
