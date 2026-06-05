import type { Lang } from '../i18n/translations'
import { translations } from '../i18n/translations'
import type { NavIconId, NavItem } from '../data/navigation'
import { NAV_MENU } from '../data/navigation'
import { getLandingSeoFields } from '../i18n/landing-seo'
import { landingPath, landingVariantFromSlug } from './landing-paths'
import { articlePath, categoryPath } from './locale-path'
import { getArticleNavTitle } from './article-i18n'

function navChildHref(slug: string, lang: Lang): string {
  const variant = landingVariantFromSlug(slug)
  if (variant) return landingPath(variant, lang)
  return articlePath(slug, lang)
}

function navChildLabel(slug: string, lang: Lang): string {
  const variant = landingVariantFromSlug(slug)
  if (variant) return getLandingSeoFields(variant, lang).breadcrumbCurrent
  return getArticleNavTitle(slug, lang)
}

export function getMainNav(lang: Lang): NavItem[] {
  const t = translations[lang].nav.menu
  return NAV_MENU.map((group) => ({
    label: t.groups[group.id],
    href: categoryPath(group.categorySlug, lang),
    icon: group.icon as NavIconId,
    children: group.childSlugs.map((slug) => ({
      label: navChildLabel(slug, lang),
      href: navChildHref(slug, lang),
    })),
  }))
}

export function getFooterArchives(lang: Lang) {
  const t = translations[lang].footer.archiveItems
  return NAV_MENU.map((group) => ({
    label: t[group.id],
    href: categoryPath(group.categorySlug, lang),
    count: group.count,
  }))
}

export function getCategoryLabel(categorySlug: string, lang: Lang): string {
  return translations[lang].categories.labels[categorySlug] ?? categorySlug
}
