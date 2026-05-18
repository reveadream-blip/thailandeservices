/** Coquille vide laissée par CF7 après retrait du `<form>`. */
const CF7_EMPTY_SHELL =
  /<div class="wp-block-contact-form-7-contact-form-selector">\s*<div class="wpcf7[^"]*"[^>]*>\s*<div class="screen-reader-response">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/gi

/**
 * Retire les anciens formulaires WordPress / CF7 du HTML importé (sans captcha).
 * Remplacés sur la page article par le composant Contact (Web3Forms + hCaptcha).
 */
export function stripEmbeddedHtmlForms(html: string): string {
  if (!html) return ''
  let out = html
  const re = /<form\b[^>]*>[\s\S]*?<\/form>/gi
  let prev: string | null = null
  while (prev !== out) {
    prev = out
    out = out.replace(re, '')
  }
  out = out.replace(CF7_EMPTY_SHELL, '')
  return out
}

/** Indique si le HTML contient un formulaire embarqué (avant nettoyage). */
export function htmlHasEmbeddedForm(html: string): boolean {
  return /<form\b/i.test(html ?? '')
}

/**
 * Passe les `<h1>` du corps d’article en `<h2>` : la page a déjà un H1 dans l’en-tête.
 */
export function demoteEmbeddedH1(html: string): string {
  if (!html) return ''
  return html
    .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>')
}

/** Retire les titres vides laissés par WordPress (ex. `<h2 class="…"></h2>`). */
export function stripEmptyHeadings(html: string): string {
  if (!html) return ''
  return html.replace(/<h([1-6])(\s[^>]*)?>\s*<\/h\1>/gi, '')
}

/** Nettoyage SEO du HTML importé (formulaires, H1 en double, titres vides). */
export function sanitizeArticleBodyHtml(html: string): string {
  return stripEmptyHeadings(demoteEmbeddedH1(stripEmbeddedHtmlForms(html)))
}
