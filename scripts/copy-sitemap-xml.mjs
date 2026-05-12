/**
 * Après `astro build`, @astrojs/sitemap écrit `sitemap-index.xml` + `sitemap-0.xml`.
 * Beaucoup d’outils (GSC, habitudes SEO) attendent `/sitemap.xml` : on duplique l’index.
 */
import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'dist', 'sitemap-index.xml')
const dest = join(root, 'dist', 'sitemap.xml')

if (!existsSync(src)) {
  console.warn('[copy-sitemap-xml] dist/sitemap-index.xml absent — rien à copier.')
  process.exit(0)
}

copyFileSync(src, dest)
console.log('[copy-sitemap-xml] dist/sitemap.xml ← sitemap-index.xml')
