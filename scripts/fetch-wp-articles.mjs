/**
 * Télécharge tous les articles des catégories du site (API WordPress REST)
 * et génère src/data/articles.json
 */
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT = join(ROOT, 'src', 'data', 'articles.json')

const SITE = 'https://thailande-services.fr'

const CATEGORIES = [
  { slug: 'adresses-utiles', id: 1 },
  { slug: 'les-bonnes-adresses-francophones', id: 8 },
  { slug: 'assurance-sante-et-biens-en-thailande', id: 10 },
  { slug: 'services-expatriation-en-thailande', id: 13 },
]

function rewriteContent(html) {
  if (!html) return ''
  return html
    .replaceAll('http://thailande-services.fr', SITE)
    .replaceAll('https://thailande-services.fr', SITE)
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

function stripHtml(s) {
  return s.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').trim()
}

function mapPost(p) {
  return {
    type: 'post',
    id: p.id,
    slug: p.slug,
    title: stripHtml(p.title?.rendered || ''),
    content: rewriteContent(p.content?.rendered || ''),
    excerpt: stripHtml(p.excerpt?.rendered || ''),
    date: p.date,
    categories: p.categories || [],
  }
}

async function fetchAllPostsInCategory(categoryId) {
  const out = []
  let page = 1
  while (true) {
    const url = `${SITE}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&page=${page}`
    const res = await fetch(url, { headers: { Accept: 'application/json' } })
    if (!res.ok) break
    const arr = await res.json()
    if (!Array.isArray(arr) || arr.length === 0) break
    for (const p of arr) out.push(mapPost(p))
    if (arr.length < 100) break
    page += 1
  }
  return out
}

async function main() {
  const bySlug = new Map()

  for (const { id } of CATEGORIES) {
    const posts = await fetchAllPostsInCategory(id)
    for (const p of posts) {
      if (!bySlug.has(p.slug)) bySlug.set(p.slug, p)
    }
    await new Promise((r) => setTimeout(r, 150))
  }

  const articles = Array.from(bySlug.values()).sort((a, b) =>
    a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' })
  )

  const categories = CATEGORIES.map(({ slug, id }) => ({
    slug,
    posts: articles
      .filter((a) => a.categories.includes(id))
      .map((a) => ({
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt.slice(0, 220),
        date: a.date,
      })),
  }))

  mkdirSync(dirname(OUT), { recursive: true })
  const payload = {
    fetchedAt: new Date().toISOString(),
    source: SITE,
    articles,
    categories,
  }
  writeFileSync(OUT, JSON.stringify(payload, null, 2), 'utf8')
  console.log(`Wrote ${articles.length} unique articles, ${categories.length} category listings to ${OUT}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
