<script>
  let className = ""
  export { className as class }
  export let href = ""
  export let openInNewTab = false
</script>

<a
  class="{className} underline"
  {href}
  rel={openInNewTab ? "noreferrer noopener" : undefined}
  target={openInNewTab ? "_blank" : undefined}
>
  <slot />
</a>
