import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    languageOptions: { globals: globals.node },
  },
  {
    ignores: ['setupTests.js'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
