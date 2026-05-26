import type { Lang } from '../i18n/translations'

/** Corps HTML traduits générés dans src/data/article-bodies/ */
const bodies = import.meta.glob<string>('../data/article-bodies/*.html', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function bodyKey(slug: string, lang: Lang): string {
  return `../data/article-bodies/${slug}.${lang}.html`
}

/** HTML traduit pour EN/TH, ou null → utiliser le contenu FR de articles.json */
export function getTranslatedArticleBody(slug: string, lang: Lang): string | null {
  if (lang === 'fr') return null
  const html = bodies[bodyKey(slug, lang)]
  return typeof html === 'string' && html.trim() ? html : null
}

export function hasTranslatedArticleBody(slug: string, lang: Lang): boolean {
  return lang !== 'fr' && Boolean(getTranslatedArticleBody(slug, lang))
}
