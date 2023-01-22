import { average, sum } from './stats';
import { expect } from './lib_tests';

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
