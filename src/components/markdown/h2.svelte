<script>
	import Wrapper from './wrapper.svelte'
</script>

<Wrapper let:class={className} class="font-medium mb-3" symbol="##">
	<h2 class={className}><slot /></h2>
</Wrapper>
