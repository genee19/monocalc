<script>
	import Display from "./Display.svelte";
	import Controls from "./Controls.svelte";
	import OpsList from "./OpsList.svelte";
	import { calc, operations } from "./Calc.js";
	import Roster from "./Roster.js";

	let result = 0;
	let next_operation = Object.keys(operations)[0];
	let next_operand;
	let roster = new Roster();

	function step(event) {
		let { operation, value, ...rest } = event.detail;
		result = calc(operation, result, value);
		roster.push({ operation, result, value });
		roster = roster;
	}

	function reset(event) {
		// TODO former result must go into roster of operations
		roster = new Roster();
		roster.push({ operation: 'result', value: result, result});
		result = 0;
	}

	function removeOperation(event) {
		let _, item;
		[_, item] = roster.remove(event.detail);
		roster = roster;
		next_operation = item.operation;
		next_operand = item.value;
	}
</script>

<pre>
	TODO: remove operations from list
</pre>

<OpsList list={roster.list} size="5" on:remove={removeOperation} />
<Display {result} />
<Controls
	validOperations={Object.keys(operations)}
	on:commit={step}
	on:reset={reset}
	bind:operation={next_operation}
	bind:value={next_operand}
/> = {calc(next_operation, result, next_operand)}
