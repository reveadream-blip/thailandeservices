import type { Lang } from './i18n/translations'

/** Lien vers le bloc formulaire sur la page d’accueil (selon la langue). */
export function contactFormHref(lang: Lang): string {
  const paths: Record<Lang, string> = {
    fr: '/#contact-form',
    en: '/en/#contact-form',
    th: '/th/#contact-form',
  }
  return paths[lang]
}

/**
 * Coordonnées alignées sur le site en ligne (thailande-services.fr).
 * Ne pas afficher `email` dans le HTML : les robots le collectent (spam).
 */
export const CONTACT = {
  /** Numéro WhatsApp sans + (format wa.me / api.whatsapp.com) */
  whatsappDigits: '66634432634',
  get whatsappLink() {
    return `https://api.whatsapp.com/send?phone=${this.whatsappDigits}`
  },
  get waMeLink() {
    return `https://wa.me/${this.whatsappDigits}`
  },
  /** Lien cliquable tel: */
  get telHref() {
    return `tel:+${this.whatsappDigits}`
  },
  phoneDisplay: '+66 63 443 2634',
  /** Réservé usage interne / config hors page — ne jamais afficher sur le site. */
  email: 'contact@thailande-services.fr',
  facebook: 'https://www.facebook.com/groups/3373034846249628/announcements',
  /** Chaîne (référencement / schéma JSON-LD). */
  youtube: 'https://www.youtube.com/@Farang-in-ThA%C3%AFLand',
  /** Icône YouTube du pied de page « Pour plus d’informations ». */
  youtubeFooterVideo: 'https://www.youtube.com/watch?v=P4GYsGXZdFk',
  instagram: '',
}

/** Pages articles (copie locale). */
export const WP_PAGES = {
  interpreteArticle: '/interprete-thai-francais-anglais-a-phuket/',
  expatriationImmobilier: '/expatriation-a-phuket-besoin-achat-immobilier-ou-locatif/',
  assuranceArticle: '/assurance-sante-thailande-phuket/',
  consulat: '/consulat-de-france-a-phuket/',
}

/**
 * Clé Web3Forms pour le formulaire de contact.
 * https://web3forms.com — activer hCaptcha dans le tableau de bord du formulaire.
 */
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR-WEB3FORMS-ACCESS-KEY'

function siteBaseUrl(): string {
  const u = import.meta.env.PUBLIC_SITE_URL
  if (typeof u === 'string' && u.trim().length > 0) {
    return u.replace(/\/$/, '')
  }
  return 'https://thailande-services.fr'
}

export const SITE = {
  name: 'Thailande-services.fr',
  tagline: 'Assurance - Immobilier - Interprète',
  get baseUrl() {
    return siteBaseUrl()
  },
  copyrightYear: new Date().getFullYear(),
}

/** Image Open Graph par défaut (logo ou visuel 1200×630 recommandé en production). */
export const SEO_DEFAULT_OG_IMAGE = '/images/logo.png'
