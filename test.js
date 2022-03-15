const assert = require('assert')
const { ESLint } = require('eslint')

const main = async () => {
  const c = new ESLint({ useEslintrc: true })

  // Eslint works with basic rule
  const unusedVar = await c.lintText('const foo = 2\n')
  assert.ok(unusedVar[0].errorCount === 1)
  assert.ok(
    unusedVar[0].messages[0].ruleId === 'no-unused-vars',
    'Unused vars should create eslint errors.'
  )

  // Prettier integration with Eslint works
  const notPretty = await c.lintText('\n\n\nconst foo  = 2\n')
  assert.ok(
    notPretty[0].messages[0].ruleId === 'prettier/prettier',
    'Prettier issues should create eslint errors.'
  )

  // Import order plugin works with prettier linter
  const importOrder = await c.lintText(`import { date } from 'utils'
import Button from './components'
import { useState } from 'react'`)
  assert.ok(
    importOrder[0].messages.filter(
      (m) => m.ruleId === 'prettier/prettier' && m.messageId === 'replace'
    ).length === 3,
    'Import order should create eslint errors.'
  )

  if (process.env.CI !== true && process.env.CI !== 'true') {
    // eslint-disable-next-line no-console
    console.info('All tests pass ✔')
  }
}

void main()
