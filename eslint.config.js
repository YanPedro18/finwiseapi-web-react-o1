// eslint.config.js
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import importHelpers from 'eslint-plugin-import-helpers';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.eslint.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'import-helpers': importHelpers,
      prettier,
    },
    rules: {
      // Suas regras personalizadas

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          js: 'never',
          tsx: 'never',
          jsx: 'never',
        },
      ],
      'no-unused-vars': 'off',

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
      'no-lonely-if': 'off',
      'no-else-return': 'off',
      'no-param-reassign': 'off',
      'no-shadow': 'off',
      'no-unused-expressions': 'off',
      'no-use-before-define': 'off',
      'no-plusplus': 'off',
      camelcase: 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx'],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',

      // "import/extensions": [
      //   "error",
      //   "ignorePackages",
      //   {
      //     ts: "never",
      //     tsx: "never",
      //   },
      // ],
      // "import-helpers/order-imports": [
      //   "warn",
      //   {
      //     newlinesBetween: "always",
      //     groups: [
      //       "/^react/",
      //       "module",
      //       "/^@shared/", // opcional: ajuste ao seu alias
      //       ["parent", "sibling", "index"],
      //     ],
      //     alphabetize: {
      //       order: "asc",
      //       ignoreCase: true,
      //     },
      //   },
      // ],
      'import-helpers/order-imports': 'off',
      'prettier/prettier': 'warn',
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          // opcionalmente:
          moduleDirectory: ['node_modules', 'src'],
        },
      },
    },
  },
  {
    files: ['vite.config.ts'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['vite.config.ts'] },
      ],
    },
  },
  // Ignorados (substitui .eslintignore)
  {
    ignores: [
      '*.js',
      'node_modules/**',
      'dist/**',
      '.vscode/**',
      'build/**',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.DS_Store',
      '.env.local',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',
    ],
  },
]);
