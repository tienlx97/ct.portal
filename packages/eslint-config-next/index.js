module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:cypress/recommended",
		"plugin:@next/next/recommended",
	],
	ignorePatterns: ["node_modules", "dist"],
	plugins: ["react", "@typescript-eslint", "cypress"],
	env: {
		node: true,
		browser: true,
		jasmine: true,
		jest: true,
		es6: true,
		"cypress/globals": true,
	},
	rules: {
		camelcase: "error",
		"react/prop-types": "off",
		"react/display-name": "off",
		"react/react-in-jsx-scope": "off",
		"react/self-closing-comp": [
			"error",
			{
				component: true,
				html: true,
			},
		],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"cypress/no-assigning-return-values": "error",
		"cypress/no-unnecessary-waiting": "error",
		"cypress/assertion-before-screenshot": "warn",
		"cypress/no-force": "warn",
		"cypress/no-async-tests": "error",
		"no-unused-vars": "off",
		"@next/next/no-img-element": "off",
		"@next/next/no-html-link-for-pages": "off",
	},
	parser: "@typescript-eslint/parser",
	settings: {
		react: {
			pragma: "React",
			version: "detect",
		},
	},
}
