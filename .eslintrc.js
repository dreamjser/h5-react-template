// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    requireConfigFile: false
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    App: false,
    GLOBAL_CONFIG: false,
  },
  // required to lint *.vue files
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-redeclare': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  }
}
