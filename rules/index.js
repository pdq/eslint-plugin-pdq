const { nodeRules } = require('./node')
const { a11yRules, reactRules } = require('./react')
const { baseRules } = require('./recommended')
const { jestRules } = require('./jest')
const { typescriptRules } = require('./typescript')

const defaultParserOptions = {
  ecmaVersion: 9,
  sourceType: 'module',
  requireConfigFile: false,
}

const defaultPlugins = ['@babel/eslint-plugin', 'unicorn', 'promise', 'import']

const plugin = {
  configs: {
    recommended: {
      plugins: defaultPlugins,
      extends: ['plugin:import/warnings'],
      rules: baseRules,
    },
    react: {
      parserOptions: Object.assign({}, defaultParserOptions, {
        ecmaFeatures: {
          jsx: true,
        },
      }),
      env: {
        browser: true,
      },
      plugins: ['react', 'jsx-a11y', 'react-hooks'],
      extends: ['plugin:import/warnings'],
      rules: Object.assign({}, reactRules, a11yRules),
    },
    node: {
      env: {
        node: true,
      },
      extends: ['plugin:import/warnings', 'plugin:node/recommended'],
      rules: nodeRules,
    },
    jest: {
      env: {
        jest: true,
      },
      plugins: ['jest'],
      extends: ['plugin:import/warnings'],
      rules: jestRules,
    },
    prettier: {
      extends: ['plugin:import/warnings', 'prettier'],
      /**
       * Prettier plugin is not normally recommended
       * https://prettier.io/docs/en/integrating-with-linters.html
       * However, we want this package to serve as a centralized
       * solution for our JS formatting, without having to require
       * consumers use the additional check `prettier --check`
       */
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
    typescript: {
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: typescriptRules,
      parser: '@typescript-eslint/parser',
      parserOptions: { project: './tsconfig.json' },
    },
  },
}

Object.keys(plugin.configs).forEach((k) => {
  const c = plugin.configs[k]
  c.parser = c.parser || '@babel/eslint-parser'
  c.parserOptions = c.parserOptions || defaultParserOptions
  c.env = Object.assign(c.env || {}, { es6: true, commonjs: true })
})

module.exports = plugin
