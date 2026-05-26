import type { Lang } from '../i18n/translations'
import { localePath } from './locale-path'

/**
 * Réécrit les liens internes WordPress vers des chemins relatifs sur ce site.
 * Les images restent en `https://thailande-services.fr/wp-content/uploads/...` :
 * les fichiers correspondants doivent exister dans `public/wp-content/` (voir `npm run media:wp`).
 */
export function rewriteInternalLinks(html: string, lang: Lang = 'fr'): string {
  if (!html) return ''
  const stripped = html.replace(
    /https?:\/\/thailande-services\.fr(\/(?!wp-content)[^"'\\s<>]*)/gi,
    '$1',
  )
  return stripped.replace(/href="(\/[^"#?][^"]*)"/g, (_, path: string) => {
    const clean = path.endsWith('/') ? path : `${path}/`
    return `href="${localePath(lang, clean)}"`
  })
}
