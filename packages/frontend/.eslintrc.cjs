/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vitest-globals/recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    'vitest-globals/env': true,
  },
}
