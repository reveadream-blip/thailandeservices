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

/** Fichier statique (image, etc.) — sans slash final. */
export function absoluteAssetUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${BASE}${p}`
}

/** Image Open Graph absolue (par défaut : logo). */
export function defaultOgImageUrl(): string {
  return absoluteAssetUrl(SEO_DEFAULT_OG_IMAGE)
}

/** Meta description ~155 caractères pour Google. */
export function truncateMeta(text: string, max = 155): string {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…'
}

function publisherSameAs(): string[] {
  return [CONTACT.facebook, CONTACT.youtube].filter(Boolean) as string[]
}

/** Organization + WebSite — base commune à toutes les pages. */
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

/** Article / blog (contenu français). */
export function buildArticleSchemaGraph(opts: {
  headline: string
  description: string
  datePublished: string
  url: string
  imageUrl?: string
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
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: `${SITE.baseUrl}/`,
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
}): Record<string, unknown>[] {
  return [
    {
      '@type': 'CollectionPage',
      name: opts.name,
      description: truncateMeta(opts.description),
      url: opts.url,
      isPartOf: { '@id': WEBSITE_SCHEMA_ID },
      inLanguage: 'fr-FR',
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
          name: 'Accueil',
          item: `${SITE.baseUrl}/`,
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

/** Évite la coupure d’un script si une chaîne contient `</script>`. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
