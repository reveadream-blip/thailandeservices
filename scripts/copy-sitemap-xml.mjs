/**
 * Fusionne sitemap-0.xml (et suivants) en un seul /sitemap.xml.
 * Conserve les balises hreflang (xhtml:link) et corrige la page contact (chemins FR/EN/TH différents).
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const siteBase = (process.env.PUBLIC_SITE_URL || 'https://thailande-services.fr').replace(
  /\/$/,
  '',
)

const HREFLANG = {
  fr: 'fr-FR',
  en: 'en-US',
  th: 'th-TH',
}

/** Page contact : slugs différents selon la langue. */
const CONTACT_URLS = {
  fr: `${siteBase}/formulaire-de-contact/`,
  en: `${siteBase}/en/contact/`,
  th: `${siteBase}/th/contact/`,
}

if (!existsSync(dist)) {
  console.warn('[sitemap] dist/ absent — lancez astro build avant ce script.')
  process.exit(0)
}

function extractUrlBlocks(xml) {
  return xml.match(/<url>[\s\S]*?<\/url>/g) ?? []
}

function extractUrlsetOpenTag(xml) {
  const m = xml.match(/<urlset[^>]*>/)
  if (!m) {
    return '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
  }
  return m[0]
}

function getLoc(block) {
  return block.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? ''
}

function buildAlternateLinks(urlsByLang) {
  const lines = Object.entries(urlsByLang).map(
    ([lang, href]) =>
      `<xhtml:link rel="alternate" hreflang="${HREFLANG[lang]}" href="${href}"/>`,
  )
  lines.push(
    `<xhtml:link rel="alternate" hreflang="x-default" href="${urlsByLang.fr}"/>`,
  )
  return lines.join('\n    ')
}

function stripAlternateLinks(block) {
  return block.replace(/\s*<xhtml:link[^>]*\/>/g, '')
}

function injectAlternates(block, urlsByLang, force = false) {
  if (!force && block.includes('xhtml:link')) return block
  const base = stripAlternateLinks(block)
  const links = buildAlternateLinks(urlsByLang)
  return base.replace(/<loc>[^<]+<\/loc>/, (locTag) => `${locTag}\n    ${links}`)
}

function enhanceContactPages(blocks) {
  const contactLocs = new Set(Object.values(CONTACT_URLS))
  return blocks.map((block) => {
    const loc = getLoc(block)
    if (!contactLocs.has(loc)) return block
    return injectAlternates(block, CONTACT_URLS, true)
  })
}

const chunkFiles = readdirSync(dist)
  .filter((f) => /^sitemap-\d+\.xml$/i.test(f))
  .sort()

if (chunkFiles.length === 0) {
  console.warn('[sitemap] Aucun sitemap-N.xml — rien à fusionner.')
  process.exit(0)
}

const seen = new Set()
let urlBlocks = []
let urlsetOpen = null

for (const file of chunkFiles) {
  const xml = readFileSync(join(dist, file), 'utf8')
  if (!urlsetOpen) urlsetOpen = extractUrlsetOpenTag(xml)
  for (const block of extractUrlBlocks(xml)) {
    const loc = getLoc(block)
    if (loc && !seen.has(loc)) {
      seen.add(loc)
      urlBlocks.push(block.trim())
    }
  }
}

urlBlocks = enhanceContactPages(urlBlocks)
urlBlocks.sort((a, b) => getLoc(a).localeCompare(getLoc(b)))

const urlset = `<?xml version="1.0" encoding="UTF-8"?>
${urlsetOpen}
${urlBlocks.join('\n')}
</urlset>
`

writeFileSync(join(dist, 'sitemap.xml'), urlset, 'utf8')

const withHreflang = urlBlocks.filter((b) => b.includes('xhtml:link')).length
console.log(
  `[sitemap] dist/sitemap.xml — ${urlBlocks.length} URL(s), ${withHreflang} avec hreflang (depuis ${chunkFiles.join(', ')})`,
)
