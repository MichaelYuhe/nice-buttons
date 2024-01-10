module.exports = {
  env: { browser: true },
  extends: [
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    react: { version: 'detect' },
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-invalid-this': 'off',
    'require-jsdoc': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 0,
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
    ],
    'no-multi-spaces': ['warn'],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'eol-last': 1,
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-max-props-per-line': [
      'warn',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-trailing-spaces': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'off',
  },
};
