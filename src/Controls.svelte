<script>
	import { createEventDispatcher } from "svelte";

	export let operation = '+';
	export let value = 0;
	export let validOperations;

	let armedForReset = false;

	const flush = createEventDispatcher();

	const validValuesRegexp = /0-9/;

	function catchOperationChange(event) {
		if (event.key == "Enter") {
			if (armedForReset) {
				flush("reset", {});
				armedForReset = false;
			} else {
				flush("commit", { operation, value });
				value = 0;
				// TODO: "Clear" command as "double Enter"
				armedForReset = true;
			}
		} else {
			operation = validOperations.find((el) => el == event.key) || operation;
			if (event.key !== ".") {
				value = parseFloat(value) || 0;
				armedForReset = false;
			}
			// TODO handle up arrow
			// TODO handle down arrow
		}
	}
</script>

<p>
	{#if armedForReset}
		<small>Hit Enter to start new sequence</small>
	{/if}
	&nbsp;
</p>

{operation}<input
	type="number"
	bind:value
	min="0"
	on:keyup={catchOperationChange}
/>
