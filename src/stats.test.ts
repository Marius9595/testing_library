import { average, sum } from './stats';
import { expect, test } from './lib_tests';

let result, expected;
test('Sum should sum all numbers given', () => {
	result = sum([1, 2, 3]);
	expected = 6;
	expect(expected).toBe(result);
});

test('Average should calculate average of all numbers given', () => {
	result = average([1, 2, 3]);
	expected = 2;
	expect(expected).toBe(result);
});
