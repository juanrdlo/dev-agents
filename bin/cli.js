#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const cwd = process.cwd()
const command = process.argv[2]

if (command !== 'init') {
  console.log('Uso:')
  console.log('  rafa-agents init')
  process.exit(1)
}

const packageRoot = path.resolve(__dirname, '..')

const templateDir = path.join(packageRoot, 'templates')
const skillsDir = path.join(packageRoot, 'skills')

function copyDirectory(source, destination) {
  fs.mkdirSync(destination, { recursive: true })

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name)
    const destinationPath = path.join(destination, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath)
    } else {
      fs.copyFileSync(sourcePath, destinationPath)
    }
  }
}

function copyFileIfNotExists(source, destination) {
  if (fs.existsSync(destination)) {
    console.log(`Saltando: ${path.relative(cwd, destination)} ya existe`)
    return
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.copyFileSync(source, destination)

  console.log(`Creado: ${path.relative(cwd, destination)}`)
}

copyFileIfNotExists(
  path.join(templateDir, 'AGENTS.md'),
  path.join(cwd, 'AGENTS.md')
)

copyDirectory(
  path.join(templateDir, 'docs'),
  path.join(cwd, 'docs')
)

copyDirectory(
  skillsDir,
  path.join(cwd, '.agents', 'skills')
)

console.log('')
console.log('Rafa Dev Agents instalado correctamente.')