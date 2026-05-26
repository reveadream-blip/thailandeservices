/**
 * Fusionne sitemap-0.xml en /sitemap.xml formaté + hreflang.
 * Copie sitemap.xsl dans dist/ pour affichage navigateur.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const publicDir = join(root, 'public')

const siteBase = (process.env.PUBLIC_SITE_URL || 'https://thailande-services.fr').replace(
  /\/$/,
  '',
)

const HREFLANG = { fr: 'fr-FR', en: 'en-US', th: 'th-TH' }

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

function getLoc(block) {
  return block.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? ''
}

function getAlternates(block) {
  const links = []
  const re = /<xhtml:link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"\s*\/>/g
  let m
  while ((m = re.exec(block))) {
    links.push({ hreflang: m[1], href: m[2] })
  }
  return links
}

function formatUrlBlock(block) {
  const loc = getLoc(block)
  if (!loc) return block.trim()
  let alternates = getAlternates(block)
  if (alternates.length === 0) {
    alternates = [{ hreflang: 'fr-FR', href: loc }]
  }
  const lines = ['  <url>', `    <loc>${loc}</loc>`]
  for (const alt of alternates) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`,
    )
  }
  lines.push('  </url>')
  return lines.join('\n')
}

function buildAlternateLinks(urlsByLang) {
  const lines = Object.entries(urlsByLang).map(
    ([lang, href]) =>
      `<xhtml:link rel="alternate" hreflang="${HREFLANG[lang]}" href="${href}"/>`,
  )
  lines.push(
    `<xhtml:link rel="alternate" hreflang="x-default" href="${urlsByLang.fr}"/>`,
  )
  return lines
}

function stripAlternateLinks(block) {
  return block.replace(/\s*<xhtml:link[^>]*\/>/g, '')
}

function injectContactAlternates(block) {
  const loc = getLoc(block)
  if (!Object.values(CONTACT_URLS).includes(loc)) return formatUrlBlock(block)
  const base = stripAlternateLinks(block)
  const locTag = `<loc>${loc}</loc>`
  const links = buildAlternateLinks(CONTACT_URLS).map((l) => `    ${l}`).join('\n')
  const inner = `${locTag}\n${links}`
  return `  <url>\n    ${inner}\n  </url>`
}

const chunkFiles = readdirSync(dist)
  .filter((f) => /^sitemap-\d+\.xml$/i.test(f))
  .sort()

if (chunkFiles.length === 0) {
  console.warn('[sitemap] Aucun sitemap-N.xml — rien à fusionner.')
  process.exit(0)
}

const seen = new Set()
let rawBlocks = []

for (const file of chunkFiles) {
  const xml = readFileSync(join(dist, file), 'utf8')
  for (const block of extractUrlBlocks(xml)) {
    const loc = getLoc(block)
    if (loc && !seen.has(loc)) {
      seen.add(loc)
      rawBlocks.push(block.trim())
    }
  }
}

rawBlocks = rawBlocks.map((b) => {
  const loc = getLoc(b)
  if (Object.values(CONTACT_URLS).includes(loc)) {
    return injectContactAlternates(b)
  }
  return formatUrlBlock(b)
})

rawBlocks.sort((a, b) => getLoc(a).localeCompare(getLoc(b)))

const urlset = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${rawBlocks.join('\n')}
</urlset>
`

const outPath = join(dist, 'sitemap.xml')
writeFileSync(outPath, urlset, 'utf8')

const xslSrc = join(publicDir, 'sitemap.xsl')
if (existsSync(xslSrc)) {
  copyFileSync(xslSrc, join(dist, 'sitemap.xsl'))
}

console.log(`[sitemap] ${outPath} — ${rawBlocks.length} URL(s), format lisible + sitemap.xsl`)
