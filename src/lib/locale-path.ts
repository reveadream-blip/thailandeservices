import type { Lang } from '../i18n/translations'

/** Chemin localisé : FR sans préfixe, EN/TH avec `/en/` ou `/th/`. */
export function localePath(lang: Lang, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (lang === 'fr') return normalized.endsWith('/') ? normalized : `${normalized}/`
  const inner = normalized === '/' ? '' : normalized.replace(/\/$/, '')
  return inner ? `/${lang}${inner}/` : `/${lang}/`
}

export function articlePath(slug: string, lang: Lang): string {
  return localePath(lang, `/${slug}`)
}

export function categoryPath(categorySlug: string, lang: Lang): string {
  return localePath(lang, `/category/${categorySlug}`)
}

export function contactPagePath(lang: Lang): string {
  if (lang === 'fr') return '/formulaire-de-contact/'
  return localePath(lang, '/contact')
}

export function homePath(lang: Lang): string {
  return localePath(lang, '/')
}

const SCHEMA_LANG: Record<Lang, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  th: 'th-TH',
}

export function schemaLanguage(lang: Lang): string {
  return SCHEMA_LANG[lang]
}

const DATE_LOCALE: Record<Lang, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  th: 'th-TH',
}

export function formatDate(date: string | Date, lang: Lang): string {
  return new Date(date).toLocaleDateString(DATE_LOCALE[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
