<script>
	import { createEventDispatcher } from 'svelte';

	export let operation = '+';
	export let value = 0;
	export let validOperations;

	const flush = createEventDispatcher();

	const validValuesRegexp = /0-9/;

	function catchOperationChange(event){
		operation = validOperations.find(el => el == event.key) || operation;
		if(event.key !== '.') {
			value = parseFloat(value) || 0;
		}
		// TODO handle up arrow
		// TODO handle down arrow
		console.log(operation, value)
		if (event.key == 'Enter')  {
			flush('commit', {operation, value});
			value = 0;
		}
	}
</script>

{operation}<input type="number" bind:value={value} min=0 on:keyup={catchOperationChange}>
