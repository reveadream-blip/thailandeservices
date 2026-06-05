import type { Lang } from '../i18n/translations'

/** Normalise un pathname (toujours avec slash final, sauf vide). */
export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname : `${pathname}/`
}

/** Retire le préfixe `/en/` ou `/th/` pour obtenir le chemin « canonique » (format FR). */
export function canonicalInternalPath(path: string): string {
  let p = normalizePathname(path.startsWith('/') ? path : `/${path}`)
  if (p === '/en/' || p.startsWith('/en/')) {
    const rest = p === '/en/' ? '/' : `/${p.slice(4)}`
    return normalizePathname(rest)
  }
  if (p === '/th/' || p.startsWith('/th/')) {
    const rest = p === '/th/' ? '/' : `/${p.slice(4)}`
    return normalizePathname(rest)
  }
  return p
}

export type SiteRoute =
  | { kind: 'home' }
  | { kind: 'contact' }
  | { kind: 'landing-phuket' }
  | { kind: 'landing-surin' }
  | { kind: 'article'; slug: string }
  | { kind: 'category'; slug: string }
  | { kind: 'actualites-list' }
  | { kind: 'actualite'; slug: string }

/** Déduit la langue depuis l’URL courante. */
export function langFromPathname(pathname: string): Lang {
  const p = normalizePathname(pathname)
  if (p === '/en/' || p.startsWith('/en/')) return 'en'
  if (p === '/th/' || p.startsWith('/th/')) return 'th'
  return 'fr'
}

/** Interprète un pathname (toute langue) en route logique du site. */
export function parseSiteRoute(pathname: string): SiteRoute {
  const path = canonicalInternalPath(pathname)
  if (path === '/') return { kind: 'home' }
  if (path === '/formulaire-de-contact/' || path === '/contact/') return { kind: 'contact' }

  const segments = path.split('/').filter(Boolean)
  if (segments[0] === 'category' && segments[1]) {
    return { kind: 'category', slug: segments[1] }
  }
  if (segments[0] === 'actualites') {
    if (segments[1]) return { kind: 'actualite', slug: segments[1] }
    return { kind: 'actualites-list' }
  }
  if (segments.length === 1) {
    if (segments[0] === 'assurance-sante-phuket') return { kind: 'landing-phuket' }
    if (segments[0] === 'agence-surin') return { kind: 'landing-surin' }
    return { kind: 'article', slug: segments[0] }
  }
  return { kind: 'home' }
}

export function routeToPath(route: SiteRoute, lang: Lang): string {
  switch (route.kind) {
    case 'home':
      return homePath(lang)
    case 'contact':
      return contactPagePath(lang)
    case 'landing-phuket':
      return localePath(lang, '/assurance-sante-phuket/')
    case 'landing-surin':
      return localePath(lang, '/agence-surin/')
    case 'article':
      return articlePath(route.slug, lang)
    case 'category':
      return categoryPath(route.slug, lang)
    case 'actualites-list':
      return localePath(lang, '/actualites')
    case 'actualite':
      return localePath(lang, `/actualites/${route.slug}`)
    default:
      return homePath(lang)
  }
}

/** Même page dans une autre langue (ex. article FR → `/en/slug/`). */
export function switchLocalePath(pathname: string, targetLang: Lang): string {
  return routeToPath(parseSiteRoute(pathname), targetLang)
}

/** Chemin localisé : FR sans préfixe, EN/TH avec `/en/` ou `/th/`. */
export function localePath(lang: Lang, path: string): string {
  const canonical = canonicalInternalPath(path)
  if (canonical === '/formulaire-de-contact/' || canonical === '/contact/') {
    return contactPagePath(lang)
  }
  if (lang === 'fr') return canonical
  const inner = canonical === '/' ? '' : canonical.replace(/\/$/, '')
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
  return `/${lang}/contact/`
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
