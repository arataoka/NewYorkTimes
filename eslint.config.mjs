import react from 'eslint-plugin-react';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintImport from 'eslint-plugin-import';
import chakraUI from 'eslint-plugin-chakra-ui';

export default [
    {
        ignores: ['node_modules/**'],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // JSX構文を許可
                },
            },
        },
        plugins: {
            react,
            '@typescript-eslint': typescriptPlugin,
            prettier,
            'jsx-a11y': jsxA11y,
            import: eslintImport,
            'chakra-ui': chakraUI,
        },
        rules: {
            'prettier/prettier': 'error', // Prettierのルール違反をエラーとして扱う
            'react/react-in-jsx-scope': 'off', // React 17以降では不要なReactのインポートを無効化
            '@typescript-eslint/explicit-module-boundary-types': 'off', // モジュールの境界での型明示を不要に
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 未使用の変数をエラーとして扱い、_で始まる引数は無視
            'import/order': ['error', { groups: ['builtin', 'external', 'internal'], alphabetize: { order: 'asc', caseInsensitive: true } }], // importの順序をアルファベット順で強制
        },
        settings: {
            react: {
                version: 'detect', // インストールされているReactのバージョンを自動検出
            },
        },
    },
];
