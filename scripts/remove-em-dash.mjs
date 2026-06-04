/**
 * Supprime le tiret cadratin (U+2014) du contenu publié (src/, public/).
 * Ne modifie pas les URLs (lignes contenant href= avec —).
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const EM = '\u2014'
const DIRS = ['src', 'public']
const EXT = new Set(['.ts', '.json', '.html', '.md', '.astro', '.xsl'])

function transform(text) {
  let s = text
  s = s.replace(/<\/strong>\s*—\s*/g, '</strong> : ')
  s = s.replace(/\s—\s/g, ', ')
  s = s.replace(/—/g, ', ')
  return s
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    const st = fs.statSync(p)
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === 'dist') continue
      walk(p, files)
    } else if (EXT.has(path.extname(name))) {
      files.push(p)
    }
  }
  return files
}

let changed = 0
for (const dir of DIRS) {
  const base = path.join(ROOT, dir)
  if (!fs.existsSync(base)) continue
  for (const file of walk(base)) {
    const raw = fs.readFileSync(file, 'utf8')
    if (!raw.includes(EM)) continue
    const lines = raw.split('\n')
    const out = transform(raw)
    if (out !== raw) {
      fs.writeFileSync(file, out, 'utf8')
      changed++
      console.log(path.relative(ROOT, file))
    }
  }
}

console.log(`\n${changed} fichier(s) mis à jour.`)
