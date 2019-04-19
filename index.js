module.exports = {
	"extends": "airbnb-base",
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
        'no-extra-semi':'error',
        'no-var':'error'
    }
};
