<script>
	export let list = [];
</script>



<ul>
	{#each list.slice(-5) as item}
	<li>{item.operation}{item.value}</li>
	{/each}
</ul>
