import { average, sum } from './stats';
import { expect, test } from './lib_tests';

test('Sum should sum all numbers given', () => {
	const result = sum([1, 2, 3]);
	const expected = 6;
	expect(expected).toBe(result);
});

test('Average should calculate average of all numbers given', () => {
	const result = average([1, 2, 3]);
	const expected = 2;
	expect(expected).toBe(result);
});
