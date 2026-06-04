import type { Lang } from '../i18n/translations'

/** Corps HTML par langue dans src/data/article-bodies/{slug}.{lang}.html */
const bodies = import.meta.glob<string>('../data/article-bodies/*.html', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function bodyKey(slug: string, lang: Lang): string {
  return `../data/article-bodies/${slug}.${lang}.html`
}

/** HTML du corps si un fichier existe, sinon null → contenu de articles.json (FR). */
export function getTranslatedArticleBody(slug: string, lang: Lang): string | null {
  const html = bodies[bodyKey(slug, lang)]
  return typeof html === 'string' && html.trim() ? html : null
}

export function hasTranslatedArticleBody(slug: string, lang: Lang): boolean {
  return Boolean(getTranslatedArticleBody(slug, lang))
}
