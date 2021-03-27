<script>
	import Display from './Display.svelte';
	import Controls from './Controls.svelte';
	import OpsList from './OpsList.svelte';
	import {calc, operations} from './Calc.js'
	import Roster from "./Roster.js";

	let result = 0;
	let next_operation = Object.keys(operations)[0];
	let next_operand;
	let roster = new Roster();

	function step(event) {
		let {operation, value, ...rest} = event.detail;
		result = calc(operation, result, value);
		roster.push({operation, result, value});
		roster = roster;
	}

	function reset(event) {
		// TODO former result must go into roster of operations
		result = 0;
	}
</script>

<pre>
	TODO: smart limit on the displayed length of OpsList
	TODO: remove operations from list
</pre>

<OpsList list={roster.list} />
<Display {result}/>
<Controls validOperations={Object.keys(operations)} on:commit={step} on:reset={reset} bind:operation={next_operation} bind:value={next_operand}/> = {calc(next_operation, result, next_operand)}
