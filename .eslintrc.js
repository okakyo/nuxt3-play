module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:vue/essential',
    '@nuxtjs/eslint-config-typescript',
    "plugin:tailwindcss/recommended",
		'prettier'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint', 'tailwindcss'],
	rules: {
		'vue/multi-word-component-names': 'off'
	}
};
