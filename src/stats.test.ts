import { average, sum } from './stats';
import { expect, test, describe, it } from './lib_tests';
import * as stats_async from './stats_async';

describe('tests sync', () => {
	it('Sum should sum all numbers given', () => {
		const result = sum([1, 2, 3]);
		const expected = 6;
		expect(expected).toBe(result);
	});

	it('Average should calculate average of all numbers given', () => {
		const result = average([1, 2, 3]);
		const expected = 2;
		expect(expected).toBe(result);
	});
});

describe('tests async', () => {
	it('Sum should sum all numbers given', async () => {
		const result = await stats_async.sum([1, 2, 3]);
		const expected = 6;
		expect(expected).toBe(result);
	});

	it('Average should calculate average of all numbers given asynchronously', async () => {
		const result = await stats_async.average([1, 2, 3]);
		const expected = 2;
		expect(expected).toBe(result);
	});
});
