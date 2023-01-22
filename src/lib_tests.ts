export function expect<T>(expected: T) {
	return {
		toBe(result: T) {
			if (result !== expected) {
				throw new Error(`FAILED: ${result} is not equal to ${expected}`);
			}
		},
	};
}

export function test(description: string, callback: () => void) {
	try {
		callback();
		console.log(`GOOD: ${description}`);
	} catch (error) {
		console.log(`FAILED: ${description}`);
		console.log(error);
	}
}
