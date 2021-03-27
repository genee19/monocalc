<script>
	import { createEventDispatcher } from "svelte";

	export let list = [];
	export let size = 5;

	const flush = createEventDispatcher();

	function removerFor(index) {
		return () => flush('remove', index);
	}
</script>



<ul>
	{#each list.slice(-size) as item, index}
	<li>
		{item.operation}{item.value}
		<a href="#" on:click={removerFor(index)}>#</a>
	</li>
	{/each}
</ul>
