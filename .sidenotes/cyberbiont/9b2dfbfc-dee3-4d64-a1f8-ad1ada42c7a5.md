// Declare a type.
interface CustomNodeJsGlobal extends NodeJS.Global {
expect: Chai.ExpectStatic
should: Chai.Should
}
// Tell Typescript to use this type for the already existent global `global` variable.
declare const global: CustomNodeJsGlobal

Make sure chai and jasmine ".not" play nice together

```ts
/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
const originalNot = Object.getOwnPropertyDescriptor(
	chai.Assertion.prototype,
	'not',
)!.get
Object.defineProperty(chai.Assertion.prototype, 'not', {
	get() {
		Object.assign(this, this.assignedNot)
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return originalNot!.apply(this)
	},
	set(newNot) {
		this.assignedNot = newNot
		return newNot
	},
})

const jestExpect = expect

expect = actual => {
	const originalMatchers = jestExpect(actual)
	const chaiMatchers = chai.expect(actual)
	const combinedMatchers = Object.assign(chaiMatchers, originalMatchers)
	return combinedMatchers
}
```

// https://stackoverflow.com/questions/57723035/how-to-add-types-checker-for-the-jest-in-the-typescript-app

```ts
declare global {
	namespace jest {
		interface Matchers<R> {
			toBeDisabled(): R
			toContainElement(element: ReactTestInstance | null): R
			toBeEmpty(): R
			toHaveProp(attr: string, value?: any): R
			toHaveTextContent(
				text: string | RegExp,
				options?: { normalizeWhitespace: boolean },
			): R
			toBeEnabled(): R
			toHaveStyle(style: object[] | object): R
		}
	}
}
```

```ts
declare namespace jest {
	// interface Matchers<R, T> extends Chai.Match
	interface Expect extends Chai.ExpectStatic
}
```
