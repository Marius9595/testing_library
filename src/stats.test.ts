import { average, sum } from './stats';

let result, expected, test_name;

test_name = 'test sum';
result = sum([1, 2, 3]);
expected = 6;
if (result == expected) {
	console.log(`${test_name} : GOOD`);
} else {
	throw new Error(`${test_name} :  FAILED: ${result} is not equal to ${expected}`);
}

test_name = 'test average';
result = average([1, 2, 3]);
expected = 2;
if (result == expected) {
	console.log(`${test_name} : GOOD`);
} else {
	throw new Error(`${test_name} : FAILED: ${result} is not equal to ${expected}`);
}