<script>
  import Wrapper from "./wrapper.svelte"
</script>

<Wrapper let:class={className} symbol="=>">
  <li class={className}><slot /></li>
</Wrapper>
