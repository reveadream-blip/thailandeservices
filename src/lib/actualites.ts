import { getCollection, type CollectionEntry } from 'astro:content'
import type { Lang } from '../i18n/translations'

export type ActualiteEntry = CollectionEntry<'actualites'>

const DATE_LOCALE: Record<Lang, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  th: 'th-TH',
}

/** `bienvenue-actualites-phuket/fr` → clé + langue. */
export function parseActualiteId(id: string): { key: string; lang: Lang } | null {
  const slash = id.indexOf('/')
  if (slash === -1) return null
  const key = id.slice(0, slash)
  const lang = id.slice(slash + 1) as Lang
  if (!key || (lang !== 'fr' && lang !== 'en' && lang !== 'th')) return null
  return { key, lang }
}

export function getActualiteKey(entry: ActualiteEntry): string {
  const parsed = parseActualiteId(entry.id)
  return parsed?.key ?? entry.id
}

/** Articles publiés pour une langue, du plus récent au plus ancien. */
export async function getPublishedActualites(lang: Lang): Promise<ActualiteEntry[]> {
  const posts = await getCollection('actualites', ({ data, id }) => {
    if (data.draft) return false
    const parsed = parseActualiteId(id)
    return parsed?.lang === lang
  })
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export function actualitesIndexHref(lang: Lang): string {
  return lang === 'fr' ? '/actualites/' : `/${lang}/actualites/`
}

export function actualiteArticleHref(key: string, lang: Lang): string {
  return lang === 'fr' ? `/actualites/${key}/` : `/${lang}/actualites/${key}/`
}

export function actualiteHref(entry: ActualiteEntry): string {
  const parsed = parseActualiteId(entry.id)
  if (!parsed) return `/actualites/${entry.id}/`
  return actualiteArticleHref(parsed.key, parsed.lang)
}

/** Versions linguistiques du même article (même dossier). */
export async function getActualiteAlternates(
  key: string,
): Promise<Partial<Record<Lang, ActualiteEntry>>> {
  const all = await getCollection('actualites', ({ data, id }) => {
    if (data.draft) return false
    const parsed = parseActualiteId(id)
    return parsed?.key === key
  })
  const out: Partial<Record<Lang, ActualiteEntry>> = {}
  for (const entry of all) {
    const parsed = parseActualiteId(entry.id)
    if (parsed) out[parsed.lang] = entry
  }
  return out
}

export function formatActualiteDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(DATE_LOCALE[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
