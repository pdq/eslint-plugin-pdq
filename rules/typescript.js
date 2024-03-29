const typescriptRules = {
  '@typescript-eslint/adjacent-overload-signatures': 2,
  '@typescript-eslint/await-thenable': 2,
  '@typescript-eslint/ban-ts-ignore': 0,
  '@typescript-eslint/ban-types': [
    2,
    {
      types: {
        Object: 'Use {} instead',
        String: {
          message: 'Use string instead',
          fixWith: 'string',
        },
      },
    },
  ],
  '@typescript-eslint/camelcase': 0,
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/explicit-member-accessibility': 0,
  '@typescript-eslint/indent': 0,
  '@typescript-eslint/member-delimiter-style': [
    2,
    {
      multiline: {
        delimiter: 'none',
      },
    },
  ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['camelCase'],
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'property',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    },
    {
      selector: 'enumMember',
      format: ['UPPER_CASE'],
    },
    {
      selector: 'enum',
      format: ['PascalCase'],
    },
    {
      selector: 'variable',
      types: ['function'],
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'parameter',
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['camelCase'],
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
    {
      selector: 'import',
      format: ['camelCase', 'PascalCase'],
    },
  ],
  '@typescript-eslint/no-array-constructor': 2,
  '@typescript-eslint/no-empty-interface': 2,
  '@typescript-eslint/no-explicit-any': 2,
  '@typescript-eslint/no-inferrable-types': 0,
  '@typescript-eslint/no-misused-new': 2,
  '@typescript-eslint/no-namespace': 2,
  '@typescript-eslint/no-non-null-assertion': 2,
  '@typescript-eslint/no-parameter-properties': 0,
  '@typescript-eslint/no-unnecessary-type-assertion': 2,
  '@typescript-eslint/no-unnecessary-condition': 2,
  '@typescript-eslint/no-unused-expressions': 2,
  '@typescript-eslint/no-unused-vars': [
    2,
    {
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-useless-constructor': 2,
  '@typescript-eslint/no-use-before-define': 2,
  '@typescript-eslint/no-var-requires': 2,
  '@typescript-eslint/prefer-function-type': 2,
  '@typescript-eslint/prefer-includes': 2,
  '@typescript-eslint/prefer-interface': 0,
  '@typescript-eslint/prefer-namespace-keyword': 0,
  '@typescript-eslint/prefer-string-starts-ends-with': 2,
  '@typescript-eslint/require-array-sort-compare': 2,
  '@typescript-eslint/restrict-plus-operands': 2,
  '@typescript-eslint/semi': 0,
  '@typescript-eslint/type-annotation-spacing': 0,
  '@typescript-eslint/explicit-module-boundary-types': 0,
  'no-unused-labels': 0,
  'no-use-before-define': 0,
  'node/no-missing-import': 0,
  'node/no-missing-require': 0,
  camelcase: 0,
}

module.exports = { typescriptRules }
