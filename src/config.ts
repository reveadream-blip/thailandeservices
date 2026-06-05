import type { Lang } from './i18n/translations'
import { contactPagePath } from './lib/locale-path'

/** Page contact dédiée (selon la langue). */
export function contactFormHref(lang: Lang): string {
  return contactPagePath(lang)
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
  /** Réservé usage interne / config hors page, ne jamais afficher sur le site. */
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
  assuranceArticle: '/assurance-sante-phuket/',
  agenceSurin: '/agence-surin/',
  consulat: '/consulat-de-france-a-phuket/',
}

/** Chaîne utilisable pour Web3Forms, ou `''` si absente / placeholder. */
export function normalizeWeb3FormsAccessKey(raw: unknown): string {
  if (typeof raw !== 'string') return ''
  const t = raw.trim()
  if (!t || t === 'YOUR-WEB3FORMS-ACCESS-KEY') return ''
  return t
}

/** `true` si la clé peut être utilisée (contact ou chatbot). */
export function isConfiguredWeb3FormsAccessKey(key: string): boolean {
  return normalizeWeb3FormsAccessKey(key).length > 0
}

const normalizedPublicWeb3 = normalizeWeb3FormsAccessKey(import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY)

/**
 * Clé Web3Forms pour le formulaire de contact.
 * https://web3forms.com, activer hCaptcha dans le tableau de bord du formulaire.
 */
export const WEB3FORMS_ACCESS_KEY = normalizedPublicWeb3 || 'YOUR-WEB3FORMS-ACCESS-KEY'

/**
 * Clé Web3Forms pour le chatbot (envoi **sans** hCaptcha dans l’UI).
 * Si `PUBLIC_CHATBOT_WEB3FORMS_ACCESS_KEY` est défini **et valide** : 2ᵉ formulaire Web3Forms **sans** hCaptcha.
 * Sinon retombe sur la même clé que le contact. Si `PUBLIC_CHATBOT_*` vaut un placeholder ou une erreur
 * (souvent sur Cloudflare), elle est ignorée pour ne pas bloquer le chatbot alors que `PUBLIC_WEB3FORMS_*` est correcte.
 */
const normalizedChatbotOnly = normalizeWeb3FormsAccessKey(import.meta.env.PUBLIC_CHATBOT_WEB3FORMS_ACCESS_KEY)
export const CHATBOT_WEB3FORMS_ACCESS_KEY =
  normalizedChatbotOnly || normalizedPublicWeb3 || 'YOUR-WEB3FORMS-ACCESS-KEY'

function siteBaseUrl(): string {
  const u = import.meta.env.PUBLIC_SITE_URL
  if (typeof u === 'string' && u.trim().length > 0) {
    return u.replace(/\/$/, '')
  }
  return 'https://thailande-services.fr'
}

/** Zones couvertes (Phuket : suivi francophone ; Surin : assurance, interprète, admin). */
export const SERVICE_AREAS = {
  phuket: 'Phuket',
  surin: 'Surin',
} as const

export const SITE = {
  name: 'Thailande-services.fr',
  tagline: 'Assurance · Interprète · Admin · Surin & Phuket',
  get baseUrl() {
    return siteBaseUrl()
  },
  copyrightYear: new Date().getFullYear(),
}

/** Image Open Graph par défaut (logo ou visuel 1200×630 recommandé en production). */
export const SEO_DEFAULT_OG_IMAGE = '/images/logo.png'

/** Google Search Console, contenu de la balise `meta name="google-site-verification"`. */
export const GOOGLE_SITE_VERIFICATION = 'Qn3FzIUrbaU350tyYdJWRBdJKv5InVyvlCQsKRLvlB8'
