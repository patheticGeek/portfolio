<script>
  import Wrapper from "./wrapper.svelte"

  let className = ""
  export { className as class }
  export let href = ""
  export let openInNewTab = false
</script>

<a
  class="{className} underline"
  {href}
  rel={openInNewTab && "noreferrer noopener"}
  target={openInNewTab && "_blank"}
>
  <slot />
</a>
