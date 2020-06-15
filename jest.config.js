module.exports = {
	roots: [`<rootDir>/src`],
	// testMatch: [
	// 	`<rootDir>/test/**/*.+(ts|tsx|js|jsx)`,
	// 	`<rootDir>/src/**/*(*.)+(spec|test).+(ts|tsx|js|jsx)`,
	// ],
	testMatch: [`<rootDir>/src/**/*(*.)+(spec|test).+(ts|tsx|js|jsx)`],
	preset: `ts-jest`,
	// transform: {
	// 	'^.+\\.(ts|tsx)$': `ts-jest`,
	// },
	setupFilesAfterEnv: [`${__dirname}/test.setup.ts`, `<rootDir>/src/global.ts`],
	/* reporters: [
		`default`,
		[
			`jest-stare`,
			{
				resultDir: `tmp/reporters/jest-stare`,
				reportTitle: `jest-stare!`,
				// additionalResultsProcessors: ['jest-html-reporters'],
				coverageLink: `../coverage/lcov-report/index.html`,
				// "jestStareConfigJson": "jest-stare.json",
				// "jestGlobalConfigJson": "globalStuff.json"
			},
		],
	],
	collectCoverage: true,
	coverageDirectory: `./tmp/coverage`, */
};
