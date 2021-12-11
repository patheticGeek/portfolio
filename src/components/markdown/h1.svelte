<script>
  import Wrapper from "./wrapper.svelte"
</script>

<Wrapper let:class={className} class="font-medium mb-3" symbol="#">
  <h1 class={className}><slot /></h1>
</Wrapper>
