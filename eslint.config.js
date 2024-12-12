// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin' // official @typescript-eslint pattern
import tsParser from '@typescript-eslint/parser';


export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsConfigs.recommended, // Using @typescript-eslint recommended configs
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Enforce single quotes
      'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

      // Trailing commas on multiline
      'comma-dangle': ['error', 'always-multiline'],

      "indent": ["error", 4]

    },
  },
]
