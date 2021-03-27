<script>
	import Display from './Display.svelte';
	import Controls from './Controls.svelte';
	import OpsList from './OpsList.svelte';
	import {calc, operations} from './Calc.js'

	let result = 0;
	let next_operation = Object.keys(operations)[0];
	let next_operand;

	function step(event) {
		let {operation, value, ...rest} = event.detail;
		result = calc(operation, result, value);
	}

	function reset(event) {
		// TODO former result must go into roster of operations
		result = 0;
	}
</script>


<OpsList />
<Display {result}/>
<Controls validOperations={Object.keys(operations)} on:commit={step} on:reset={reset} bind:operation={next_operation} bind:value={next_operand}/> = {calc(next_operation, result, next_operand)}
