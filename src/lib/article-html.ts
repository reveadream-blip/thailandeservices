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

function escapeHtmlAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function altTextFromSrc(src: string): string | null {
  try {
    const file = src.split('/').pop() ?? ''
    const name = decodeURIComponent(file.replace(/\.[a-z0-9]+$/i, ''))
    const cleaned = name
      .replace(/[-_]+/g, ' ')
      .replace(/\b\d{3,}\b/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    if (cleaned.length >= 4) return cleaned.slice(0, 120)
  } catch {
    /* ignore */
  }
  return null
}

/** Remplit les `alt=""` ou absents sur les images du contenu WordPress importé. */
export function enrichEmptyImageAlts(html: string, fallbackAlt: string): string {
  if (!html) return ''
  const fallback = (fallbackAlt || 'Illustration').trim()
  return html.replace(/<img\b([^>]*?)(\s*\/?)>/gi, (match, attrs, closing) => {
    if (/\balt\s*=\s*(["'])(?!\1\s*\1)([^"']+)\1/i.test(attrs)) return match
    let alt = fallback
    const srcM = attrs.match(/\bsrc\s*=\s*(["'])([^"']+)\1/i)
    if (srcM) {
      const fromSrc = altTextFromSrc(srcM[2])
      if (fromSrc) alt = fromSrc
    }
    const altAttr = ` alt="${escapeHtmlAttr(alt)}"`
    if (/\balt\s*=\s*["']\s*["']/i.test(attrs)) {
      return `<img${attrs.replace(/\balt\s*=\s*["']\s*["']/i, altAttr.trim())}${closing}>`
    }
    return `<img${attrs}${altAttr}${closing}>`
  })
}

/** Nettoyage SEO du HTML importé (formulaires, H1, titres vides, alt images). */
export function sanitizeArticleBodyHtml(html: string, imageAltFallback = ''): string {
  const cleaned = stripEmptyHeadings(demoteEmbeddedH1(stripEmbeddedHtmlForms(html)))
  return enrichEmptyImageAlts(cleaned, imageAltFallback)
}
