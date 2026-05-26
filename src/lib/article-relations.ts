import data from '../data/articles.json'

export type RelatedArticle = {
  slug: string
  title: string
  href: string
}

/** Catégorie WordPress contenant l’article (pour maillage interne). */
export function getCategorySlugForArticle(slug: string): string | undefined {
  for (const cat of data.categories) {
    if (cat.posts.some((p) => p.slug === slug)) return cat.slug
  }
  return undefined
}

/** Autres articles de la même catégorie (max 4). */
export function getRelatedArticles(slug: string, limit = 4): RelatedArticle[] {
  const catSlug = getCategorySlugForArticle(slug)
  if (!catSlug) return []
  const cat = data.categories.find((c) => c.slug === catSlug)
  if (!cat) return []
  return cat.posts
    .filter((p) => p.slug !== slug)
    .slice(0, limit)
    .map((p) => ({
      slug: p.slug,
      title: p.title.replace(/\.$/, '').trim(),
      href: `/${p.slug}/`,
    }))
}
