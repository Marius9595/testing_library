export function sum(numbers: number[]) {
	return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

export function average(numbers: number[]) {
	return sum(numbers) / numbers.length;
}
