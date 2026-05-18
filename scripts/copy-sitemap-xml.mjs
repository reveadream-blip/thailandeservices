/**
 * Fusionne sitemap-0.xml (et suivants) en un seul /sitemap.xml (liste plate d’URLs).
 * Google Search Console et robots.txt pointent vers ce fichier.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

if (!existsSync(dist)) {
  console.warn('[sitemap] dist/ absent — lancez astro build avant ce script.')
  process.exit(0)
}

function extractUrlBlocks(xml) {
  return xml.match(/<url>[\s\S]*?<\/url>/g) ?? []
}

const chunkFiles = readdirSync(dist)
  .filter((f) => /^sitemap-\d+\.xml$/i.test(f))
  .sort()

if (chunkFiles.length === 0) {
  console.warn('[sitemap] Aucun sitemap-N.xml — rien à fusionner.')
  process.exit(0)
}

const seen = new Set()
const urlBlocks = []

for (const file of chunkFiles) {
  const xml = readFileSync(join(dist, file), 'utf8')
  for (const block of extractUrlBlocks(xml)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]
    if (loc && !seen.has(loc)) {
      seen.add(loc)
      urlBlocks.push(block.trim())
    }
  }
}

const urlset = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks.join('\n')}
</urlset>
`

writeFileSync(join(dist, 'sitemap.xml'), urlset, 'utf8')
console.log(`[sitemap] dist/sitemap.xml — ${urlBlocks.length} URL(s) depuis ${chunkFiles.join(', ')}`)
