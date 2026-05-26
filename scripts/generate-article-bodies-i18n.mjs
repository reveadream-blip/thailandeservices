/**
 * Génère les corps d’articles EN/TH depuis le HTML français (articles.json).
 * Usage : npm install && node scripts/generate-article-bodies-i18n.mjs
 * Sortie : src/data/article-bodies/{slug}.en.html | .th.html
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as cheerio from 'cheerio'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'src/data/article-bodies')
const articles = JSON.parse(readFileSync(join(root, 'src/data/articles.json'), 'utf8'))

const SKIP_TAGS = new Set(['script', 'style', 'noscript', 'iframe'])
const ATTRS_TO_TRANSLATE = ['alt', 'title', 'placeholder', 'aria-label']

const cache = new Map()

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function shouldSkipText(text) {
  const t = text.trim()
  if (!t) return true
  if (/^[\d\s+().\-:/]+$/.test(t)) return true
  if (/^https?:\/\//i.test(t)) return true
  if (t.length < 2) return true
  return false
}

async function translateText(text, targetLang) {
  const trimmed = text.trim()
  if (shouldSkipText(text)) return text

  const cacheKey = `${targetLang}::${trimmed}`
  if (cache.has(cacheKey)) {
    const hit = cache.get(cacheKey)
    return text.replace(trimmed, hit)
  }

  const tl = targetLang === 'th' ? 'th' : 'en'
  const chunks = []
  let remaining = trimmed
  const maxChunk = 1200
  while (remaining.length > 0) {
    chunks.push(remaining.slice(0, maxChunk))
    remaining = remaining.slice(maxChunk)
  }

  const translatedParts = []
  for (const chunk of chunks) {
    await sleep(350)
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=${tl}&dt=t&q=${encodeURIComponent(chunk)}`
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ThailandeServices/1.0)' },
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      const part = data[0]?.map((row) => row[0]).join('') ?? chunk
      translatedParts.push(part)
    } catch (err) {
      console.warn(`  [warn] traduction ${tl}: ${err.message}`)
      translatedParts.push(chunk)
    }
  }

  const translated = translatedParts.join('')
  cache.set(cacheKey, translated)
  return text.replace(trimmed, translated)
}

async function translateHtml(html, targetLang) {
  const $ = cheerio.load(html, { decodeEntities: false }, false)
  $('script, style, noscript').remove()

  const textNodes = []
  const attrJobs = []

  $('*').each((_, el) => {
    const tag = el
    if (SKIP_TAGS.has(tag.tagName)) return
    for (const attr of ATTRS_TO_TRANSLATE) {
      const val = $(tag).attr(attr)
      if (val?.trim()) {
        attrJobs.push({ tag, attr, val })
      }
    }
  })

  $.root()
    .find('*')
    .addBack()
    .contents()
    .each((_, node) => {
      if (node.type === 'text' && node.data?.trim()) {
        textNodes.push(node)
      }
    })

  for (const node of textNodes) {
    node.data = await translateText(node.data, targetLang)
  }

  for (const { tag, attr, val } of attrJobs) {
    const translated = await translateText(val, targetLang)
    $(tag).attr(attr, translated.trim())
  }

  return $.html()
}

async function main() {
  mkdirSync(outDir, { recursive: true })
  const slugs = articles.articles.map((a) => a.slug)

  for (const slug of slugs) {
    const article = articles.articles.find((a) => a.slug === slug)
    if (!article?.content?.trim()) continue

    for (const lang of ['en', 'th']) {
      const outPath = join(outDir, `${slug}.${lang}.html`)
      if (existsSync(outPath) && process.env.FORCE !== '1') {
        console.log(`[skip] ${slug}.${lang}.html`)
        continue
      }
      console.log(`[trad] ${slug} → ${lang}`)
      const translated = await translateHtml(article.content, lang)
      writeFileSync(outPath, translated, 'utf8')
    }
  }

  console.log(`Terminé — ${slugs.length} articles, cache ${cache.size} segments`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
