<script>
	export let list = [];
</script>

{list.length}

<ul>
	{#each list as item}
	<li>{item.operation}{item.value}</li>
	{/each}
</ul>
