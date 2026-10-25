import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { dirname, extname, join, resolve } from 'node:path'

const root = process.cwd()
const ignoreDirs = new Set(['.git', 'node_modules', '.vitepress', '.github'])
const pages = []
function walk(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    if (item.isDirectory()) {
      if (!ignoreDirs.has(item.name)) walk(join(dir, item.name))
    } else if (item.isFile() && item.name.endsWith('.md')) {
      pages.push(join(dir, item.name))
    }
  }
}
walk(root)

const errors = []
for (const file of pages) {
  // Ignorar ejemplos fenced; las rutas dentro de bloques de código no son enlaces.
  const source = readFileSync(file, 'utf8').replace(/^```[\s\S]*?^```/gm, '')
  const regex = /\]\(([^)\s]+)(?:\s+["'][^"']+["'])?\)/g
  for (const match of source.matchAll(regex)) {
    const raw = match[1]
    if (/^(https?:|mailto:|tel:|data:|#)/i.test(raw)) continue
    const noFragment = decodeURIComponent(raw.split('#')[0].split('?')[0])
    if (!noFragment) continue
    const candidate = noFragment.startsWith('/')
      ? resolve(root, '.' + noFragment)
      : resolve(dirname(file), noFragment)
    // Los enlaces de VitePress sin extensión se resuelven a Markdown.
    const matches = [candidate, candidate + '.md', join(candidate, 'index.md'), join(candidate, 'README.md')]
    if (!matches.some(path => existsSync(path) && statSync(path).isFile())) {
      errors.push(`${file.slice(root.length + 1)}: ${raw}`)
    }
  }
}
if (errors.length) {
  console.error('Enlaces locales que no resuelven:\n' + errors.map(x => ' - ' + x).join('\n'))
  process.exitCode = 1
} else {
  console.log(`OK: ${pages.length} archivos Markdown verificados; enlaces internos sin rutas inexistentes.`)
}
