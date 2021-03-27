export const operations = {
	'+': (a, b) => (a+b),
	'-': (a, b) => (a-b),
	'*': (a, b) => (a*b),
	'/': (a, b) => (a/b),
}

export function calc(operation, left, right){
	return operations[operation](left, right);
}