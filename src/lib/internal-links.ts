/**
 * Réécrit les liens internes WordPress vers des chemins relatifs sur ce site.
 * Les images restent en `https://thailande-services.fr/wp-content/uploads/...` :
 * les fichiers correspondants doivent exister dans `public/wp-content/` (voir `npm run media:wp`).
 */
export function rewriteInternalLinks(html: string): string {
  if (!html) return ''
  return html.replace(/https?:\/\/thailande-services\.fr(\/(?!wp-content)[^"'\\s<>]*)/gi, '$1')
}
