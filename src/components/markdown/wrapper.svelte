<script lang="ts">
  let className = ""
  export let symbol = ""
  export let hideSymbol = false
  export { className as class }
</script>

<div class="flex {className}">
  {#if !hideSymbol}
    <div
      class="w-[44px] max-w-[44px] min-w-[44px] text-center pr-1 text-gray-500 select-none"
    >
      {symbol}
    </div>
  {/if}

  <slot class="w-full" />
</div>
