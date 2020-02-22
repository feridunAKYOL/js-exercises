// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [ 0.1, 0.2, 0.3, 0.4, 0.5 ];
console.log(numbers.map((x) => x * 100));

// second solution

function multiple100(x) {
	return x * 100;
}
console.log(numbers.map(multiple100));

// third solution

console.log(
	numbers.map(function mult(x) {
		return x * 100;
	})
);
