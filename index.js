module.exports = {
	extends: 'airbnb-base',
	env: {
		node: true,
		es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
	rules: {
		camelcase: 'off',
		indent: [
			'error',
			'tab',
		],
		'no-tabs': 'off',
		strict: 'off',
		'no-extra-semi':'error'
	},
};
