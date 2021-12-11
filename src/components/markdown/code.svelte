<script>
  import Wrapper from "./wrapper.svelte"
</script>

<Wrapper let:class={className} class="mb-3" symbol="#">
  <code class={className}><slot /></code>
</Wrapper>
