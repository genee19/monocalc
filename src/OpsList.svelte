<script>
	export let list = [];
	export let size = 5;
</script>



<ul>
	{#each list.slice(-size) as item}
	<li>{item.operation}{item.value}</li>
	{/each}
</ul>
