/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@hycord/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
  },
  ignorePatterns: ['./src/napi-rs.d.ts'],
};
