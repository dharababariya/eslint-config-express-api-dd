module.exports = {
    
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            defaultParams: true,
            spread: true
        }
    },
    rules: {
        // Force all variable names to use either camelCase style or UPPER_CASE with
        // underscores.
        camelcase: 'off',
        // Enforce tab width of  spaces.
        indent: [
            'error', 'tab'
        ],
        'no-tabs': 'off',
        // Enforce placing 'use strict' at the top function scope
        strict: 'off',
        //no extra semi colon
        'no-extra-semi': 'error',
        // var not used
        'no-var': 'error',
        // Suppress warnings about == null comparisons.
        "eqnull": true,

        // Prohibit use of a variable before it is defined.
        "latedef": true,

        // Require capitalized names for constructor functions.
        "newcap": true,

        // Enforce use of single quotation marks for strings.
        "quotmark": "single",

        // Prohibit trailing whitespace.
        "trailing": true,

        // Prohibit use of explicitly undeclared variables.
        "undef": true,

        // Warn when variables are defined but never used.
        "unused": true,

        // Enforce line length to 80 characters
				"maxlen": 100,
				//Proper names should have the correct capitalization
				"proper-names": true,
				//Required header structure
				"required-headers": false,
				//No empty links
				"no-empty-links": true,
				//First line in file should be a top level header
				"first-line-h1": false,
				//Fenced code blocks should have a language specified
				"fenced-code-language": true,
				//Disallow spaces inside link text
				"no-space-in-links": true,
				

    }
};
