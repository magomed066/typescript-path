// function add(n1: number, n2: number): number {
// 	return n1 + n2
// }

// function printResult(num: number) {
// 	console.log('Result:  ' + num)
// }
// let combineValues: (a: number, b: number) => number

// combineValues = add

// printResult(combineValues(10, 12))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2
	cb(result)
}

addAndHandle(10, 31, (num) => {
	console.log(num)
})
