import data from '../data/articles.json'
import articleLocales from '../data/article-locales.json'
import articleOverridesFr from '../data/article-overrides.json'
import articleOverridesI18n from '../data/article-overrides-i18n.json'
import type { Lang } from '../i18n/translations'
import { localePath, articlePath } from './locale-path'
import { absoluteUrl } from './seo'

type FaqItem = { question: string; answer: string }

type FrOverride = {
  appendContactForm?: boolean
  pageTitle?: string
  metaDescription?: string
  pageH1?: string
  intro?: string
  faq?: FaqItem[]
}

type LocaleMeta = {
  title: string
  pageH1: string
  pageTitle: string
  metaDescription: string
}

type I18nOverride = Partial<FrOverride>

const locales = articleLocales as Record<string, Partial<Record<Lang, LocaleMeta>>>
const overridesFr = articleOverridesFr as Record<string, FrOverride>
const overridesI18n = articleOverridesI18n as Record<string, Partial<Record<Lang, I18nOverride>>>

export type ResolvedArticle = {
  title: string
  pageH1: string
  pageTitle: string
  metaDescription: string
  introHtml?: string
  faq: FaqItem[]
  appendContactForm: boolean
  showFrenchBodyNotice: boolean
}

export function getArticleRecord(slug: string) {
  return data.articles.find((a) => a.slug === slug)
}

export function getArticleNavTitle(slug: string, lang: Lang): string {
  return getArticleFields(slug, lang).title.replace(/\.$/, '').trim()
}

/** Remplace les liens internes dans un bloc HTML intro. */
export function localizeIntroHtml(html: string | undefined, lang: Lang): string | undefined {
  if (!html) return undefined
  return html.replace(/href="(\/[^"#?][^"]*)"/g, (_, path: string) => {
    const clean = path.endsWith('/') ? path : `${path}/`
    return `href="${localePath(lang, clean)}"`
  })
}

export function getArticleFields(slug: string, lang: Lang): ResolvedArticle {
  const article = getArticleRecord(slug)
  if (!article) throw new Error(`Article inconnu: ${slug}`)

  const fr = overridesFr[slug] ?? {}
  const i18n = lang === 'fr' ? {} : (overridesI18n[slug]?.[lang] ?? {})
  const loc = lang === 'fr' ? undefined : locales[slug]?.[lang]

  if (lang === 'fr') {
    return {
      title: fr.pageH1 ?? article.title,
      pageH1: fr.pageH1 ?? article.title,
      pageTitle: fr.pageTitle ?? article.title,
      metaDescription: fr.metaDescription ?? article.excerpt,
      introHtml: localizeIntroHtml(fr.intro, 'fr'),
      faq: fr.faq ?? [],
      appendContactForm: Boolean(fr.appendContactForm),
      showFrenchBodyNotice: false,
    }
  }

  const pageH1 = i18n.pageH1 ?? loc?.pageH1 ?? loc?.title ?? article.title

  return {
    title: pageH1,
    pageH1,
    pageTitle: i18n.pageTitle ?? loc?.pageTitle ?? pageH1,
    metaDescription: i18n.metaDescription ?? loc?.metaDescription ?? article.excerpt,
    introHtml: localizeIntroHtml(i18n.intro, lang),
    faq: i18n.faq ?? [],
    appendContactForm: Boolean(i18n.appendContactForm ?? fr.appendContactForm),
    showFrenchBodyNotice: !i18n.intro && Boolean(article.content?.trim()),
  }
}

export function getArticleHreflangAlternates(slug: string): Record<Lang, string> {
  return {
    fr: absoluteUrl(articlePath(slug, 'fr')),
    en: absoluteUrl(articlePath(slug, 'en')),
    th: absoluteUrl(articlePath(slug, 'th')),
  }
}

export function getAllArticleSlugs(): string[] {
  return data.articles.map((a) => a.slug)
}
