module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  ignorePatterns: [
    'node_modules/**/*',
    'build/**/*',
    'public/**/*',
    '**/*.min.js',
    '**/vendor/**/*'
  ],
  rules: {
    // Disable some rules that are causing issues in third-party code
    'no-unused-expressions': 'warn',
    'no-sequences': 'warn',
    'no-mixed-operators': 'warn',
    'no-fallthrough': 'warn',
    'no-use-before-define': 'warn',
    'default-case': 'warn',
    'no-labels': 'warn',
    'no-undef': 'error'
  },
  overrides: [
    {
      // Apply stricter rules to our own source code
      files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
      rules: {
        'no-unused-expressions': 'error',
        'no-sequences': 'error',
        'no-mixed-operators': 'error',
        'no-fallthrough': 'error',
        'no-use-before-define': 'error',
        'default-case': 'error',
        'no-labels': 'error'
      }
    }
  ]
} 