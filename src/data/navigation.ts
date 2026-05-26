/**
 * Menu et archives — chemins relatifs vers les pages Astro.
 */

import type { Lang } from '../i18n/translations'

export type NavIconId = 'map' | 'store' | 'shield' | 'globe'

export type NavItem = {
  label: string
  href: string
  /** Icône de l’onglet principal (menu desktop + mobile). */
  icon: NavIconId
  children?: { label: string; href: string }[]
}

/** Onglet principal « Actualités » (articles Markdown dans `src/content/actualites/{slug}/`). */
export function actualitesNavHref(lang: Lang): string {
  return lang === 'fr' ? '/actualites/' : `/${lang}/actualites/`
}

export const CATEGORY_LABELS: Record<string, string> = {
  'adresses-utiles': 'Adresses Utiles à Phuket',
  'les-bonnes-adresses-francophones': 'Les bonnes adresses Francophones à Phuket',
  'assurance-sante-et-biens-en-thailande': 'Assurance Santé et Biens à Phuket',
  'services-expatriation-en-thailande': 'Services expatriation en Thaïlande',
}

export const MAIN_NAV_FR: NavItem[] = [
  {
    label: 'Adresses utiles',
    href: '/category/adresses-utiles/',
    icon: 'map',
    children: [
      { label: 'Ostéopathe français à Phuket', href: '/osteopathe-francais-a-phuket/' },
      { label: 'Numéros d’urgences Phuket', href: '/numeros-durgences/' },
      { label: 'Hôpitaux à Phuket', href: '/hopitaux-a-phuket/' },
      { label: 'Administrations à Phuket', href: '/administrations/' },
      { label: 'Consulat de France Phuket', href: '/consulat-de-france-a-phuket/' },
      { label: 'Alliance Française à Phuket', href: '/alliance-francaise-de-phuket/' },
      { label: 'École Française de Phuket', href: '/bcis-ecole-francaise-et-internationale-de-phuket/' },
      { label: 'Associations à Phuket', href: '/associations-caritatives-a-phuket/' },
    ],
  },
  {
    label: 'Bonnes adresses',
    href: '/category/les-bonnes-adresses-francophones/',
    icon: 'store',
    children: [
      { label: 'Les hôtels à Phuket.', href: '/les-hotels-a-phuket/' },
      { label: 'Les commerçants à Phuket', href: '/les-commercants-a-phuket/' },
      { label: 'Les loueurs à Phuket', href: '/les-loueurs-a-phuket/' },
      { label: 'Activités nautiques Phuket.', href: '/activites-nautiques-plongee-phuket/' },
    ],
  },
  {
    label: 'Assurance & santé',
    href: '/category/assurance-sante-et-biens-en-thailande/',
    icon: 'shield',
    children: [
      { label: 'Assurance santé à Phuket', href: '/assurance-sante-thailande-phuket/' },
      { label: 'Maison de retraite Phuket', href: '/maison-de-retraite-phuket/' },
    ],
  },
  {
    label: 'Expatriation',
    href: '/category/services-expatriation-en-thailande/',
    icon: 'globe',
    children: [
      { label: 'Interprète thaï-français-anglais à Phuket!', href: '/interprete-thai-francais-anglais-a-phuket/' },
      {
        label: 'S’expatrier en Thaïlande! besoin d’un achat immobilier ou locatif!',
        href: '/expatriation-a-phuket-besoin-achat-immobilier-ou-locatif/',
      },
      { label: 'Assurance santé à Phuket Thaïlande', href: '/assurance-sante-thailande-phuket/' },
    ],
  },
]

export const FOOTER_ARCHIVES = [
  { label: 'Adresses Utiles à Phuket', href: '/category/adresses-utiles/', count: 8 },
  { label: 'Assurance Santé et Biens à Phuket', href: '/category/assurance-sante-et-biens-en-thailande/', count: 2 },
  { label: 'Les bonnes adresses Francophones à Phuket', href: '/category/les-bonnes-adresses-francophones/', count: 4 },
  { label: 'Services expatriation en Thaïlande', href: '/category/services-expatriation-en-thailande/', count: 5 },
]
