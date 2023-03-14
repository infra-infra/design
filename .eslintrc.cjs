module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/react-in-jsx-scope': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/prefer-default-export': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['hrefLeft', 'hrefRight'], aspects: ['invalidHref', 'preferButton'] }],
        "@typescript-eslint/explicit-function-return-type": [ 'error', { allowExpressions: true}]
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: true,
            },
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'prettier',
            ],
            rules: {
                "react/prop-types": "off",
                "react/require-default-props": "off",
                'no-use-before-define': 0,
                'import/prefer-default-export': 0,
                '@typescript-eslint/no-use-before-define': ['error'],
                '@typescript-eslint/no-shadow': ['error'],
                '@typescript-eslint/explicit-function-return-type': ['error'],
                '@typescript-eslint/explicit-module-boundary-types': ['error'],
            },
        },
    ],
};
