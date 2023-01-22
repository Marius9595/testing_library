import { average, sum } from './stats';

let result, expected, test_name;

test_name = 'test sum';
result = sum([1, 2, 3]);
expected = 6;
console.log(test_name);
expect(expected).toBe(result);

test_name = 'test average';
result = average([1, 2, 3]);
expected = 2;
console.log(test_name);
expect(expected).toBe(result);

function expect<T>(expected: T) {
	return {
		toBe(result: T) {
			if (result == expected) {
				console.log('GOOD');
			} else {
				throw new Error(`FAILED: ${result} is not equal to ${expected}`);
			}
		},
	};
}
