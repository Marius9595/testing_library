export function expect<T>(expected: T) {
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
