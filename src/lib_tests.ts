/*

TODO:
 * Enseñar la línea en la que falla el test y donde donde se laza el error de código
 * Permitir el soporte para asycn con la agrupación
*/

export function expect<T>(expected: T) {
	return {
		toBe(result: T) {
			if (result !== expected) {
				throw new Error(`FAILED: ${result} is not equal to ${expected}`);
			}
		},
	};
}

export async function test(description: string, callback: () => void) {
	try {
		await callback();
		console.log(`GOOD: ${description}`);
	} catch (error) {
		console.log(`FAILED: ${description}`);
		console.log(error);
	}
}

export const it = test;

export function describe(description:string, callback:()=>void) {
	console.log(description);
	callback();
}
