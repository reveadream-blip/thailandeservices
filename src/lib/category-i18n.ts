import data from '../data/articles.json'
import categorySeo from '../data/category-seo-i18n.json'
import type { Lang } from '../i18n/translations'
import { localizeIntroHtml } from './article-i18n'
import { getCategoryLabel } from './navigation-i18n'
import { absoluteUrl, truncateMeta, type FaqItem } from './seo'
import { categoryPath } from './locale-path'

type CategorySeoEntry = {
  pageTitle: string
  metaDescription: string
  introHtml?: string
  faq?: FaqItem[]
}

const seoByCategory = categorySeo as Record<string, Partial<Record<Lang, CategorySeoEntry>>>

export function getCategoryRecord(categorySlug: string) {
  return data.categories.find((c) => c.slug === categorySlug)
}

export function getCategoryFields(categorySlug: string, lang: Lang) {
  const cat = getCategoryRecord(categorySlug)
  if (!cat) throw new Error(`Catégorie inconnue: ${categorySlug}`)

  const label = getCategoryLabel(categorySlug, lang)
  const seo = seoByCategory[categorySlug]?.[lang] ?? seoByCategory[categorySlug]?.fr

  return {
    title: label,
    pageTitle: seo?.pageTitle ?? label,
    metaDescription: truncateMeta(
      seo?.metaDescription ?? `${label}, adresses et contacts à Phuket.`,
      160,
    ),
    introHtml: localizeIntroHtml(seo?.introHtml, lang),
    faq: seo?.faq ?? [],
    posts: cat.posts,
  }
}

export function getAllCategorySlugs(): string[] {
  return data.categories.map((c) => c.slug)
}

export function getCategoryHreflangAlternates(categorySlug: string): Record<Lang, string> {
  return {
    fr: absoluteUrl(categoryPath(categorySlug, 'fr')),
    en: absoluteUrl(categoryPath(categorySlug, 'en')),
    th: absoluteUrl(categoryPath(categorySlug, 'th')),
  }
}
