import type { Lang } from '../i18n/translations'
import { translations } from '../i18n/translations'
import type { NavIconId, NavItem } from '../data/navigation'
import { NAV_MENU } from '../data/navigation'
import { articlePath, categoryPath } from './locale-path'
import { getArticleNavTitle } from './article-i18n'

export function getMainNav(lang: Lang): NavItem[] {
  const t = translations[lang].nav.menu
  return NAV_MENU.map((group) => ({
    label: t.groups[group.id],
    href: categoryPath(group.categorySlug, lang),
    icon: group.icon as NavIconId,
    children: group.childSlugs.map((slug) => ({
      label: getArticleNavTitle(slug, lang),
      href: articlePath(slug, lang),
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
