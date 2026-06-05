/**
 * Menu et archives, structure partagée (libellés via i18n).
 */

import type { Lang } from '../i18n/translations'

export type NavIconId = 'map' | 'store' | 'shield' | 'globe'

export type NavItem = {
  label: string
  href: string
  icon: NavIconId
  children?: { label: string; href: string }[]
}

export type NavMenuGroup = {
  id: 'adresses' | 'stores' | 'insurance' | 'expat'
  icon: NavIconId
  categorySlug: string
  count: number
  childSlugs: string[]
}

export const NAV_MENU: NavMenuGroup[] = [
  {
    id: 'adresses',
    icon: 'map',
    categorySlug: 'adresses-utiles',
    count: 8,
    childSlugs: [
      'osteopathe-francais-a-phuket',
      'numeros-durgences',
      'hopitaux-a-phuket',
      'administrations',
      'consulat-de-france-a-phuket',
      'alliance-francaise-de-phuket',
      'bcis-ecole-francaise-et-internationale-de-phuket',
      'associations-caritatives-a-phuket',
    ],
  },
  {
    id: 'stores',
    icon: 'store',
    categorySlug: 'les-bonnes-adresses-francophones',
    count: 4,
    childSlugs: [
      'les-hotels-a-phuket',
      'les-commercants-a-phuket',
      'les-loueurs-a-phuket',
      'activites-nautiques-plongee-phuket',
    ],
  },
  {
    id: 'insurance',
    icon: 'shield',
    categorySlug: 'assurance-sante-et-biens-en-thailande',
    count: 3,
    childSlugs: ['assurance-sante-phuket', 'agence-surin', 'maison-de-retraite-phuket'],
  },
  {
    id: 'expat',
    icon: 'globe',
    categorySlug: 'services-expatriation-en-thailande',
    count: 4,
    childSlugs: [
      'interprete-thai-francais-anglais-a-phuket',
      'expatriation-a-phuket-besoin-achat-immobilier-ou-locatif',
      'assurance-sante-axa-a-phuket-thailande',
      'expatriation-et-budget-comment-je-reduis-mes-factures-denergie-meme-a-distance',
    ],
  },
]

/** @deprecated Utiliser `getMainNav(lang)`, conservé pour référence FR. */
export const CATEGORY_LABELS: Record<string, string> = {
  'adresses-utiles': 'Adresses Utiles à Phuket',
  'les-bonnes-adresses-francophones': 'Les bonnes adresses Francophones à Phuket',
  'assurance-sante-et-biens-en-thailande': 'Assurance Santé et Biens à Phuket',
  'services-expatriation-en-thailande': 'Services expatriation en Thaïlande',
}

export function actualitesNavHref(lang: Lang): string {
  return lang === 'fr' ? '/actualites/' : `/${lang}/actualites/`
}
