module.exports = {
    env: {
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly',
        React: true,
        XMLHttpRequest: true,
        document: true,
        fetch: true,
        introJs: true,
        navigator: true,
        window: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'jsx-a11y', 'import'],
    rules: {
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        'consistent-return': 'off',
        'func-names': 'off',
        'global-require': 'off',
        'import/extensions': 'off',
        'import/first': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/heading-has-content': 'off',
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-nested-ternary': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'off',
        'no-script-url': 'off',
        'no-throw-literal': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'one-var': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-promise-reject-errors': 'off',
        'react/jsx-fragments': 'off',
        'react/jsx-curly-newline': 'off',
        'react/forbid-prop-types': [
            'off',
            {
                forbid: ['any', 'array', 'object'],
            },
        ],
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': 'off',
        'react/no-multi-comp': 'off',
        semi: ['error', 'never'],
        'react-hooks/exhaustive-deps': 'off',
    },
}
