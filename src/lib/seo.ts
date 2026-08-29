import { CONTACT, SITE, SEO_DEFAULT_OG_IMAGE } from '../config'

const BASE = SITE.baseUrl.replace(/\/$/, '')

export const ORG_SCHEMA_ID = `${SITE.baseUrl}/#organization`
export const WEBSITE_SCHEMA_ID = `${SITE.baseUrl}/#website`

/** URL absolue du site (trailing slash conservé sauf pour la racine). */
export function absoluteUrl(path: string): string {
  if (!path || path === '/') return `${BASE}/`
  const p = path.startsWith('/') ? path : `/${path}`
  return `${BASE}${p.endsWith('/') ? p : `${p}/`}`
}

/** Fichier statique (image, etc.), sans slash final. */
export function absoluteAssetUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${BASE}${p}`
}

/** Image Open Graph absolue (par défaut : logo). */
export function defaultOgImageUrl(): string {
  return absoluteAssetUrl(SEO_DEFAULT_OG_IMAGE)
}

/** Meta description (RankFlow / Google : ≤ 160 car.). */
export function truncateMeta(text: string, max = 160): string {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…'
}

/** Titre <title> seul (ex. accueil) : ≤ 60 car. pour Google. */
export function truncateDocumentTitle(text: string, max = 60): string {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max)
  const lastSep = cut.lastIndexOf(' · ')
  const lastSpace = cut.lastIndexOf(' ')
  const breakAt = lastSep > 20 ? lastSep : lastSpace > 15 ? lastSpace : max
  return cut.slice(0, breakAt).trimEnd()
}

const TITLE_SEP = ' | '

/** Titre document ≤ 60 car. : « Page | Site ». */
export function buildDocumentTitle(headline: string, siteName: string, maxTotal = 60): string {
  const h = headline.replace(/\s+/g, ' ').trim()
  const suffix = siteName.trim()
  const full = `${h}${TITLE_SEP}${suffix}`
  if (full.length <= maxTotal) return full
  const maxHeadline = maxTotal - TITLE_SEP.length - suffix.length
  if (maxHeadline < 12) return suffix.slice(0, maxTotal)
  const cut = h.slice(0, maxHeadline)
  const lastSpace = cut.lastIndexOf(' ')
  const shortH = (lastSpace > 15 ? cut.slice(0, lastSpace) : cut).trimEnd()
  return `${shortH}${TITLE_SEP}${suffix}`
}

function publisherSameAs(): string[] {
  return [CONTACT.facebook, CONTACT.youtube].filter(Boolean) as string[]
}

/** Organization + WebSite, base commune à toutes les pages. */
export function buildBaseSchemaGraph(): Record<string, unknown>[] {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_SCHEMA_ID,
      name: SITE.name,
      description: SITE.tagline,
      url: `${SITE.baseUrl}/`,
      logo: {
        '@type': 'ImageObject',
        url: defaultOgImageUrl(),
      },
      sameAs: publisherSameAs(),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_SCHEMA_ID,
      name: SITE.name,
      description: SITE.tagline,
      url: `${SITE.baseUrl}/`,
      publisher: { '@id': ORG_SCHEMA_ID },
      inLanguage: ['fr-FR', 'en', 'th'],
    },
  ]
}

/** Article / blog. */
export function buildArticleSchemaGraph(opts: {
  headline: string
  description: string
  datePublished: string
  url: string
  imageUrl?: string
  inLanguage?: string
  breadcrumbHomeName?: string
  breadcrumbHomeUrl?: string
}): Record<string, unknown>[] {
  const iso = (d: string) => new Date(d).toISOString()
  const img = opts.imageUrl ?? defaultOgImageUrl()
  return [
    {
      '@type': 'BlogPosting',
      headline: opts.headline,
      description: truncateMeta(opts.description, 300),
      datePublished: iso(opts.datePublished),
      dateModified: iso(opts.datePublished),
      author: { '@type': 'Organization', name: SITE.name, '@id': ORG_SCHEMA_ID },
      publisher: { '@id': ORG_SCHEMA_ID },
      mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
      image: { '@type': 'ImageObject', url: img },
      inLanguage: opts.inLanguage ?? 'fr-FR',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: opts.breadcrumbHomeName ?? 'Accueil',
          item: opts.breadcrumbHomeUrl ?? `${SITE.baseUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: opts.headline,
          item: opts.url,
        },
      ],
    },
  ]
}

/** Page de catégorie + fil d’Ariane. */
export function buildCategorySchemaGraph(opts: {
  name: string
  description: string
  url: string
  articleUrls: string[]
  inLanguage?: string
  breadcrumbHomeName?: string
  breadcrumbHomeUrl?: string
}): Record<string, unknown>[] {
  return [
    {
      '@type': 'CollectionPage',
      name: opts.name,
      description: truncateMeta(opts.description),
      url: opts.url,
      isPartOf: { '@id': WEBSITE_SCHEMA_ID },
      inLanguage: opts.inLanguage ?? 'fr-FR',
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: opts.articleUrls.length,
        itemListElement: opts.articleUrls.map((url, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url,
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: opts.breadcrumbHomeName ?? 'Accueil',
          item: opts.breadcrumbHomeUrl ?? `${SITE.baseUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: opts.name,
          item: opts.url,
        },
      ],
    },
  ]
}

export type FaqItem = { question: string; answer: string }

/** FAQPage, favorise les extraits enrichis sur requêtes longue traîne. */
export function buildFaqSchemaGraph(items: FaqItem[]): Record<string, unknown>[] {
  const valid = items.filter((i) => i.question.trim() && i.answer.trim())
  if (valid.length === 0) return []
  return [
    {
      '@type': 'FAQPage',
      mainEntity: valid.map((item) => ({
        '@type': 'Question',
        name: item.question.trim(),
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer.trim(),
        },
      })),
    },
  ]
}

/** Landing pages assurance / agence. */
export function buildWebPageSchemaGraph(opts: {
  name: string
  description: string
  url: string
  inLanguage?: string
  breadcrumbHomeName?: string
  breadcrumbHomeUrl?: string
  breadcrumbCurrentName: string
}): Record<string, unknown>[] {
  return [
    {
      '@type': 'WebPage',
      name: opts.name,
      description: truncateMeta(opts.description, 300),
      url: opts.url,
      inLanguage: opts.inLanguage ?? 'fr-FR',
      isPartOf: { '@id': WEBSITE_SCHEMA_ID },
      publisher: { '@id': ORG_SCHEMA_ID },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: opts.breadcrumbHomeName ?? 'Accueil',
          item: opts.breadcrumbHomeUrl ?? `${SITE.baseUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: opts.breadcrumbCurrentName,
          item: opts.url,
        },
      ],
    },
  ]
}

/** Évite la coupure d’un script si une chaîne contient `</script>`. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
