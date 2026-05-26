import { getCollection, type CollectionEntry } from 'astro:content'

export type ActualiteEntry = CollectionEntry<'actualites'>

/** Articles publiés, du plus récent au plus ancien. */
export async function getPublishedActualites(): Promise<ActualiteEntry[]> {
  const posts = await getCollection('actualites', ({ data }) => !data.draft)
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export function actualiteHref(entry: ActualiteEntry): string {
  return `/actualites/${entry.id}/`
}

export function formatActualiteDate(date: Date, locale = 'fr-FR'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
