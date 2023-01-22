import { average, sum } from './stats';
import { expect, test } from './lib_tests';
import * as stats_async from './stats_async';

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

test('Sum should sum all numbers given', async () => {
	const result = await stats_async.sum([1, 2, 3]);
	const expected = 6;
	expect(expected).toBe(result);
});

test('Average should calculate average of all numbers given asynchronously', async () => {
	const result = await stats_async.average([1, 2, 3]);
	const expected = 2;
	expect(expected).toBe(result);
});
