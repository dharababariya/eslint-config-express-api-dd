module.exports = {
    
    globals: {
        MyGlobal: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            arrowFunctions: true,
            defaultParams: true,
            destructuring: true,
            forOf: true,
            generators: true,
            modules: true,
            objectLiteralComputedProperties: true,
            objectLiteralDuplicateProperties: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            octalLiterals: true,
            spread: true,
            superInFunctions: true,
            templateStrings: true,
            unicodeCodePointEscapes: true,
            globalReturn: true,
            jsx: true
        }
    },

    rules: {
        'no-extra-semi':"error",
        'no-var':"error"
    }
}
