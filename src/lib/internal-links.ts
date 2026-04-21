/**
 * Réécrit les liens internes WordPress vers des chemins relatifs sur ce site.
 * Les URLs /wp-content/ restent absolues (images).
 */
export function rewriteInternalLinks(html: string): string {
  if (!html) return ''
  return html.replace(/https?:\/\/thailande-services\.fr(\/(?!wp-content)[^"'\\s<>]*)/gi, '$1')
}
