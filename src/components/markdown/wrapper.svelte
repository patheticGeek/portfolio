<script lang="ts">
  let className = ""
  export let symbol = ""
  export let hideSymbol = false
  export { className as class }
</script>

<div class="flex items-start {className}">
  {#if !hideSymbol}
    <div class="w-[5ch] text-center pr-1 text-gray-500 select-none">
      {symbol}
    </div>
  {/if}

  <slot class="w-full" />
</div>
