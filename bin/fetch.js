#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const cleanRegexp = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm

// get normalize.css content
const normalizePackage = JSON.parse(
  fs.readFileSync('./node_modules/normalize.css/package.json', 'utf8')
)
const normalizeMain = path.join(
  './node_modules/normalize.css',
  normalizePackage.main
)
const normalizeContent = fs.readFileSync(normalizeMain, 'utf8')

// get plus.css content
const plusFile = path.join('./src/plus.css')
const plusContent = fs.readFileSync(plusFile, 'utf8')

const cleanedContent = (normalizeContent + plusContent)
  .replace(cleanRegexp, '')
  .replace(/^\s*\n/gm, '')
  .replace(/\s+$/gm, '')
  .replace(/^/gm, '  ')

const resultContent = `import { css, createGlobalStyle } from 'styled-components'

export const preflight = css\`
${cleanedContent}
\`

export const Preflight = createGlobalStyle\`\${preflight}\`

export default preflight
`

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'index.js'),
  resultContent
)
